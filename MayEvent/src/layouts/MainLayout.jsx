import React from "react";
import styles from "./Main.module.css";

export const MainLayout = (props) => {
  return (
    <div>
      <main>
        <div className={styles.buttons}>
          <button className={styles.mikve}>ערבי מקווה</button>
          <button className={styles.bride}>מסיבות רווקות</button>
          <button className={styles.married}>הצעות נישואין</button>
        </div>
        <div className={styles.buttons}>
          <button className={styles.tableOrder}>סידורי שולחן</button>
          <button className={styles.birthDays}>ימי הולדת</button>
        </div>
      </main>
    </div>
  );
};
