export const isAuthenticated = () => {
  // Check if the token exists in storage
  return !!localStorage.getItem("token");
};

export const login = (token) => {
  // Save the actual token from the backend
  localStorage.setItem("token", token);
};

export const logout = () => {
  // Clear everything on logout
  localStorage.removeItem("token");
  localStorage.removeItem("auth");
};

// export const isAuthenticated = () => {
//   return localStorage.getItem("auth") === "true";
// };

// export const login = () => {
//   localStorage.setItem("auth", "true");
// };

// export const logout = () => {
//   localStorage.removeItem("auth");
// };
