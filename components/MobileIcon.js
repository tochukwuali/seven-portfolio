import React from "react";
import styles from "../styles/mobileIcon.module.css";

const MobileIcon = () => {
  let attachedClasses = [styles.icon];
//   if (open) {
//     attachedClasses = [styles.icon, styles.open];
//   }

  return (
    <div className={styles.MobileIcon} >
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