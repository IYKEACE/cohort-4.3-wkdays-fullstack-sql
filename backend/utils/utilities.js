import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

dotenv.config();
const secretKey = process.env.JWT_SECRET_KEY;
const salt = +process.env.SALT;

/**
 * @function generateToken
 * @param { object } payload - The request object
 * @returns { object } JSON token
 */
export function generateToken(payload) {
  const token = jwt.sign(payload, secretKey);
  return token;
}

/**
 * @function verifyToken
 * @param {object} token - The request object
 * @return {object} JSON payload
 */
export function verifyToken(token) {
  try {
    const payload = jwt.verify(token, secretKey);
    return payload;
  } catch (error) {
    return false;
  }
}

/**
 * @function hashPassword
 * @param {string} password
 * @returns {string} hash password
 */
export function hashPassword(password) {
  return bcrypt.hashSync(password, salt);
}

/**
 * @function verifyPassword
 * @param {object} hashPassword - The request object
 * @param {object} password - The response object
 * @return {object} JSON payload
 */
export function verifyPassword(hashPassword, password) {
  return bcrypt.compareSync(password, hashPassword);
}

// Alternative: Export all functions as a named object
// export { generateToken, verifyToken, hashPassword, verifyPassword };