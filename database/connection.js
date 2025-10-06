import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const { Pool } = pg;

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl:
  process.env.NODE_ENV === "production"
      ? { rejectUnauthorized: false }
      : false,
});

// create connection to db
const createConnectionToDB = async () => {
  try {
    const client = await pool.connect();
    console.log("Connected to the database successfully.");
    return client;
  } catch (error) {
    console.error("Error connecting to the database:", error);
    throw error;
  }
};
export default createConnectionToDB;