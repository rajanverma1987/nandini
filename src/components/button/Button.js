import styles from "./styles/button.module.css";

export default function Button({
  btnType = "btnPrimary",
  btnText,
  marginTop = 0,
  margin = "auto",
  align,
  onClick = (e) => {
    e.preventDefault();
  },
}) {
  return (
    <button
      // style={{ marginTop: `${marginTop}px`, margin: `${margin}` }}
      style={{
        width: "100%",
        padding: "10px",
        color: "#fff",
        maxWidth: "100%",
        marginTop: "20px",
        marginLeft: "0",
        height: "40px",
      }}
      onClick={onClick}
      className={`${styles[btnType]} ${align ? styles[align] : ""}`}
    >
      {btnText}
    </button>
  );
}
