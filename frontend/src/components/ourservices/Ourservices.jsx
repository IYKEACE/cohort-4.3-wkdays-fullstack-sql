import React from "react";
import styles from "./ourservices.module.css";

const Ourservices = () => {
  return (
    <section className="container">
      <h2 className={styles.head}>
        Our Services
        <hr />
      </h2>
      <p className={styles.description}>
        We provide to you the best choiches for you. Adjust it to your health
        needs and make sure your undergo treatment <br /> with our highly
        qualified doctors you can consult with us which type of service is
        suitable for your health
      </p>
      <div className={styles.serviceContent}>
        <div className={styles.servicesOne}>
          <img src="/search-doctors.png" alt="Doctor" className={styles.pix} />
          <h3>Search Doctor</h3>
          <p className={styles.desc}>
            Choose your doctor from thousands <br /> of specialist, general, and
            trusted <br /> hospitals
          </p>
        </div>
        <div className={styles.servicesOne}>
          <img src="/pharmacy.png" alt="Doctor" className={styles.pix} />
          <h3>Online pharmacy</h3>
          <p className={styles.desc}>
            Buy your medicines with our <br /> mobile application with a simple
            <br />
            delivery system
          </p>
        </div>
        <div className={styles.servicesOne}>
          <img src="/consultation.png" alt="Doctor" className={styles.pix} />
          <h3>Consultation</h3>
          <p className={styles.desc}>
            Free consultation with our trusted <br /> doctors and get the best
            <br /> recomendations
          </p>
        </div>
        <div className={styles.servicesOne}>
          <img src="/details.png" alt="Doctor" className={styles.pix} />
          <h3>Details info</h3>
          <p className={styles.desc}>
            Free consultation with our trusted <br />
            doctors and get the best
            <br />
            recomendations
          </p>
        </div>
        <div className={styles.servicesOne}>
          <img src="/emergency.png" alt="Doctor" className={styles.pix} />
          <h3>Emergency Care</h3>
          <p className={styles.desc}>
            You can get 24/7 urgent care for <br /> yourself or your children
            and your <br />
            lovely family
          </p>
        </div>
        <div className={styles.servicesOne}>
          <img src="/tracking.png" alt="Doctor" className={styles.pix} />
          <h3>Tracking</h3>
          <p className={styles.desc}>
            Track and save your medical history <br />
            and health data with our platform for you
          </p>
        </div>
      </div>
      <button className={styles.btn}>Learn more</button>
    </section>
  );
};

export default Ourservices;
