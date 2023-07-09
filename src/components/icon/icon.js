import styles from "./style/icon.module.css";
export default function Icon({ children, onClick }) {
  return (
    <>
      <span onClick={onClick} className={styles.icon}>
        {children}
      </span>
    </>
  );
}
