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
      req.body.password,
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
      { expiresIn: "7d" },
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
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  // Connection settings
  connectionTimeout: 10000,
  greetingTimeout: 10000,
  socketTimeout: 15000,
  // Pooling for better performance
  pool: true,
  maxConnections: 5,
});

// Verify with better error logging
transporter.verify((error, success) => {
  if (error) {
    console.error("❌ Mail transporter error:", {
      message: error.message,
      code: error.code,
      command: error.command,
    });
  } else {
    console.log("✅ Mail server is ready");
  }
});

export const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;

    // Check if transporter is ready
    if (!transporter.options.auth.pass) {
      console.error("❌ Email password not configured");
      return res.status(503).json({
        message: "Email service not configured properly",
      });
    }

    const { rows } = await pool.query(findIfEmailExist, [email]);
    if (!rows[0]) {
      return res.status(401).json({
        message: "User does not exist. Kindly register.",
      });
    }

    // Generate OTP
    const otp = crypto.randomInt(100000, 999999).toString();
    const otpExpires = Date.now() + 10 * 60 * 1000;
    const hashedOtp = hashOTP(otp);
    await pool.query(forgetPassword, [hashedOtp, otpExpires, email]);

    // Send email with retry logic
    let mailSent = false;
    let lastError = null;

    for (let attempt = 1; attempt <= 3; attempt++) {
      try {
        await transporter.sendMail({
          from: `"Support Team" <${process.env.EMAIL_USER}>`,
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
        mailSent = true;
        break;
      } catch (mailError) {
        lastError = mailError;
        console.error(`❌ Email attempt ${attempt} failed:`, mailError.message);
        if (attempt < 3) {
          await new Promise((resolve) => setTimeout(resolve, 2000)); // Wait 2 seconds before retry
        }
      }
    }

    if (!mailSent) {
      throw lastError || new Error("Failed to send email after 3 attempts");
    }

    return res.status(200).json({ message: "OTP sent to your email" });
  } catch (error) {
    // Handle specific email errors
    if (error.code === "EAUTH") {
      console.error("❌ Authentication failed - check your email/password");
      return res.status(503).json({
        message: "Email authentication failed. Please contact support.",
      });
    }

    if (error.code === "ECONNECTION" || error.code === "ETIMEDOUT") {
      console.error("❌ Mail connection error:", error.message);
      return res.status(503).json({
        message:
          "Email service temporarily unavailable. Please try again later.",
      });
    } 

    console.error("❌ forgotPassword error:", error);
    return res.status(500).json({
      message: "Something went wrong, please try again",
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

//for forget password
// const otp = crypto.randomInt(100000, 999999).toString(); // 6 digits
// const otpExpires = Date.now() + 10 * 60 * 1000; //
//  10 minutes
// Hash the OTP before storing
