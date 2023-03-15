import React from "react";
import logo from "../assets/logo_and_icons/logo.png";
import styles from "./AppHeaderr.css";

export const AppHeader = () => {
  return (
    <header className={styles.header}>
      <ul>
        <li className={styles.logo}>
          <img src={logo}></img>
        </li>
        <li className={styles.description}>
          עמדות צילום | סידור שולחנות | עמדות בלונים
        </li>
      </ul>
    </header>
  );
};

