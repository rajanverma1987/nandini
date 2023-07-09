import { forwardRef, useEffect, useState } from "react";
import styles from "./styles/checkbox.module.css";

function CheckBox({ isError, type, label, name, onChange }, ref) {
  useEffect(() => {
    // console.log(name);
  }, []);
  const [value, setValue] = useState(false);
  function CheckUncheck() {
    setValue((prev) => !prev);
  }
  return (
    <>
      <div className={`${styles.container} ${isError ? styles.error : ""}`}>
        {/* {label && <span className={styles.label}>{label}</span>} */}
        <input
          type="checkbox"
          ref={ref}
          checked={value}
          value={value}
          onChange={onChange}
          className={`${styles.input} `}
          name={name}
        />
        <div className={styles.checkBoxContainer} onClick={CheckUncheck}>
          <span className={styles.label}>{label}</span>
          <span className={styles.checkBox} />
        </div>
      </div>
    </>
  );
}

export default forwardRef(CheckBox);
