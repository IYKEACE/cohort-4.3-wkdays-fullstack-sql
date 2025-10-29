import nodemailer from "nodemailer";
import crypto from "crypto";
import { hashOTP, verifyOTP } from "../utils/utilities.js";
import { pool } from "../database/connection.js";
import {
  generateToken,
  hashPassword,
  verifyPassword,
} from "../utils/utilities.js";
import {
  registerUser,
  findEmail,
  passwordReset,
} from "../database/queries/sql.js";

// Full CRUD application

/**
 * Register
 */

export const register = async (req, res) => {
  try {
    const { first_name, last_name, email, role, password } = req.body;
    const hashedPassword = hashPassword(password);
    const values = [first_name, last_name, email, role, hashedPassword];
    const { rows } = await pool.query(findEmail, [email]);
    console.log(rows[0]);
    if (rows[0]) {
      res.status(401).json({
        message: "user already exists, kindly login",
      });
    }
    const result = await pool.query(registerUser, values);
    const firstname = result.rows[0].first_name;
    console.log("RESULT", result);
    res.status(201).json({
      status: "success",
      data: {
        message: `Welcome aboard ${firstname}, your account has been created successfully`,
      },
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

/**
 * Login
 */

export const login = async (req, res) => {
  try {
    const { email } = req.body;
    const { rows } = await pool.query(findEmail, [email]);
    const { id, role, first_name } = rows[0];
    console.log(id, role);

    // check password match
    const checkIfPasswordMatch = verifyPassword(
      rows[0].password,
      req.body.password
    );

    // if pass does not match
    if (!checkIfPasswordMatch) {
      return res.status(401).json({
        error:
          "Invalid User credentials, Either email or password is incorrect",
      });
    }

    //generate token
    const token = generateToken(
      {
        id,
        role,
      },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "7d" }
    );
    return res.status(200).json({
      status: "success",
      id,
      token,
      message: `Welcome back ${first_name}, you have logged in successfully`,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

/**
 * Forgot password
 */

// forgetpassword | otp email verification | otp sms
export const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    const { rows } = await pool.query(findEmail, [email]);
    if (!rows[0]) {
      res.status(401).json({
        message: "User does not exist, kindly register",
      });
    }

    // Generate OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString(); // 6 digits
    const otpExpires = Date.now() + 10 * 60 * 1000; // 10 minutes

    await pool.query(
      `UPDATE users SET otp = $1, otp_expires = $2 WHERE email = $3`,
      [otp, otpExpires, email]
    );

    // const otp = crypto.randomInt(100000, 999999).toString(); // 6 digits
    // const otpExpires = Date.now() + 10 * 60 * 1000; // 10 minutes
    // Hash the OTP before storing
    const hashedOtp = hashOTP(otp);
    await pool.query(
      "UPDATE users SET otp = $1, otp_expires = $2 WHERE email = $3",
      [hashedOtp, otpExpires, email]
    );

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Send OTP via email (configure transporter)
    // const transporter = nodemailer.createTransport({
    //   service: "Gmail",
    //   host: process.env.SMTP_HOST,
    //   port: process.env.SMTP_PORT,
    //   secure: process.env.SMTP_SECURE,
    //   auth: {
    //     user: process.env.SMTP_USER,
    //     pass: process.env.SMTP_PASS,
    //   },
    // });

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: email,
      subject: "Password Reset OTP",
      text: `Your OTP is ${otp}. It will expire in 10 minutes.`,
    });

    res.status(200).json({ message: "OTP sent to email" });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
};

/**
 * Reset password
 */
export const resetPassword = async (req, res) => {
  try {
    const { email, otp, newPassword } = req.body;
    if (!email || !otp || !newPassword) {
      return res
        .status(400)
        .json({ message: "email, otp and newPassword required" });
    }

    const { rows } = await pool.query(findEmail, [email]);
    const user = rows[0];
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Check expiration
    if (
      !user.otp ||
      !user.otp_expires ||
      Date.now() > Number(user.otp_expires)
    ) {
      return res.status(400).json({ message: "OTP expired or not set" });
    }

    // Verify hashed OTP
    const isValid = verifyOTP(user.otp, otp);
    if (!isValid) {
      return res.status(400).json({ message: "Invalid OTP" });
    }

    // Hash new password and update, clear OTP fields
    const hashedpassword = hashPassword(newPassword);
    await pool.query(passwordReset, [hashedpassword, email]);

    return res.status(200).json({ message: "Password reset successful" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
