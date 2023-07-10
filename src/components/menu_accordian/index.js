import { useState } from "react";

import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function MenuAccordian({ route, r_index, styles }) {
  const [active, setActive] = useState(null);

  return (
    <>
      <ul key={r_index}>
        <div>
          <span className={styles.icon}>
            <route.icon />
          </span>
          <span
            onClick={() => {
              setActive((prev) => !prev);
            }}
          >
            {route?.to ? (
              <Link href={route?.to ? `${route.to}` : ""}>{route.caption}</Link>
            ) : (
              <>
                <p>{route.caption}</p>
                {active ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </>
            )}
          </span>
        </div>

        {active &&
          route?.submenu &&
          route.submenu.map((submenu, s_index) => {
            return (
              <li key={`${r_index}_${s_index}`}>
                <Link href={`${submenu.to}`}>{submenu.caption}</Link>
              </li>
            );
          })}
      </ul>
    </>
  );
}
