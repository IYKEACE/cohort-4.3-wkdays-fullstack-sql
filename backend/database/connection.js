import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const { Pool } = pg;

const connectionString = process.env.DATABASE_URL;

export const pool = new Pool({
  connectionString,
  ssl: {
    require: true,
    rejectUnauthorized: false,
  },
});

const createConnectionToDB = async () => {
  try {
    const client = await pool.connect();
    console.log("✅ Connected to the database successfully.");
    return client;
  } catch (error) {
    console.error("❌ Error connecting to the database:", error);
    throw error;
  }
};

export default createConnectionToDB;
