import { pool } from "../database/connection.js";
import { hashPassword } from "../utils/utilities.js";
import {
  singleUserById,
  allUsers,
  updateUsers,
  deleteUserById,
} from "../database/queries/sql.js";

/**
 * get single users
 */
export const getSingleUser = async (req, res) => {
  try {
    const { id } = req.params;

    const { rows } = await pool.query(singleUserById, [id]);

    if (rows.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json(rows[0]);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

/**
 * gET ALL USERS
 */

/**
 * get all user
 */

export const getAllUsers = async (req, res) => {
  try {
    const { rows } = await pool.query(allUsers);

    if (rows.length === 0) {
      return res.status(404).json({ message: "No users found" });
    }

    res.status(200).json({
      message: "Users fetched successfully",
      users: rows,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

/**
 * Update user
 */

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { first_name, last_name, email, password } = req.body;
    const hashedpassword = hashPassword(password);
    const { rows } = await pool.query(updateUsers, [
      first_name,
      last_name,
      email,
      hashedpassword,
      id,
    ]);

    if (rows.length === 0) {
      res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({
      message: "User updated successfully",
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

/**
 * delete user
 */
export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { rows } = await pool.query(deleteUserById, [id]);

    if (rows.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
