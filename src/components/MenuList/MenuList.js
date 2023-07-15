import { useContext, useEffect, useState } from "react";
import styles from "./styles/Menulist.module.css";
import { BsFillCaretDownFill } from "react-icons/bs";
import { BsFillCaretUpFill } from "react-icons/bs";
import { LayoutContext } from "../../store/store";

export default function MenuList({ route, routeIndex }) {
  const { activateTab, activeTab } = useContext(LayoutContext);
  useEffect(() => {}, [activeTab]);
  const [expand, setExpand] = useState(false);

  function changeTab(child) {
    activateTab(child, true);
  }

  return (
    <>
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
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setExpand((prev) => !prev);
            }}
          />
        ) : (
          <BsFillCaretDownFill
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setExpand((prev) => !prev);
            }}
          />
        )}
      </span>
    </p>
    <ul key={`route_${routeIndex}`}>
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
    </>
  );
}
