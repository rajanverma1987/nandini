import { useEffect } from "react";
import styles from "./styles/button.module.css";

export default function Button({
  name = undefined,
  visible = true,
  btnType = "btnPrimary",
  btnText,
  marginTop = 0,
  align,
  onClick = (e) => {
    e.preventDefault();
  },
}) {
  useEffect(() => {}, [visible, btnText]);
  return (
    <button
      name={name ? name : ""}
      style={{ marginTop: `${marginTop}px` }}
      onClick={onClick}
      className={` ${styles.btnPrimary} ${styles[btnType]} ${
        align ? styles[align] : ""
      } ${!visible ? styles.hide : ""}`}
    >
      {btnText}
    </button>
  );
}
