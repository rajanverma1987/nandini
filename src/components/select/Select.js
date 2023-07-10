import { forwardRef, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./styles/select.module.css";
import { axios_, dropDownData } from "../../utilities/utll";

function Select(
  {
    fetch = {},
    selectorText = "",
    options = [],
    isError = false,
    title = null,
    name = "",
    frmIndex = 0,
    value = -1,
    onChange = () => {},
  },
  inputRef
) {
  const uid = uuidv4();
  const [selected, setSelected] = useState(value);
  const [selectionOption, setSelectOption] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (fetch?.api) {
      getOptions();
    } else {
      setSelectOption(options);
    }
    setLoading(false);
    async function getOptions() {
      try {
        const res = await axios_.post(fetch.api, fetch.data);
        if (res.status == 200) {
          let data = dropDownData(res.data.Data, fetch.fields);
          setSelectOption(data);
        }
      } catch (e) {
        console.log(e);
      }
    }
  }, []);

  function handleOnChange(e) {
    e.preventDefault();
    setSelected(e.target.value);
    let selectedOptions = selectionOption.filter(
      (option) => option[0] == e.target.value
    )[0];
    onChange(e, frmIndex, { name, selectedOptions });
  }
  // function dropDownList(e) {
  //   try {
  //     let val = e.target.value;
  //     console.log(selectRef);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }
  return (
    <>
      <div className={styles.container} key={`select_block_${uid}${name}`}>
        {title && (
          <span className={styles.label} key={`span_${uid}`}>
            {title}
          </span>
        )}
        {/* <input
          type="text"
          className={styles.searchBox}
          placeholder={selectorText}
          onChange={dropDownList}
        /> */}
        <select
          value={selected}
          onChange={handleOnChange}
          key={`select_${uid}`}
          name={name}
          ref={inputRef}
          className={`${styles.select} ${isError ? styles.error : ""} ${
            selected == -1 ? styles.primaryColor : ""
          }`}
        >
          <option
            key={`default_${uid}`}
            value={-1}
            styles={{ "text-align": "center" }}
          >
            --{selectorText}--
          </option>

          {loading ? (
            <option>...Loading</option>
          ) : (
            selectionOption?.length > 0 &&
            selectionOption.map((option, index) => (
              <option
                key={`${index}_${uid}${name}`}
                value={option[0]}
                disabled={option?.enabled ? option?.enabled : false}
              >
                {option[1]}
              </option>
            ))
          )}
        </select>
      </div>
    </>
  );
}

export default forwardRef(Select);
