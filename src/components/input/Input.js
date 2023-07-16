import { forwardRef, useEffect, useState } from "react";
import styles from "./styles/input.module.css";
import { BiHide, BiShow } from "react-icons/bi";
function Input(
  { isError, type, label, name, onChange, value = "", enabled = true },
  ref
) {
  useEffect(() => {}, [value, enabled]);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <>
      <div className={styles.container}>
        {label && <span className={styles.label}>{label}</span>}
        <input
          type={
            type === "password" && !passwordVisible
              ? type
              : type === "date"
              ? "date"
              : "text"
          }
          ref={ref}
          disabled={!enabled}
          value={value}
          onChange={onChange}
          placeholder={label}
          className={`${styles.input} ${isError ? styles.error : ""}`}
          name={name}
        ></input>
        {type === "password" && (
          <button
            className={styles.passwordButton}
            onClick={() => togglePasswordVisibility()}
          >
            {!passwordVisible ? <BiHide /> : <BiShow />}
          </button>
        )}
      </div>
    </>
  );
}

export default forwardRef(Input);
