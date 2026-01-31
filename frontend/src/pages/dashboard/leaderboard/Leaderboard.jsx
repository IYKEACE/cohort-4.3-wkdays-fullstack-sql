import React from "react";
import styles from "./leaderboard.module.css";
import { usersData, groupsData } from "./utils/LeaderboardData";

const Leaderboard = () => {
  return (
    <div className={styles.bottomSection}>
      <div className={styles.infoCard}>
        <h3 className={styles.cardTitle}>Weakest Topics</h3>
        <div className={styles.topicItem}>
          <div className={styles.topicInfo}>
            <div className={styles.topicRow}>
              <img
                src="/food.png"
                className={styles.topicThumb}
                alt="Food Safety"
              />
              <div className={styles.topicContent}>
                <div className={styles.topicHeader}>
                  <span className={styles.topicName}>Food Safety</span>
                  <span className={styles.topicPercent}>
                    74% <small>Correct</small>
                  </span>
                </div>
                <div className={styles.progressTrack}>
                  <div
                    className={styles.progressBar}
                    style={{
                      width: "74%",
                      background: "linear-gradient(90deg, #FF708B, #FF4646)",
                    }}
                  ></div>
                </div>
              </div>
            </div>
            <div className={styles.topicRow}>
              <img
                src="/basics.png"
                className={styles.topicThumb}
                alt="Food Safety"
              />
              <div className={styles.topicContent}>
                <div className={styles.topicHeader}>
                  <span className={styles.topicName}>
                    Compliance Basics Procedures
                  </span>
                  <span className={styles.topicPercent}>
                    52% <small>Correct</small>
                  </span>
                </div>
                <div className={styles.progressTrack}>
                  <div
                    className={styles.progressBar}
                    style={{
                      width: "52%",
                      background: "linear-gradient(90deg, #FF708B, #FF4646)",
                    }}
                  ></div>
                </div>
              </div>
            </div>
            <div className={styles.topicRow}>
              <img
                src="/network.png"
                className={styles.topicThumb}
                alt="Network Safety"
              />
              <div className={styles.topicContent}>
                <div className={styles.topicHeader}>
                  <span className={styles.topicName}>Company Networking</span>
                  <span className={styles.topicPercent}>
                    34% <small>Correct</small>
                  </span>
                </div>
                <div className={styles.progressTrack}>
                  <div
                    className={styles.progressBar}
                    style={{
                      width: "35%",
                      background: "linear-gradient(90deg, #FF708B, #FF4646)",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.infoCard}>
        <h3 className={styles.cardTitle}>Strongest Topics</h3>
        <div className={styles.topicItem}>
          <div className={styles.topicInfo}>
            <div className={styles.topicRow}>
              <img
                src="/protocol.png"
                className={styles.topicThumb}
                alt="Covid"
              />
              <div className={styles.topicContent}>
                <div className={styles.topicHeader}>
                  <span className={styles.topicName}>Covid Protocols</span>
                  <span className={styles.topicPercent}>
                    95% <small>Correct</small>
                  </span>
                </div>
                <div className={styles.progressTrack}>
                  <div
                    className={styles.progressBar}
                    style={{
                      width: "85%",
                      background: "linear-gradient(90deg, #36E39F, #27AE60)",
                    }}
                  ></div>
                </div>
              </div>
            </div>
            <div className={styles.topicRow}>
              <img src="/cyber.png" className={styles.topicThumb} alt="Cyber" />
              <div className={styles.topicContent}>
                <div className={styles.topicHeader}>
                  <span className={styles.topicName}>
                    Cyber Security Basics
                  </span>
                  <span className={styles.topicPercent}>
                    92% <small>Correct</small>
                  </span>
                </div>
                <div className={styles.progressTrack}>
                  <div
                    className={styles.progressBar}
                    style={{
                      width: "69%",
                      background: "linear-gradient(90deg, #36E39F, #27AE60)",
                    }}
                  ></div>
                </div>
              </div>
            </div>
            <div className={styles.topicRow}>
              <img src="/media.png" className={styles.topicThumb} alt="Media" />
              <div className={styles.topicContent}>
                <div className={styles.topicHeader}>
                  <span className={styles.topicName}>
                    Social Media Policies
                  </span>
                  <span className={styles.topicPercent}>
                    92% <small>Correct</small>
                  </span>
                </div>
                <div className={styles.progressTrack}>
                  <div
                    className={styles.progressBar}
                    style={{
                      width: "59%",
                      background: "linear-gradient(90deg, #36E39F, #27AE60)",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. User Leaderboard */}
      <div className={styles.infoCard}>
        <h3 className={styles.cardTitle}>User Leaderboard</h3>
        {usersData.map((user) => (
          <div key={user.id} className={styles.leaderRow}>
            <div className={styles.leaderProfile}>
              <img src={user.img} alt={user.name} className={styles.avatar} />
              <div>
                <p className={styles.leaderName}>{user.name}</p>
                <p className={styles.leaderMeta}>
                  {user.points} Points - {user.accuracy}% Correct
                </p>
              </div>
            </div>
            <div className={styles.rankInfo}>
              {user.rank}
              <span
                className={
                  user.trend === "up" ? styles.upArrow : styles.downArrow
                }
              >
                {user.trend === "up" ? "▲" : "▼"}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.infoCard}>
        <h3 className={styles.cardTitle}>Groups Leaderboard</h3>
        {groupsData.map((group) => (
          <div key={group.id} className={styles.leaderRow}>
            <div className={styles.leaderProfile}>
              {/* <img src={group.img} alt={group.name} className={styles.avatar} /> */}
              <div>
                <p className={styles.leaderName}>{group.name}</p>
                <p className={styles.leaderMeta}>
                  {group.points} Points - {group.accuracy}% Correct
                </p>
              </div>
            </div>
            <div className={styles.rankInfo}>
              {group.rank}
              <span
                className={
                  group.trend === "up" ? styles.upArrow : styles.downArrow
                }
              >
                {group.trend === "up" ? "▲" : "▼"}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;
