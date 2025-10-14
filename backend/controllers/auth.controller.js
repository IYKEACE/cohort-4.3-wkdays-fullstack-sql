import { pool } from "../database/connection.js";
import {
  generateToken,
  hashPassword,
  verifyPassword,
} from "../utils/utilities.js";
import { registerUser, findEmail } from "../database/queries/sql.js";

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
      process.env.JWT_SECRET_KEY, { expiresIn: "7d" }
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

// export const forgetPassword = async (req, res) => {
//   try {
//     const { email } = req.body;
//   } catch (error) {}
// };

/**
 * Reset password
 */

/**
 * Verify otp
 */
