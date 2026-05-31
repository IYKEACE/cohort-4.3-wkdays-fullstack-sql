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
  forgetPassword,
} from "../database/queries/sql.js";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

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

    const checkIfPasswordMatch = verifyPassword(
      rows[0].password,
      req.body.password,
    );

    if (!checkIfPasswordMatch) {
      return res.status(401).json({
        error:
          "Invalid User credentials, Either email or password is incorrect",
      });
    }

    const token = generateToken({ id, role }, process.env.JWT_SECRET_KEY, {
      expiresIn: "7d",
    });

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
 * Forgot Password
 */
export const forgotPassword = async (req, res) => {
  try {
    console.log("RESEND KEY:", process.env.RESEND_API_KEY);
    const { email } = req.body;

    if (!process.env.RESEND_API_KEY) {
      console.error("❌ Resend API key not configured");
      return res.status(503).json({
        message: "Email service not configured properly",
      });
    }

    const { rows } = await pool.query(findEmail, [email]);
    if (!rows[0]) {
      return res.status(401).json({
        message: "User does not exist. Kindly register.",
      });
    }

    // Generate OTP
    const otp = crypto.randomInt(100000, 999999).toString();
    const otpExpires = Date.now() + 10 * 60 * 1000; // 10 minutes
    const hashedOtp = hashOTP(otp);
    await pool.query(forgetPassword, [hashedOtp, otpExpires, email]);

    // Send email via Resend
    const { error: mailError } = await resend.emails.send({
      from: "Support Team <onboarding@resend.dev>",
      to: email,
      subject: "Password Reset OTP",
      text: `Your OTP is ${otp}. It expires in 10 minutes.`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 400px; margin: auto;">
          <h2>Password Reset</h2>
          <p>Your OTP code is:</p>
          <h1 style="letter-spacing: 8px; color: #4F46E5;">${otp}</h1>
          <p>This code expires in <strong>10 minutes</strong>.</p>
          <p>If you did not request this, please ignore this email.</p>
        </div>
      `,
    });

    if (mailError) {
      console.error("❌ Resend email error:", mailError);
      return res.status(503).json({
        message:
          "Email service temporarily unavailable. Please try again later.",
      });
    }

    return res.status(200).json({ message: "OTP sent to your email" });
  } catch (error) {
    console.error("❌ forgotPassword error:", error);
    return res.status(500).json({
      message: "Something went wrong, please try again",
    });
  }
};

/**
 * Reset Password
 */
export const resetPassword = async (req, res) => {
  try {
    const { email, otp, newPassword } = req.body;

    if (!email || !otp || !newPassword) {
      return res.status(400).json({
        message: "email, otp and newPassword required",
      });
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

    // Hash new password and update
    const hashedpassword = hashPassword(newPassword);
    await pool.query(passwordReset, [hashedpassword, email]);

    return res.status(200).json({ message: "Password reset successful" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
