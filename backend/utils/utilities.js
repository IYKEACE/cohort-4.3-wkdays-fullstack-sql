import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

dotenv.config();
const secretKey = process.env.JWT_SECRET_KEY;
const salt = process.env.SALT;

/**
 * @function verifyToken
 */