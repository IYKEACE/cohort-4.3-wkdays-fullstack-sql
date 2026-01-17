import React from "react";
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

  const logoutUser = () => {
    localStorage.clear();
    navigate("/auth/login");
  };

  return (
    <div className={styles.dashboardWrapper}>
      <div className={styles.menu}>
        <div className={styles.logo}>
          <img src="/TESLA.png" alt="Logo" />
        </div>

        <div className={styles.list}>
          <Link to="/dashboard" className={styles.item}>
            <BiStats /> Reports
          </Link>
          <Link to="/dashboard/library" className={styles.item}>
            <BiBoltCircle /> Library
          </Link>
          <Link to="/dashboard/users" className={styles.item}>
            <BiGroup /> People
          </Link>
          <Link to="/dashboard/activities" className={styles.item}>
            <BiTask /> Activities
          </Link>
        </div>

        <div className={styles.support}>
          <h2>Support</h2>
          <div className={styles.list}>
            <Link to="/dashboard/get-started" className={styles.item}>
              <BiBulb /> Get Started
            </Link>
            <Link to="/dashboard/settings" className={styles.item}>
              <BiCog /> Settings
            </Link>
          </div>

          <div className={styles.accountSection}>
            <div className={styles.userProfile}>
              <img src="/avatar.png" alt="User" className={styles.avatar} />
              <div className={styles.userInfo}>
                <span className={styles.userName}>Iyke Aceee</span>
                <span className={styles.userEmail}>jesse@tesla.com</span>
              </div>
            </div>
            <button onClick={logoutUser} className={styles.logoutButton}>
              <BiLogOut />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>
      <main className={styles.mainContent}>
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;
