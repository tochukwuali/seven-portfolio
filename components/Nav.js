import MobileIcon from "./MobileIcon";
import styles from "../styles/Nav.module.css";
import Link from "next/link";
import { GithubIcon, TwitterIcon, LinkedinIcon } from "./Icon";

const Nav = ({ toggle, openNav }) => {
  let attachedClasses = [styles.Nav];
  if (toggle) {
    attachedClasses = [styles.Nav, styles.open];
  }
  return (
    <div>
      <nav className={styles.nav__wr}>
        <div className={styles.logo}>
          <h3>
            <Link href="/">Toks</Link>
          </h3>
        </div>
        <div className={styles.nav__desktop}></div>
        <MobileIcon openNav={openNav} toggle={toggle} />
      </nav>
      <div className={attachedClasses.join(" ")}>
        <div className={styles.side__nav_logo}>
          <h2>
            {" "}
            <Link href="/">Toks</Link>
          </h2>
        </div>
        <ul className={styles.nav__list}>
          <li data-aos={"fade-up"} onClick={openNav}>
            <Link href="/">Home</Link>
          </li>

          <li data-aos={"fade-up"} onClick={openNav}>
            <Link href="/about">About</Link>
          </li>

          <li data-aos={"fade-up"}>
            <Link href="/projects">Projects</Link>
          </li>

          <li data-aos={"fade-up"}>
            <Link href="/skills">Skills</Link>
          </li>

          <li data-aos={"fade-up"}>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        <div className={styles.side__nav_social_icons}>
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
  );
};

export default Nav;
