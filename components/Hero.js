import styles from "../styles/Hero.module.css";
import Link from 'next/link'
// import { GithubIcon, TwitterIcon, LinkedinIcon } from "./Icon";

const Hero = () => {
  return (
    <div className={styles.hr__wr}>
      <div className={styles.hr}>
        <div className={styles.hr__content}>
          <div className={styles.hr__text}>
            <h1>Email strategy (and copy) for <span style={{color: '#4299e1'}}>SaaS and ecommerce</span> businesses</h1>
            <p>
              Increase conversions, boost sales, and fix the money leaking gaps
              in your email sequences.
            </p>
            <div>
              <Link href="/"><a className={styles.hr__open_btn}>Let's Talk</a></Link> 
            </div>
            
          </div>
          <div className={styles.hr__img}>
            <img src="/lc-hero.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
