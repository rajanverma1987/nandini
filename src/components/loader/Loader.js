import styles from "./styles/loader.module.css";
export default function Loader({ text = "loading" }) {
  return (
    <>
      <div className={styles.loader}>
        <span />
        <span />
        <span />
        <span />
        <h1>{text}</h1>
      </div>
    </>
  );
}
