import { forwardRef, useEffect, useState } from "react";
import styles from "./styles/input.module.css";

function Input({ isError, type, label, name, onChange, value = "" }, ref) {
  useEffect(() => {}, [value]);
  return (
    <>
      <div className={styles.container}>
        {/* {label && (
          <span className={styles.label} style={{ color: "#c3c3c3" }}>
            {label}
          </span>
        )} */}
        <input
          type={type}
          ref={ref}
          value={value}
          onChange={onChange}
          placeholder={label}
          className={`${styles.input} ${isError ? styles.error : ""}`}
          name={name}
          style={{
            backgroundColor: "transparent",
            border: "1px solid #c3c3c3",
            borderRadius: "5px",
            position: "unset",
            height: "40px",
            color: "#c3c3c3",
          }}
        ></input>
      </div>
    </>
  );
}

export default forwardRef(Input);
