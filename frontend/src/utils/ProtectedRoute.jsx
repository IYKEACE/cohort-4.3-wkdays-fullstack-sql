import { Navigate } from "react-router-dom";
import { isAuthenticated } from "./auth";

const ProtectedRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/auth/login" />;
};
export default ProtectedRoute;
