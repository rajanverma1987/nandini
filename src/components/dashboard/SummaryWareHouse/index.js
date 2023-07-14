import React from "react";
import styles from "../style.module.css";
import { PieChart } from "../Graph/PieChart";

export const SummaryWareHouse = () => {
  return (
    <>
      <div className={styles.summaryMain}>
        <h2>summary of warehouse (categories wise)</h2>
        <div className={styles.summarySection}>
          <div className={styles.summaryConatiner}>
            <div className={styles.summaryBg}>
              <div className={styles.summaryHeading}>
                <p>Value</p>
              </div>
              <div className={styles.chartBox}>
                <PieChart />
              </div>
            </div>
          </div>
          <div className={styles.summaryConatiner}>
            <div className={styles.summaryBg}>
              <div className={styles.summaryHeading2}>
                <p>Quantity</p>
              </div>
              <div className={styles.chartBox}>
                <PieChart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
