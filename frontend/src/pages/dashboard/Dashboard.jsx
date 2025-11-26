import { Link, Outlet, useNavigate } from "react-router-dom";
import { logout } from "../../utils/auth";

const Dashboard = () => {
  const navigae = useNavigate();

  // handle logout
  const logoutUser = () => {
    logout();
    navigae("/auth/login");
  };

  return (
    <div className="container">
      <h1>Dashbaord</h1>
      <p>Welcome to your dashboard</p>

      <div>
        <Link to="/dashboard/profile">Profile</Link>
        <Link to="/dashboard/users">Users</Link>
        <Link to="/dashboard/settings">Settings</Link>
        <button onClick={logoutUser}>Logout</button>
      </div>
      <Outlet />
    </div>
  );
};

export default Dashboard;
