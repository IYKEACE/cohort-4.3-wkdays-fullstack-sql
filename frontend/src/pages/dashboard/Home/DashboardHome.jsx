import styles from "./dashboardHome.module.css";
import { BiDownload } from "react-icons/bi";
import { Link } from "react-router-dom";

const DashboardHome = () => {
  return (
    <div className={styles.reportsContainer}>
      <div className={styles.header}>
        <h1>Reports</h1>
        <Link to="#" className={styles.downloadLink}>
          <BiDownload /> Download
        </Link>
      </div>
      <hr className={styles.divider} />

      <div className={styles.filterBar}>
        <div className={styles.filterGroup}>
          <label>Timeframe:</label>
          <select>
            <option>All-time</option>
            <option>This Month</option>
          </select>
        </div>

        <div className={styles.filterGroup}>
          <label>People:</label>
          <select>
            <option>All</option>
          </select>
        </div>

        <div className={styles.filterGroup}>
          <label>Topic:</label>
          <select>
            <option>All</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
