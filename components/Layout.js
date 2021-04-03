import Nav from "./Nav";
import styles from "../styles/Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.wrapperr}>
      <div className={styles.wrapper}>
        <Nav />
        <div className={styles.container}>
          <div className={styles.main}>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
