import React, { useState } from "react";
import styles from "./style/tabs.module.css";

export default function Tabs({ children, tabChange }) {
  const [active, setActive] = useState(0);

  return (
    <>
      <div className={styles.tabs}>
        <div className={styles.tabButtonRow}>
          {React.Children.map(children, (child, index) => {
            return (
              <React.Fragment>
                <div
                  key={`tabButton_${index}`}
                  className={`${styles.tabButton} ${
                    active == index ? styles.active : ""
                  }`}
                  onClick={() => {
                    setActive(index);
                    tabChange(index);
                  }}
                >
                  <span>{child.props.title}</span>
                </div>
                <div
                  className={`${styles.tabBox} ${
                    active == index ? styles.activeTab : ""
                  }`}
                >
                  {child.props.children}
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </>
  );
}
