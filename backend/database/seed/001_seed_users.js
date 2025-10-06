import { pool } from "../connection.js";

async function seedUserData() {
  try {
    await pool.query(`
    INSERT INTO users (first_name, last_name, email, role, password) 
    VALUES
      ('David', 'Ugochukwu', 'ikechukwuu338@email.com', 'admin', 'David1234'),
      ('Ifeanyi', 'Okonkwo', 'ifeanyi@email.com', 'user', 'David1234'),
      ('Thomas', 'Tuchela', 'tuchela@email.com', 'employee', 'David1234'),
      ('Mubarak', 'Ismail', 'mubarak@email.com', 'superadmin','David1234')
    `);
    console.log("User data seeded successully.");
    process.exit(0);
  } catch (error) {
    console.log("Unable to seed User data", error);
    process.exit(1);
  }
}

seedUserData();
