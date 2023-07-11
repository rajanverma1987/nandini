import React, { useEffect } from "react";

// import styles from "./style/tab.module.css";
export default function Tab({ children, title }) {
  useEffect(() => {
    console.log("Tab rendering", title);
  }, [title]);
  return <React.Fragment key={title}>{children}</React.Fragment>;
}
