import React from "react";
import styles from "./mobile.module.css";

const Mobile = () => {
  return (
    <section className="container">
      <section className={styles.ProductContent}>
        <section className={styles.topProduct}>
          <h2>
            Download our <br /> mobile apps
          </h2>
          <hr className={styles.lines} />
          <p className={styles.ded}>
            Our dedicated patient engagement app and <br />
            web portal allow you to access information <br />
            instantaneously (no tedeous form, long calls, <br />
            or administrative hassle) and securely
          </p>
          <button className={styles.btn}>Downloads&#8681;</button>
        </section>
        <section className={styles.bottomProduct}>
          <img src="/downloads.png" alt="downloads" className={styles.down} />
        </section>
      </section>
    </section>
  );
};

export default Mobile;
