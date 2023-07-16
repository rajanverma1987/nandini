import React from "react";
import styles from "../style.module.css";

const Category = ({ imagePath, item }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardDetails}>
        <div className={styles.cardContainer}>
          <div className={styles.cardSubContainer}>
            <div className={styles.cardunderBox}>
              <span className={styles.CardHeading}>Total {item.Name}</span>
              <h5 className={styles.CardSecondHeading}>{item?.Total} </h5>
            </div>
          </div>
          <div className={styles.iconBox}>
            <div className={styles.iconContainer}>
              <span className={styles.iconBoxSpan} aria-hidden="true">
                {/* <img src="/Images/dollarsign.svg" alt="dollor" /> */}
                {imagePath && <img src={imagePath} alt="item icon" />}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
