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
      {
        name,
        selectedOptions: selectedOptions.map((option) => {
          return { option };
        }),
      }
    );
  }, [selectedOptions]);

  const handleOptionChange = (opt) => {
    if (
      selectedOptions.some(
        (option) => option[fetch.fields[0]] == opt[fetch.fields[0]]
      )
    ) {
      setSelectedOptions(
        selectedOptions.filter((option) => {
          return option[fetch.fields[0]] !== opt[fetch.fields[0]];
        })
      );
    } else {
      setSelectedOptions([...selectedOptions, opt]);
    }
  };

  return (
    <div className={styles.container} key={`select_block_${name}`}>
      <span
        className={`${styles.select} ${isError ? styles.error : ""}`}
        onClick={() => {
          setShowList((prev) => !prev);
        }}
      >
        <span className={styles.label}>{title}</span>
        <span className={styles.selectedItemsContaier}>
          {selectedOptions.length > 0 ? (
            <>
              <span>
                {selectedOptions &&
                  selectedOptions.length > 0 &&
                  selectedOptions.map((opt, index) => {
                    if (index <= 1) {
                      return (
                        <span
                          key={`selected_${index}`}
                          className={styles.selected}
                        >
                          {
                            options.filter(
                              (o) => o[fetch.fields[0]] === opt[fetch.fields[0]]
                            )[0][fetch.fields[1]]
                          }
                        </span>
                      );
                    }
                  })}
                {selectedOptions.length > 2 ? (
                  <span
                    className={styles.selectedRest}
                    key={`selectedRest`}
                  >{`+${selectedOptions.length - 2}`}</span>
                ) : (
                  ""
                )}
              </span>
            </>
          ) : (
            <span
              className={styles.selector}
              key={`option_-1`}
            >{`--Select Role--`}</span>
          )}
        </span>
        <ul
          className={`${styles.select} ${showList ? styles.list : styles.hide}`}
        >
          <span>
            {options &&
              options.length > 0 &&
              options.map((option, index) => (
                <li
                  onClick={() => {
                    handleOptionChange(option);
                  }}
                  key={`option${index}`}
                  className={styles.option}
                >
                  <span>
                    <input
                      type="checkbox"
                      onChange={() => {
                        handleOptionChange(option);
                      }}
                      checked={selectedOptions.some(
                        (opt) =>
                          opt[fetch.fields[0]] === option[fetch.fields[0]]
                      )}
                    />
                  </span>
                  <span>{option[fetch.fields[1]]}</span>
                </li>
              ))}
          </span>
        </ul>
      </span>
    </div>
  );
};

export default MultiSelect;
