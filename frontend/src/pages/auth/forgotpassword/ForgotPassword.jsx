import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import styles from "./forgotpassword.module.css";

const ForgotPassword = () => {
  const [formData, setFormData] = useState({ email: "" });
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
      const res = await fetch(
        "https://cohort-4-3-wkdays-fullstack-sql-2a8w.onrender.com/api/v1/forgetPassword",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        },
      );

      const data = await res.json();

      if (res.status === 200) {
        toast.success(data.message); // "OTP sent to your email"
        navigate("/auth/verify-otp");
        return;
      }

      if (res.status === 401) {
        toast.error(data.message); // "User does not exist. Kindly register."
        return;
      }

      if (res.status === 503) {
        toast.error(data.message); // "Email service temporarily unavailable..."
        return;
      }

      toast.error(data.message || "Unable to send reset email");
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
        <h1>Forgot Password</h1>
        <p>Enter your email address to reset your password</p>
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

        <button type="submit">Submit</button>

        <div className={styles.authLinkContainer}>
          <p>
            Don't have an account?{" "}
            <Link className={styles.authLink} to="/auth/register">
              Register
            </Link>
          </p>
          <Link className={styles.authLink} to="/auth/login">
            Back to Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
