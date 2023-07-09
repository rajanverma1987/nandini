import styles from "./styles/button.module.css";

export default function Button({
  btnType = "btnPrimary",
  btnText,
  marginTop = 0,
  align,
  onClick = (e) => {
    e.preventDefault();
  },
}) {
  return (
    <button
      style={{ marginTop: `${marginTop}px` }}
      onClick={onClick}
      className={`${styles[btnType]} ${align ? styles[align] : ""}`}
    >
      {btnText}
    </button>
  );
}
