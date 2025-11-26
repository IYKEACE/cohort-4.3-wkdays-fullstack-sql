import React from "react";
import styles from "./comment.module.css";

const Comment = () => {
  return (
    <section className="container">
      <section className={styles.testContainer}>
        <h2 className={styles.head}>
          What our customer are saying
          <hr className={styles.line} />
        </h2>
        <section className={styles.testContent}>
          <section className={styles.topTest}>
            <div className={styles.man}>
              <div className={styles.edwards}>
                <img src="/edwards.png" alt="edward" className={styles.imo} />
              </div>
              <div className={styles.term}>
                <h2 className={styles.new}>Edward Newgate</h2>
                <p className={styles.circle}>Founder Circle</p>
              </div>
            </div>
          </section>
          <section className={styles.bottomTest}>
            <p className={styles.desc}>
              “Our dedicated patient engagement app and <br />
              web portal allow you to access information <br />
              instantaneously (no tedeous form, long calls,
              <br />
              or administrative hassle) and securely”
            </p>
          </section>
        </section>
      </section>
    </section>
  );
};

export default Comment;
