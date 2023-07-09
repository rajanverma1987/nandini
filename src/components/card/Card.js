import styles from "./styles/card.module.css";
export default function Card({ text, number }) {
  return (
    <div className={styles.card}>
      <p>{text}</p>
      <div className={styles.seperater}></div>
      <p>{number}</p>
    </div>
  );
}
