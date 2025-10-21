import { pool } from "../connection.js";


async function seedPostData() {
  try {
    await pool.query(`
    INSERT INTO posts (post_owner_id, post_tittle, post_desc, post_comment) 
    VALUES
      (1,'CEO IDU GROUP', 'Building solutions to problems', 'Have used the websites it is legit'),
      (2,'How we grow in 5 years', 'Consistency and inspiration from my teams', 'inspiring'),
      (3,'Integrity was key', 'We saw the future we were motivated', 'wonderful')
    `);
    console.log("post seeded successully.");
  } catch (error) {
    console.log("seed migration failed", error);
  }
}

export default seedPostData;
