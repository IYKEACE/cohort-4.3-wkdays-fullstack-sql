import { pool } from "../connection.js";

const userTable = `
      DROP TABLE IF EXISTS users CASCADE;
      CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      first_name VARCHAR(150) NOT NULL,
      last_name VARCHAR(150) NOT NULL,
      email VARCHAR(100) UNIQUE NOT NULL,
      role VARCHAR(100) DEFAULT 'user',
      otp VARCHAR(225),
      otp_expires BIGINT,
      password VARCHAR(250) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
    `;

async function createConnectionToDB() {
  try {
    const create = await pool.query(userTable);
    console.log(
      `users table ${create[0].command}PED and ${create[1].command}D`
    );
    console.log("User table created successfully");
  } catch (error) {
    console.log("User migration failed", error);
  }
}

export default createConnectionToDB;
