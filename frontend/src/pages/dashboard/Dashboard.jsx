import React, { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import {
  BiCog,
  BiStats,
  BiBulb,
  BiBoltCircle,
  BiGroup,
  BiTask,
  BiLogOut,
} from "react-icons/bi";
import styles from "./dashboard.module.css";

const Dashboard = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const logoutUser = () => {
    localStorage.clear();
    navigate("/auth/login");
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className={styles.dashboardWrapper}>
      {isMenuOpen && <div className={styles.overlay} onClick={closeMenu}></div>}

      <div className={`${styles.menu} ${isMenuOpen ? styles.menuOpen : ""}`}>
        <div className={styles.logo}>
          <img src="/TESLA.png" alt="Logo" />
        </div>

        <div className={styles.list}>
          <Link to="/dashboard" className={styles.item} onClick={closeMenu}>
            <BiStats /> Reports
          </Link>
          <Link
            to="/dashboard/library"
            className={styles.item}
            onClick={closeMenu}
          >
            <BiBoltCircle /> Library
          </Link>
          <Link
            to="/dashboard/users"
            className={styles.item}
            onClick={closeMenu}
          >
            <BiGroup /> People
          </Link>
          <Link
            to="/dashboard/activities"
            className={styles.item}
            onClick={closeMenu}
          >
            <BiTask /> Activities
          </Link>
        </div>

        <div className={styles.support}>
          <h2 className={styles.supportTitle}>Support</h2>
          <div className={styles.list}>
            <Link
              to="/dashboard/get-started"
              className={styles.item}
              onClick={closeMenu}
            >
              <BiBulb /> Get Started
            </Link>
            <Link
              to="/dashboard/settings"
              className={styles.item}
              onClick={closeMenu}
            >
              <BiCog /> Settings
            </Link>
          </div>

          <div className={styles.accountSection}>
            <div className={styles.userProfile}>
              <img src="/PIcture.jpeg" alt="User" className={styles.avatar} />
              <div className={styles.userInfo}>
                <span className={styles.userName}>Iyke Aceee</span>
                <span className={styles.userEmail}>iykee@tesla.com</span>
              </div>
            </div>
            <button onClick={logoutUser} className={styles.logoutButton}>
              <BiLogOut />
              <span> Logout</span>
            </button>
          </div>
        </div>
      </div>

      <main className={styles.mainContent}>
        {/* 🟢 context={{ toggleMenu }} allows DashboardHome to trigger setIsMenuOpen */}
        <Outlet context={{ toggleMenu }} />
      </main>
    </div>
  );
};

export default Dashboard;
