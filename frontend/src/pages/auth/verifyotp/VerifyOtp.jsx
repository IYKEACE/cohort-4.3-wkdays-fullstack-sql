import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import styles from "./verifyOtp.module.css";

const VerifyOtp = () => {
  const [formData, setFormData] = useState({
    email: "",
    otp: "",
    newPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
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
        "https://cohort-4-3-wkdays-fullstack-sql-2a8w.onrender.com/api/v1/resetPassword",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        },
      );

      const data = await res.json();

      if (res.status === 200) {
        toast.success(data.message);
        navigate("/auth/login");
        return;
      }

      if (res.status === 400) {
        toast.error(data.message);
        return;
      }

      if (res.status === 404) {
        toast.error(data.message);
        return;
      }

      toast.error(data.error || "Something went wrong");
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
        <h1>Reset Password</h1>
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
            name="otp"
            type="text"
            placeholder="Enter OTP"
            value={formData.otp}
            onChange={handleChange}
            required
          />
        </div>
        <div style={{ position: "relative" }}>
          <input
            name="newPassword"
            type={showPassword ? "text" : "password"}
            placeholder="Enter new password"
            value={formData.newPassword}
            onChange={handleChange}
            required
          />
          <span
            onClick={() => setShowPassword(!showPassword)}
            style={{
              position: "absolute",
              right: "10px",
              top: "50%",
              transform: "translateY(-50%)",
              cursor: "pointer",
              userSelect: "none",
            }}
          >
            {showPassword ? "🙈" : "👁️"}
          </span>
        </div>

        <button type="submit">Submit</button>

        <div className={styles.authLinkContainer}>
          <p>
            Remembered your password?{" "}
            <Link className={styles.authLink} to="/auth/login">
              Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default VerifyOtp;
