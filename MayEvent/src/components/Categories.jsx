import React from 'react'
import styles from './Categories.module.css'



export const Categories = () => {
  return (
    <div>
        <div className={styles.buttons}>
          <button className={styles.mikve}>ערבי מקווה</button>
          <button className={styles.bachellorette}>מסיבות רווקות</button>
          <button className={styles.married}>הצעות נישואין</button>
        </div>
        <div className={styles.buttons}>
          <button className={styles.tableOrder}>סידורי שולחן</button>
          <button className={styles.birthDays}>ימי הולדת</button>
        </div>
    </div>
  )
}

