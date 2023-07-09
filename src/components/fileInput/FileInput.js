import { forwardRef, useEffect, useRef, useState } from "react";
import styles from "./styles/fileInput.module.css";
import Icon from "../icon/icon";
import { BsCloudUpload, BsCloudUploadFill, BsUpload } from "react-icons/bs";
import { IoIosCloudUpload, IoMdCloudUpload } from "react-icons/io";

function FileInput({ isError, type, label, name, onChange, value = "" }, ref) {
  useEffect(() => {
    // console.log(name);
  }, []);
  const [fileName, setFileName] = useState("--Click to select file--");
  const inputRef = useRef();

  function selectFile(e) {
    inputRef.current.click();
  }
  return (
    <>
      <div className={styles.container}>
        {label && <span className={styles.label}>{label}</span>}
        <input
          type="file"
          ref={inputRef}
          onChange={(e) => {
            setFileName(
              e.target?.files[0]?.name
                ? e.target?.files[0]?.name
                : "--Click to select file--"
            );
            onChange(e);
          }}
          placeholder={label}
          className={`${styles.fileinput}`}
          name={name}
        />
        <div
          key={"div2"}
          className={`${styles.input} ${isError ? styles.error : ""}`}
          onClick={selectFile}
        >
          {fileName}
          <div className={styles.buttonUpload}>
            <BsUpload />
          </div>
        </div>
      </div>
    </>
  );
}

export default forwardRef(FileInput);
