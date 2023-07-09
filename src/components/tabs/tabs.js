import React, { useContext } from "react";
import styles from "./style/tabs.module.css";
import { Context } from "../../store/store";

export default function Tabs({ children, tabChange, tab }) {
  const { activeTab, activateTab } = useContext(Context);

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
                    activeTab.name === child.props.title ? styles.active : ""
                  }`}
                  onClick={() => {
                    activateTab(child.props.tab);
                    tabChange(index);
                  }}
                >
                  <span>{child.props.title}</span>
                </div>
                <div
                  className={`${styles.tabBox} ${
                    activeTab.name === child.props.title
                      ? styles.activeTab
                      : styles.InactiveTab
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
