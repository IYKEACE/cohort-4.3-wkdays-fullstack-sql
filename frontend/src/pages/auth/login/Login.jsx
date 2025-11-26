import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import styles from "./login.module.css";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:2025/api/v1/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      console.log("RES", res);
      const data = await res.json();
      console.log("DATA LOGIN VALUES", data);

      if (res.status === 200) {
        toast.success(data.message || "Login successful!");
        // Redirect to dashboard page
        navigate("/auth/dashboard");
      } else {
        toast.error(data.error || "Login failed");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="container">
      <Link to="/" className={styles.homeLink}>
        Home
      </Link>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div>
          <input
            name="email"
            type="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            name="password"
            type="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Submit</button>

        <div className={styles.authLinkContainer}>
          <p>
            Don't have an account?{" "}
            <Link className={styles.authLink} to="/auth/register">
              Register
            </Link>
          </p>
          <Link className={styles.authLink} to="/auth/forgot-password">
            Forgot password?
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
