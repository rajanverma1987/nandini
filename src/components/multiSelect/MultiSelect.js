// import { forwardRef, useState, useEffect } from "react";
// import { v4 as uuidv4 } from "uuid";
import styles from "./styles/multiselect.module.css";
import { axios_ } from "../../utilities/utll";

import React, { useState, useEffect } from "react";
const MultiSelect = ({
  fetch = {},
  options_ = [],
  isError = false,
  title = null,
  name = "",
  frmIndex = 0,
  value = [],
  rows = 3,
  onChange = () => {},
}) => {
  const [options, setOptions] = useState(options_);
  const [selectedOptions, setSelectedOptions] = useState(value);
  const [showList, setShowList] = useState(false);
  useEffect(() => {
    if (selectedOptions.length > 0 && value.length == 0) setSelectedOptions([]);
    axios_
      .post(fetch.api, {})
      .then((response) => {
        setOptions(response.data.Data);
      })
      .catch((error) => {
        console.error("Error fetching options:", error);
      });
  }, [value, fetch.api]);

  useEffect(() => {
    onChange(
      {
        target: {
          name: name,
          value: selectedOptions,
        },
      },
      frmIndex,
      { name, selectedOptions }
    );
  }, [selectedOptions]);

  const handleOptionChange = (e) => {
    const { value } = e.target;

    if (selectedOptions.includes(value)) {
      setSelectedOptions(selectedOptions.filter((option) => option !== value));
    } else {
      setSelectedOptions([...selectedOptions, value]);
    }
  };

  return (
    <div className={styles.container} key={`select_block_${name}`}>
      {/* <span className={styles.label}>{title}</span>
      <select
        style={{ height: `${rows}rem` }}
        multiple
        value={selectedOptions}
        onChange={handleOptionChange}
        className={`${styles.select} ${isError ? styles.error : ""}`}
      >
        {options &&
          options.length > 0 &&
          options.map((option, index) => (
            <option key={`option${index}`} value={option.RoleId}>
              {option.RoleName}
            </option>
          ))}
      </select> */}

      <span
        className={`${styles.select} ${isError ? styles.error : ""}`}
        onClick={() => {
          setShowList((prev) => !prev);
        }}
      >
        <span className={styles.label}>{title}</span>
        <span
          className={styles.selector}
          key={`option_-1`}
        >{`--Select Role--`}</span>
        <ul
          className={`${styles.select} ${showList ? styles.list : styles.hide}`}
        >
          <span>
            {options &&
              options.length > 0 &&
              options.map((option, index) => (
                <li
                  key={`option${index}`}
                  value={option.RoleId}
                  className={styles.option}
                >
                  <span></span>
                  {option.RoleName}
                </li>
              ))}
          </span>
        </ul>
      </span>
    </div>
  );
};

export default MultiSelect;
