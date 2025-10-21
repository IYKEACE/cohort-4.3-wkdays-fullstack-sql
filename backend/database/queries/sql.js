export const registerUser =
  "INSERT INTO users (first_name, last_name, email, role, password) VALUES ($1, $2, $3, $4, $5) RETURNING *";
export const findEmail = "SELECT * FROM users WHERE email = $1";

export const findIfEmailExist = "SELECT * FROM users  WHERE email = $1";

export const passwordReset = `
  UPDATE users
  SET password = $1, otp = NULL, otp_expires = NULL
  WHERE email = $2
`;

export const singleUserById = "SELECT * FROM users WHERE id = $1";

export const allUsers = "SELECT * FROM users ORDER BY id ASC";

export const updateUsers =
  "UPDATE users SET first_name = $1, last_name = $2, email = $3, role = $4 WHERE id = $5 RETURNING *";

export const deleteUserById = "DELETE FROM users WHERE id = $1 RETURNING *";


export const findPost = "SELECT * FROM posts WHERE id = $1";

// SELECT ALL WHERE EMAIL = $1
