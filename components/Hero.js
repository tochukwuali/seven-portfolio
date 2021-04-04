import styles from "../styles/Hero.module.css";
import { FiChevronRight } from "react-icons/fi";
import { IconContext } from "react-icons";

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
              I build highly responsive websites while paying attention to user
              accessibility.
            </p>
            <div className={styles.hr__btn_group}>
              <button className={styles.hr__open_btn}>
                See My Projects
                <IconContext.Provider
                  value={{
                    size: "1.3em",
                    style: { verticalAlign: "middle", marginLeft: "9px" },
                  }}
                >
                  <FiChevronRight />
                </IconContext.Provider>
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
