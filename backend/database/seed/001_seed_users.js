import { pool } from "../connection.js";
import { hashPassword } from "../../utils/utilities.js";

const passkey = process.env.PASSWORD;
const salt = process.env.SALT;
const hashedPassword = hashPassword(passkey, salt);


async function seedUserData() {
  try {
    await pool.query(`
    INSERT INTO users (first_name, last_name, email, role, password) 
    VALUES
        ('Mubarak', 'Ismail', 'mubarak_12@email.com', 'admin', '${hashedPassword}'),
        ('Maruf', 'Alimi', 'alimi_12@email.com', 'superadmin','${hashedPassword}'),
        ('David', 'Ugochukwu', 'david_12@email.com', 'user', '${hashedPassword}'),
        ('Thomas', 'Tuchela', 'thomas_12@email.com', 'employee', '${hashedPassword}')
    `);
    console.log("User data seeded successully.");
  } catch (error) {
    console.log("Unable to seed User data", error);
  }
}

export default seedUserData;
