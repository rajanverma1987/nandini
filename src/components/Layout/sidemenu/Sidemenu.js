import { useState } from "react";
import routes from "../../../constant/routes";
import styles from "./styles/sidemenue.module.css";
import { useContext } from "react";
import { Context } from "../../../store/store";
import { BsFillCaretDownFill } from "react-icons/bs";
import { BsFillCaretUpFill } from "react-icons/bs";

export default function SideMenu() {
  const { activeTab, activateTab } = useContext(Context);

  function changeTab(child) {
    activateTab(child, true);
  }

  function MenuList({ route, routeIndex }) {
    const [expand, setExpand] = useState(false);
    return (
      <ul key={`route_${routeIndex}`}>
        <p
          className={styles.ulHeader}
          onClick={(e) => {
            e.preventDefault();
            setExpand((prev) => !prev);
          }}
        >
          <span>
            <route.icon /> {route.name}
          </span>
          <span>
            {expand ? (
              <BsFillCaretUpFill
                onClick={() => {
                  setExpand((prev) => !prev);
                }}
              />
            ) : (
              <BsFillCaretDownFill
                onClick={() => {
                  setExpand((prev) => !prev);
                }}
              />
            )}
          </span>
        </p>
        {expand &&
          route?.children.map((child, index) => {
            return (
              <li
                onClick={changeTab.bind(this, child)}
                className={activeTab.name === child.name ? styles.active : ""}
                key={`menu${index}`}
              >
                {child.name}
              </li>
            );
          })}
      </ul>
    );
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
              <MenuList route={route} routeIndex={routeIndex} />
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
