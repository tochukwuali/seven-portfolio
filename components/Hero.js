import styles from "../styles/Hero.module.css";
import { FiChevronRight } from "react-icons/fi";

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
              I am an outstanding frontend Developer. I build highly responsive
              websites while paying attention to accessibility.
            </p>
            <div className={styles.hr__btn_group}>
              <button className={styles.hr__open_btn}>
                See My Projects{" "}
                <span>
                  {" "}
                  <FiChevronRight />{" "}
                </span>
              </button>
              {/* <button className={styles.hr__about_btn}>About Me</button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
