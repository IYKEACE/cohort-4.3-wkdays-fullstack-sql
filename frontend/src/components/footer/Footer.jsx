import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <section className={styles.footerContainer}>
      <section className={styles.footerContent}>
        <section className={styles.topFooter}>
          <div className={styles.logo}>
            <div className={styles.circle}>T</div>
            <div className={styles.logoText}>Trafalgar</div>
          </div>
          <p className={styles.rat}>
            Trafalgar provides progressive, and affordable <br />
            healthcare, accessible on mobile and online <br /> for everyone
          </p>
          <p className={styles.rig}>
            ©Trafalgar PTY LTD 2020. All rights reserved
          </p>
        </section>
        <section className={styles.topFooter}>
          <h2 className={styles.com}>Company</h2>
          <div className={styles.hug}>
            <p className={styles.out}>About</p>
            <p className={styles.out}>Testimonial</p>
            <p className={styles.out}>Find a doctor</p>
            <p className={styles.out}>Apps</p>
          </div>
        </section>
        <section className={styles.topFooter}>
          <h2 className={styles.com}>Region</h2>
          <div className={styles.hug}>
            <p className={styles.out}>Indonesia</p>
            <p className={styles.out}>Singapore</p>
            <p className={styles.out}>Hongkong</p>
            <p className={styles.out}>Canada</p>
          </div>
        </section>
        <section className={styles.topFooter}>
          <h2 className={styles.com}>Help</h2>
          <div className={styles.hug}>
            <p className={styles.out}>Help center</p>
            <p className={styles.out}>Contact support</p>
            <p className={styles.out}>Instructions</p>
            <p className={styles.out}>How it works</p>
          </div>
        </section>
      </section>
    </section>
  );
};

export default Footer;
