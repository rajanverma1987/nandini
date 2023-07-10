import React, { useContext, useEffect } from "react";
import styles from "./style/tabs.module.css";
import { Context } from "../../store/store";
import { IoMdClose } from "react-icons/io";

export default function Tabs({ children, tabChange, tab }) {
  const { activeTab, activateTab, removeTab } = useContext(Context);
  useEffect(() => {
    console.log("rendering", activeTab.name);
  }, [activeTab]);
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
                  onClick={(e) => {
                    e.preventDefault();
                    activateTab(child.props.tab);
                    tabChange(index);
                  }}
                >
                  <span>{child.props.title}</span>
                  <span
                    className={styles.closeButton}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      removeTab(child.props.tab);
                    }}
                  >
                    <IoMdClose />
                  </span>
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
