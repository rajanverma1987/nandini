import { forwardRef, useEffect, useState } from "react";
import styles from "./styles/input.module.css";

function Input({ isError, type, label, name, onChange, value = "" }, ref) {
  useEffect(() => {}, [value]);
  return (
    <>
      <div className={styles.container}>
        {label && <span className={styles.label}>{label}</span>}
        <input
          type={type}
          ref={ref}
          value={value}
          onChange={onChange}
          placeholder={label}
          className={`${styles.input} ${isError ? styles.error : ""}`}
          name={name}
        ></input>
      </div>
    </>
  );
}

export default forwardRef(Input);
