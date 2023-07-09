const { useState, useEffect, useRef } = require("react");

import Loader from "../loader/Loader";
import styles from "./style/filesSelector.module.css";

const FileSelector = function ({
  fileType = "Csv",
  loading = false,
  onFileSelect = () => {},
  isError = false,
  uploaded = false,
}) {
  useEffect(() => {
    if (uploaded) {
      setMessage("File uploaded succesfully");
      setTimeout(() => {
        setMessage(`Click or Drag and Drop ${fileType} file here`);
      }, 3000);
    }
  }, [uploaded]);

  const [file, setFile] = useState(null);
  const ref = useRef();
  const [message, setMessage] = useState(
    `Click or Drag and Drop ${fileType} file here`
  );

  function handleFileChange(e) {
    e.preventDefault();
    if (e.target?.files[0].type != "text/csv") {
      showError("Only csv file is allowed");
      return;
    } else {
      setFile(e.target.files[0]);
      onFileSelect(e.target.files[0]);
      setMessage(e.target.files[0].name);
    }
  }

  function selectFile(e) {
    e.preventDefault();
    ref.current.click();
  }

  function hanldeDragOver(e) {
    e.preventDefault();
    setMessage(`Drop ${fileType} file here`);
  }

  function showError(message) {
    setMessage(message);
    setTimeout(() => {
      setMessage(`Click or Drag and Drop ${fileType} file here`);
    }, 3000);
  }

  function hanldeOnDrop(e) {
    e.preventDefault();
    e.stopPropagation();
    if (e?.dataTransfer?.files.length > 1) {
      showError("Multiple files are not allowed");
    } else {
      if (e.dataTransfer.files[0].type != "text/csv") {
        showError("Only csv file is allowed");
      } else {
        setMessage(e.dataTransfer.files[0].name);
        setFile(e.dataTransfer.files[0]);
        onFileSelect(e.dataTransfer?.files[0]);
      }
    }
  }
  return (
    <>
      <input
        type="file"
        style={{ display: "none" }}
        ref={ref}
        onChange={handleFileChange}
      />
      <div
        onClick={selectFile}
        className={`${styles.fileSelector} ${isError ? styles.error : ""} ${
          uploaded ? styles.uploaded : ""
        }`}
        onDragOver={hanldeDragOver}
        onDrop={hanldeOnDrop}
      >
        {loading ? <Loader text="processing" /> : message}
      </div>
    </>
  );
};
export default FileSelector;
