import { useState } from "react";
import routes from "../../../constant/routes";
import styles from "./styles/sidemenue.module.css";
import { useContext } from "react";
import { Context } from "../../../store/store";

export default function SideMenu() {
  const { activeTab, activateTab } = useContext(Context);

  function changeTab(child) {
    activateTab(child, true);
  }
  return (
    <>
      <div className={styles.sideMenu}>
        <div className={styles.companyLogo}>
          <img src={"/Images/logo.png"} />
        </div>
        {routes &&
          routes.length > 0 &&
          routes.map((route, routeIndex) => {
            return route?.children ? (
              <ul key={`route_${routeIndex}`}>
                <p>
                  <route.icon /> {route.name}
                </p>
                {route?.children.map((child, index) => {
                  return (
                    <li
                      onClick={changeTab.bind(this, child)}
                      className={
                        activeTab.name === child.name ? styles.active : ""
                      }
                      key={`menu${index}`}
                    >
                      {child.name}
                    </li>
                  );
                })}
              </ul>
            ) : (
              <ul key={`rounte${routeIndex}`}>
                <p
                  className={activeTab.name === route.name ? styles.active : ""}
                  onClick={route?.component ? changeTab.bind(this, route) : ""}
                >
                  <route.icon /> {route.name}
                </p>
              </ul>
            );
          })}
      </div>
    </>
  );
}
