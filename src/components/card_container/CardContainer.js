import styles from "./styles/cardContainer.module.css";
export default function CardContainer({ veritcal = false, children }) {
  return (
    <div
      className={
        veritcal
          ? `${styles.cardContainer} ${styles.vertical}`
          : `${styles.cardContainer} ${styles.horizontal}`
      }
    >
      {children}
    </div>
  );
}
