import Heading from "../heading/Heading";
import styles from "./styles/form.module.css";

export default function Form({ children, title = "", name = "" }) {
  return (
    <form
      className={styles.form}
      name={name.replaceAll(" ", "_")}
      onClick={(e) => {
        e.stopPropagation();
      }}
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      {title && <Heading text={title} type="heading_secondary" />}
      {children}
    </form>
  );
}
