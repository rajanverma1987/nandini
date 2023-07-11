import { useContext, useEffect, useState } from "react";
import styles from "./styles/Menulist.module.css";
import { BsFillCaretDownFill } from "react-icons/bs";
import { BsFillCaretUpFill } from "react-icons/bs";
import { LayoutContext } from "../../store/store";

export default function MenuList({ route, routeIndex }) {
  const { activateTab, activeTab } = useContext(LayoutContext);
  useEffect(() => {
    console.log("MENU LIST RENDERING");
  }, []);
  const [expand, setExpand] = useState(false);

  function changeTab(child) {
    activateTab(child, true);
  }

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
              key={`menu${routeIndex}${index}`}
            >
              {child.name}
            </li>
          );
        })}
    </ul>
  );
}
