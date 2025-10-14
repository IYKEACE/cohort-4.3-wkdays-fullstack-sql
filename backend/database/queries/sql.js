export const registerUser = 
"INSERT INTO users (first_name, last_name, email, role, password) VALUES ($1, $2, $3, $4, $5) RETURNING *";
export const findEmail = "SELECT * FROM users WHERE email = $1";

export const findIfEmailExist = "SELECT * FROM users  WHERE email = $1";


// SELECT ALL WHERE EMAIL = $1