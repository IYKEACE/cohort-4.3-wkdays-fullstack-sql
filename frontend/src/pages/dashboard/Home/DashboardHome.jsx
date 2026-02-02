import React from "react";
import { Link, useOutletContext } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiDownload, BiInfoCircle } from "react-icons/bi";
import styles from "./dashboardHome.module.css";
import Leaderboard from "../leaderboard/Leaderboard";

const DashboardHome = () => {
  const { toggleMenu } = useOutletContext();
  return (
    <div className={styles.reportsContainer}>
      <div className={styles.header}>
        <div className={styles.titleArea}>
          <GiHamburgerMenu
            className={styles.hamburgerIcon}
            onClick={toggleMenu}
          />
          <h1>Reports</h1>
        </div>
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

            <div className={styles.sparklineWrapper}>
              <svg
                width="100%"
                height="64"
                viewBox="0 0 120 50"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient id="gradientFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0 40 C20 40 35 10 55 10 C75 10 85 35 120 30 V50 H0Z"
                  fill="url(#gradientFill)"
                />
                <path
                  d="M0 40 C20 40 35 10 55 10 C75 10 85 35 120 30"
                  stroke="#1B59F8"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </div>
          </div>
          <div className={styles.statCard}>
            <span className={styles.cardLabel}>
              Current Knowledge <BiInfoCircle />
            </span>
            <h2 className={styles.cardValue}>86%</h2>
            <div className={styles.sparklineWrapper}>
              <svg
                width="100%"
                height="90"
                viewBox="0 0 120 50"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient id="gradientFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0 40 C20 40 35 10 55 10 C75 10 85 35 120 30 V50 H0Z"
                  fill="url(#gradientFill)"
                />
                <path
                  d="M0 40 C20 40 35 10 55 10 C75 10 85 35 120 30"
                  stroke="#1B59F8"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </div>
          </div>
          <div className={styles.statCard}>
            <span className={styles.cardLabel}>
              Knowledge Gain <BiInfoCircle />
            </span>
            <h2 className={styles.cardValue}>+34%</h2>
            <div className={styles.sparklineWrapper}>
              <svg
                width="100%"
                height="40"
                viewBox="0 0 120 50"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient id="gradientFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0 40 C20 40 35 10 55 10 C75 10 85 35 120 30 V50 H0Z"
                  fill="url(#gradientFill)"
                />
                <path
                  d="M0 40 C20 40 35 10 55 10 C75 10 85 35 120 30"
                  stroke="#1B59F8"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className={styles.activityChartCard}>
          <div className={styles.chartHeader}>
            <h3>Activity</h3>
            <select className={styles.monthSelect}>
              <option>Month</option>
              <option>January</option>
              <option>February</option>
              <option>March</option>
              <option>April</option>
              <option>May</option>
              <option>June</option>
              <option>July</option>
              <option>August</option>
              <option>September</option>
              <option>October</option>
              <option>November</option>
              <option>December</option>
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
