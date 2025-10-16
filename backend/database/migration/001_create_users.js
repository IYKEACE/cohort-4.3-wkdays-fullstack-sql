import { pool } from "../connection.js";

async function createConnectionToDB() {
  try {
    await pool.query(`
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
    `);
    console.log("Users table created successully.");
    process.exit(0);
  } catch (error) {
    console.log("User migration failed", error);
    process.exit(1);
  }
}

createConnectionToDB();
