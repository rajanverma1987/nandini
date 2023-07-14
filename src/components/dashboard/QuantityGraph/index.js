import React from "react";
import styles from "../style.module.css";
import { AreaChart } from "../Graph/AreaChart";

export const QuantityGraph = () => {
  return (
    <div className={styles.summaryMain}>
      <h2>summary of warehouse (categories wise)</h2>
      <div className={styles.summarySection}>
        <div className={styles.summaryConatiner}>
          <div className={styles.summaryBg}>
            <div className={styles.summaryHeading}>
              <p>Value</p>
            </div>
            <div className={styles.chartBox}>
              <AreaChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
