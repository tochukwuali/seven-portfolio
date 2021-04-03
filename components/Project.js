import styles from "../styles/Project.module.css";

const Project = () => {
  return (
    <div className={styles.pr__wr} data-aos={"fade-up"}>
      <div className={styles.pr}>
        <div className={styles.pr__content}>
          <div className={styles.pr_header}>
            <h2>Projects</h2>
            <p>Some of the works I've done and completed</p>
            <div>
              <div className={styles.pr__card}>
                <h2>Project Title</h2>
                <p>
                  Lets just say a bunch of nonsense and occupy some paste while
                  actually not having anyting meaningful to offer. Its
                  impossible to ascertain when I start makiing sense, but till
                  then, enjoy my ramblings.
                </p>
              </div>
              <div className={styles.pr__card}>
                <h2>Project Title</h2>
                <p>
                  Lets just say a bunch of nonsense and occupy some paste while
                  actually not having anyting meaningful to offer. Its
                  impossible to ascertain when I start makiing sense, but till
                  then, enjoy my ramblings.
                </p>
              </div>
            </div>
            <div>
              <button>See all of my work</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
