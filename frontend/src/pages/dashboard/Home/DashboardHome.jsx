import React from "react";
import { Link } from "react-router-dom";
import { BiDownload, BiInfoCircle } from "react-icons/bi";
import styles from "./dashboardHome.module.css";
import Leaderboard from "../leaderboard/Leaderboard";

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

      {/* Filter Bar */}
      <div className={styles.filterBar}>
        <div className={styles.filterGroup}>
          <label>Timeframe:</label>
          <select>
            <option>All-time</option>
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

      <div className={styles.topSection}>
        {/* Left Grid: 6 Stats Cards */}
        <div className={styles.statsColumn}>
          <div className={styles.statCard}>
            <span className={styles.cardLabel}>Active Users</span>
            <h2 className={styles.cardValue}>
              27<span>/80</span>
            </h2>
          </div>
          <div className={styles.statCard}>
            <span className={styles.cardLabel}>Questions Answered</span>
            <h2 className={styles.cardValue}>3,298</h2>
          </div>
          <div className={styles.statCard}>
            <span className={styles.cardLabel}>Av. Session Length</span>
            <h2 className={styles.cardValue}>2m 34s</h2>
          </div>
          <div className={styles.statCard}>
            <span className={styles.cardLabel}>
              Starting Knowledge <BiInfoCircle />
            </span>
            <h2 className={styles.cardValue}>64%</h2>
          </div>
          <div className={styles.statCard}>
            <span className={styles.cardLabel}>
              Current Knowledge <BiInfoCircle />
            </span>
            <h2 className={styles.cardValue}>86%</h2>
          </div>
          <div className={styles.statCard}>
            <span className={styles.cardLabel}>
              Knowledge Gain <BiInfoCircle />
            </span>
            <h2 className={styles.cardValue}>+34%</h2>
          </div>
        </div>

        <div className={styles.activityChartCard}>
          <div className={styles.chartHeader}>
            <h3>Activity</h3>
            <select className={styles.monthSelect}>
              <option>Month</option>
            </select>
          </div>

          <div className={styles.chartWrapper}>
            <div className={styles.yAxis}>
              <span>400</span>
              <span>300</span>
              <span>200</span>
              <span>100</span>
              <span>0</span>
            </div>
            <div className={styles.chartContent}>
              <div className={styles.gridLines}>
                {[...Array(5)].map((_, i) => (
                  <div key={i} className={styles.line}></div>
                ))}
              </div>
              {/* The Blue Bars */}
              <div className={styles.barsContainer}>
                <div className={styles.barGroup}>
                  <div className={styles.barPair}>
                    <div
                      className={styles.darkBar}
                      style={{ height: "30%" }}
                    ></div>
                    <div
                      className={styles.lightBar}
                      style={{ height: "40%" }}
                    ></div>
                  </div>
                  <span className={styles.dayLabel}>JAN</span>
                </div>
                <div className={styles.barGroup}>
                  <div className={styles.barPair}>
                    <div
                      className={styles.darkBar}
                      style={{ height: "34%" }}
                    ></div>
                    <div
                      className={styles.lightBar}
                      style={{ height: "45%" }}
                    ></div>
                  </div>
                  <span className={styles.dayLabel}>FEB</span>
                </div>
                <div className={styles.barGroup}>
                  <div className={styles.barPair}>
                    <div
                      className={styles.darkBar}
                      style={{ height: "28%" }}
                    ></div>
                    <div
                      className={styles.lightBar}
                      style={{ height: "30%" }}
                    ></div>
                  </div>
                  <span className={styles.dayLabel}>MAR</span>
                </div>
                <div className={styles.barGroup}>
                  <div className={styles.barPair}>
                    <div
                      className={styles.darkBar}
                      style={{ height: "50%" }}
                    ></div>
                    <div
                      className={styles.lightBar}
                      style={{ height: "55%" }}
                    ></div>
                  </div>
                  <span className={styles.dayLabel}>APR</span>
                </div>
                <div className={styles.barGroup}>
                  <div className={styles.barPair}>
                    <div
                      className={styles.darkBar}
                      style={{ height: "60%" }}
                    ></div>
                    <div
                      className={styles.lightBar}
                      style={{ height: "62%" }}
                    ></div>
                  </div>
                  <span className={styles.dayLabel}>MAY</span>
                </div>
                <div className={styles.barGroup}>
                  <div className={styles.barPair}>
                    <div
                      className={styles.darkBar}
                      style={{ height: "20%" }}
                    ></div>
                    <div
                      className={styles.lightBar}
                      style={{ height: "25%" }}
                    ></div>
                  </div>
                  <span className={styles.dayLabel}>JUN</span>
                </div>
                <div className={styles.barGroup}>
                  <div className={styles.barPair}>
                    <div
                      className={styles.darkBar}
                      style={{ height: "34%" }}
                    ></div>
                    <div
                      className={styles.lightBar}
                      style={{ height: "39%" }}
                    ></div>
                  </div>
                  <span className={styles.dayLabel}>JUL</span>
                </div>
                <div className={styles.barGroup}>
                  <div className={styles.barPair}>
                    <div
                      className={styles.darkBar}
                      style={{ height: "70%" }}
                    ></div>
                    <div
                      className={styles.lightBar}
                      style={{ height: "50%" }}
                    ></div>
                  </div>
                  <span className={styles.dayLabel}>AUG</span>
                </div>
                <div className={styles.barGroup}>
                  <div className={styles.barPair}>
                    <div
                      className={styles.darkBar}
                      style={{ height: "85%" }}
                    ></div>
                    <div
                      className={styles.lightBar}
                      style={{ height: "50%" }}
                    ></div>
                  </div>
                  <span className={styles.dayLabel}>SEP</span>
                </div>
                <div className={styles.barGroup}>
                  <div className={styles.barPair}>
                    <div
                      className={styles.darkBar}
                      style={{ height: "75%" }}
                    ></div>
                    <div
                      className={styles.lightBar}
                      style={{ height: "70%" }}
                    ></div>
                  </div>
                  <span className={styles.dayLabel}>OCT</span>
                </div>
                <div className={styles.barGroup}>
                  <div className={styles.barPair}>
                    <div
                      className={styles.darkBar}
                      style={{ height: "95%" }}
                    ></div>
                    <div
                      className={styles.lightBar}
                      style={{ height: "80%" }}
                    ></div>
                  </div>
                  <span className={styles.dayLabel}>NOV</span>
                </div>
                <div className={styles.barGroup}>
                  <div className={styles.barPair}>
                    <div
                      className={styles.darkBar}
                      style={{ height: "70%" }}
                    ></div>
                    <div
                      className={styles.lightBar}
                      style={{ height: "50%" }}
                    ></div>
                  </div>
                  <span className={styles.dayLabel}>DEC</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Leaderboard />
    </div>
  );
};

export default DashboardHome;
