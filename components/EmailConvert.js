import styles from "../styles/EmailConvert.module.css";
import Link from "next/link";

const Hero = () => {
  return (
    <div className={styles.em__wr}>
      <div className={styles.em}>
        <div className={styles.em__content}>
          <div className={styles.em__img}>
            <img src="/online-marketing.svg" alt="" />
          </div>
          <div className={styles.em__text}>
            <h1>Are your emails converting as they should ?</h1>
            <p>
              As an email conversion strategist and copywriter for SaaS and
              eCommerce businesses, I’m obsessed with writing emails that:
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
