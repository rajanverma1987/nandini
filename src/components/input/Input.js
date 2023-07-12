import { forwardRef, useEffect, useState } from "react";
import styles from "./styles/input.module.css";
import { BiHide, BiShow } from "react-icons/bi";
function Input({ isError, type, label, name, onChange, value = "" }, ref) {
  useEffect(() => {}, [value]);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <>
      <div className={styles.container}>
        {label && <span className={styles.label}>{label}</span>}
        <input
          type={type === "password" && !passwordVisible ? "text" : type}
          ref={ref}
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
