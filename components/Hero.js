import styles from "../styles/Hero.module.css";
import { GithubIcon, TwitterIcon, LinkedinIcon } from "./Icon";

const Hero = () => {
  return (
    <div className={styles.hr__wr}>
      <div className={styles.hr}>
        <div className={styles.hr__content}>
          <div className={styles.hr__header}>
            <h4> Hi there, I am</h4>
            <h2>Tochukwu Ali</h2>
            <h3>Frontend Developer</h3>
          </div>
          <div className={styles.hr__body}>
            <p>
              I'm all about creating amazing experiences on the front-end of the
              web. I bring all sorts of design ideas to life with scalable and
              clean code.
            </p>
            <div className={styles.hr__btn_group}>
              <button className={styles.hr__open_btn}>Explore</button>
            </div>
            <div className={styles.hr__social_icons}>
              <a href="https://github.com/tochukwuali">
                <GithubIcon />
              </a>
              <a href="https://twitter.com/tochukwuali3">
                <TwitterIcon />
              </a>

              <a href="https://linkedin.com/in/tochukwuali">
                <LinkedinIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
