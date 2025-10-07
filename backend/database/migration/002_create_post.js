// id, post_tittle, post_desc, post_comment

import { pool } from "../connection.js";

async function createPostTable() {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS posts (
      id SERIAL PRIMARY KEY,
      post_owner_id INTEGER NOT NULL,
      post_tittle VARCHAR(150) NOT NULL,
      post_desc TEXT NOT NULL,
      post_comment TEXT,
      FOREIGN KEY (post_owner_id) REFERENCES users(id) ON DELETE CASCADE,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
    `);
    console.log("post table created successully.");
    process.exit(0);
  } catch (error) {
    console.log("post migration failed", error);
    process.exit(1);
  }
}

createPostTable();