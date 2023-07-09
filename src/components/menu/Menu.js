import { routes } from "@/forms/routes";
import styles from "./styles/menu.module.css";
import MenuAccordian from "../menu_accordian";

export default function Menu({ isCollapsed }) {
  return (
    <div
      className={styles.menu}
      key={"menuContainer"}
      data-collapse={isCollapsed}
    >
      {routes &&
        routes.map((route, r_index) => {
          return (
            <MenuAccordian
              route={route}
              r_index={r_index}
              styles={styles}
              key={r_index}
            />
          );
        })}
    </div>
  );
}
