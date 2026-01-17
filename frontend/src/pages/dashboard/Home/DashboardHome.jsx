import styles from "./dashboardHome.module.css";

const DashboardHome = () => {
  return (
    <div className={styles.reportsContainer}>
      <h1>Reports</h1>
      <div className={styles.statsGrid}>
        <div className={styles.card}>Active Users: 27/80</div>
        <div className={styles.card}>Questions: 3,298</div>
      </div>
    </div>
  );
};
export default DashboardHome;
