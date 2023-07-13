import React from "react";
import styles from "../style.module.css";

export const LostandDamage = () => {
  return (
    <div>
      <div className={styles.wareHouseTopSection} style={{ marginTop: "30px" }}>
        <div className={styles.wareHouseSection}>
          <div className={styles.colSection}>
            <h3>Lost in transit items</h3>
            <div className={styles.Container}>
              <div className={styles.wareHouseList} style={{ width: "50%" }}>
                <div className={styles.wareHouseIcon}>one</div>
                <div className={styles.wareHouseDetails}>
                  <h4>234324</h4>
                  <p>Total items</p>
                </div>
              </div>
              <div className={styles.wareHouseList} style={{ width: "50%" }}>
                <div className={styles.wareHouseIcon}>one</div>
                <div className={styles.wareHouseDetails}>
                  <h4>234324</h4>
                  <p>Total items</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
