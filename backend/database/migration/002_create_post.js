// id, post_tittle, post_desc, post_comment

import { pool } from "../connection.js";

const postTable = `
    DROP TABLE IF EXISTS posts CASCADE;
      CREATE TABLE IF NOT EXISTS posts (
      post_id SERIAL PRIMARY KEY,
      post_owner_id INTEGER NOT NULL,
      post_tittle VARCHAR(150) NOT NULL,
      post_desc TEXT NOT NULL,
      post_comment TEXT,
      FOREIGN KEY (post_owner_id) REFERENCES users(id) ON DELETE CASCADE,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
    `;

async function createPostTable() {
  try {
    const create = await pool.query(postTable);
    console.log(
      `posts table ${create[0].command}PED and posts table ${create[1]}D`
    );
    console.log("post table created successully.");
  } catch (error) {
    console.log("post migration failed", error);
  }
}

export default createPostTable;
