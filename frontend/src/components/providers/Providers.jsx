import React from "react";
import styles from "./providers.module.css";

const Providers = () => {
  return (
    <section className="container">
      <section className={styles.appContent}>
        <section className={styles.topApp}>
          <img
            src="/providers.png"
            alt="provider image"
            className={styles.img}
          />
        </section>
        <section className={styles.bottomApp}>
          <h2 className={styles.lead}>
            Leading healthcare <br />
            providers
            <hr className={styles.lines} />
          </h2>
          <p className={styles.tra}>
            Trafalgar provides progressive, and affordable <br /> healthcare,
            accessible on mobile and online for <br />
            everyone. To us, it’s not just work. We take pride <br />
            in the solutions we deliver
          </p>
          <button className={styles.btn}>Learn more</button>
        </section>
      </section>
    </section>
  );
};

export default Providers;
