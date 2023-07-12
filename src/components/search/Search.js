import { forwardRef, useEffect } from "react";
import styles from "./styles/search.module.css";
import { BsSearch } from "react-icons/bs";

function Input({ isError, type, label, name, onChange }, ref) {
  useEffect(() => {}, []);
  return (
    <>
      <div className={styles.container}>
        <span className={styles.label}>{label}</span>
        <BsSearch className={styles.icon} />
        <input
          type={type}
          ref={ref}
          onChange={onChange}
          placeholder={"Search"}
          className={`${styles.input} ${isError ? styles.error : ""}`}
          name={name}
        ></input>
      </div>
    </>
  );
}

export default forwardRef(Input);
