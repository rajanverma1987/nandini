import styles from "./styles/input_row.module.css";
export default function InputRow({ children, align, col = 3 }) {
  return (
    <div
      style={{ "--col": col }}
      className={`${styles.InputRow} ${align ? styles[align] : ""}`}
    >
      {children}
    </div>
  );
}
