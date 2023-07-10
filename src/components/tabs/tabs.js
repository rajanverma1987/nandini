import React, { useContext, useEffect, useRef } from "react";
import styles from "./style/tabs.module.css";
import { Context } from "../../store/store";
import { IoMdClose } from "react-icons/io";

export default function Tabs({ children, tabChange = () => {}, tab }) {
  const buttonRowRef = useRef();
  const { activeTab, activateTab, removeTab } = useContext(Context);

  useEffect(() => {
    setTimeout(() => {
      let scrollRow = document.getElementById("scrollRow");
      scrollRow.scrollTo(scrollRow.scrollWidth, 0);
    }, 100);
  }, [activeTab]);

  return (
    <>
      <div className={styles.tabContainer}>
        <div className={styles.tabs}>
          <div
            className={styles.tabButtonRow}
            ref={buttonRowRef}
            id="scrollRow"
          >
            {React.Children.map(children, (child, index) => {
              return (
                <React.Fragment key={`tabButton${index}`}>
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
                </React.Fragment>
              );
            })}
          </div>
          {React.Children.map(children, (child, index) => {
            return (
              <div
                id={`tabBox${index}`}
                key={`tabBox${index}`}
                className={`${styles.tabBox} ${
                  activeTab.name === child.props.title
                    ? styles.activeTab
                    : styles.InactiveTab
                }`}
              >
                {child.props.children}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
