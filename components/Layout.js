import { useState } from "react";
import Nav from "./Nav";
import styles from "../styles/Layout.module.css";

const Layout = ({ children }) => {
  const [toggle, setToggle] = useState(false);

  const openNav = () => {
    setToggle(!toggle);
  };

  return (
    <div className={styles.wrapperr}>
      <div className={styles.wrapper}>
        <Nav toggle={toggle} openNav={openNav} />
        <div className="container">
          <div className={styles.main}>{children}</div>
        </div>
        <style jsx>
          {`
            .container {
              display: ${toggle === true ? "none" : "block"};
              padding: 0 0.8rem;
            }
          `}
        </style>
      </div>
    </div>
  );
};

export default Layout;
