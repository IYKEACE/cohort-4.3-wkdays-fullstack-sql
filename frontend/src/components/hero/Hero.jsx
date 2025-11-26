import React from "react";
import styles from "./hero.module.css";

const Hero = () => {
  return (
    <section className="container">
      <section className={styles.heroContent}>
        <section className={styles.topHero}>
          <h2>
            Virtual HealthCare <br />
            For You
          </h2>
          <p className={styles.description}>
            Trafalgar provides progressive, and affordable <br />
            healthcare, accessible on mobile and online <br />
            for everyone
          </p>
          <button className={styles.btn}>Consult today</button>
        </section>
        <section className={styles.bottomHero}>
          <img
            src="/trafalgar-header 1.png"
            alt="hero image"
            className={styles.img}
          />
        </section>
      </section>
    </section>
  );
};

export default Hero;
