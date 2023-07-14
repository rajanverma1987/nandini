import styles from "./styles/input_row.module.css";
export default function InputRow({ children, align, col = 3, width, margin }) {
  return (
    <div
      style={{ "--col": col, width: width, margin: margin }}
      className={`${styles.InputRow} ${align ? styles[align] : ""}`}
    >
      {children}
    </div>
  );
}
