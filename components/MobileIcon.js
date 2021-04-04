import { useState } from "react";
import styles from "../styles/MobileIcon.module.css";

const MobileIcon = ({ toggle, openNav }) => {
  let attachedClasses = [styles.icon];
  if (toggle) {
    attachedClasses = [styles.icon, styles.open];
  }

  return (
    <div className={styles.MobileIcon} onClick={openNav}>
      <div className={attachedClasses.join(" ")}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default MobileIcon;
