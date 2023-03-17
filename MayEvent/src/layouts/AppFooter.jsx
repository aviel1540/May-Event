import React from "react";
import instagram from "../assets/logo_and_icons/instagram.png";
import facebook from "../assets/logo_and_icons/facebook.png";
import whatsapp from "../assets/logo_and_icons/whatsapp.png";
import styles from "./Footer.module.css";

export const AppFooter = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.icons}>
        <a href="https://www.instagram.com/may_yakov_events/">
          <img src={instagram} className={styles.instagram}></img>
        </a>
        <a href="https://www.facebook.com/profile.php?id=100064405920164">
          <img src={facebook} className={styles.facebook}></img>
        </a>
        <a href="https://www.whatsapp.com/send?phone=+972504480371">
          <img src={whatsapp} className={styles.whatsapp}></img>
        </a>
      </div>
    </footer>
  );
};
