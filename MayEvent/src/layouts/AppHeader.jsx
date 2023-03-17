import React from "react";
import logo from "../assets/logo_and_icons/logo.png";
import styles from "./Header.module.css";

export const AppHeader = () => {
  return (
    <header className={styles.header}>
          <img src={logo} className={styles.logo}></img>
    </header>
  );
};

