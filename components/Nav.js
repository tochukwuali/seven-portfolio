import { useState } from "react";
import MobileIcon from "./MobileIcon";
import styles from "../styles/Nav.module.css";
import Link from "next/link";

const Nav = ({ toggle, openNav }) => {
  let attachedClasses = [styles.Nav];
  if (toggle) {
    attachedClasses = [styles.Nav, styles.open];
  }
  return (
    <div>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <h3>TC</h3>
        </div>
        <div className={styles.nav__desktop}></div>
        <MobileIcon openNav={openNav} toggle={toggle} />
      </nav>
      <div className={attachedClasses.join(" ")}>
        <ul>
          <div className={styles.mobileList}>
            <li>
              <Link href="/">Home</Link>
            </li>
          </div>
          <div className={styles.mobileList}>
            <li>
              <Link href="/about">About</Link>
            </li>
          </div>
          <div className={styles.mobileList}>
            <li>
              <Link href="/lcross">LordCross Consults</Link>
            </li>
          </div>
          <div className={styles.mobileList}>
            <li>
              <Link href="/publications">Publications</Link>
            </li>
          </div>
          <div className={styles.mobileList}>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
