import { useState } from "react";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import styles from "./register.module.css";

const Register = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    address: "",
    password: "",
  });

  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form is being submitted...", formData);

    try {
      const res = await fetch("http://localhost:2025/api/v1/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.status === 201 || res.status === 204) {
        toast.success("Registered successfully");
        navigate("/auth/login");
        return;
      }
      const data = await res.json();
      toast.error(data.error || "Registration failed");
    } catch (error) {
      console.error("Fetch Error:", error);
      toast.error("Server error. Check your connection.");
    }
  };

  return (
    <div className="container">
      <Link to="/" className={styles.homeLink}>
        Home
      </Link>

      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        <div>
          <input
            name="first_name"
            type="text"
            placeholder="enter firstname"
            value={formData.first_name}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            name="last_name"
            type="text"
            placeholder="enter lastname"
            value={formData.last_name}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            name="email"
            type="email"
            placeholder="enter email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            name="password"
            type="password"
            placeholder="enter password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            name="address"
            type="text"
            placeholder="enter address"
            value={formData.address}
            onChange={handleChange}
          />
        </div>

        <div className={styles.authLinkContainer}>
          <p>Already have an account? </p>
          <Link className={styles.authLink} to="/auth/login">
            Login
          </Link>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Register;
