export const registerUser = 
"INSERT INTO users (first_name, last_name, email, role, password) VALUES ($1, $2, $3, $4, $5) RETURNING *";