import { pool } from "../database/connection.js";
import { hashPassword } from "../utils/utilities.js";
import { registerUser } from "../database/queries/sql.js";
// Full CRUD application

/**
 * Register
 */

export const register = async (req, res) => {
  try {
    const { first_name, last_name, email, role, password } = req.body;
    const hashedPassword = hashPassword(password);
    const values = [first_name, last_name, email, role, hashedPassword];
    const result = await pool.query(registerUser, values);
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

/**
 * Login
 */

/**
 * Forgot password
 */

/**
 * Reset password
 */

/**
 * Verify otp
 */
