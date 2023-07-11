import { forwardRef, useState, useEffect, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./styles/select.module.css";
import { axios_, dropDownData } from "../../utilities/utll";
import { Context } from "./../../store/store";
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
  const { tbldata } = useContext(Context);
  const [selected, setSelected] = useState(value);
  const [selectionOption, setSelectOption] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (value != selected) setSelected(value); //For Resetting
    if (fetch?.api) {
      getOptions();
    } else {
      let data = dropDownData(options, fetch.fields);
      setSelectOption(data);
    }
    setLoading(false);
    async function getOptions() {
      try {
        const res = await axios_.post(fetch.api, fetch.data);
        if (res.status == 200) {
          let data = dropDownData(res.data.Data, fetch.fields);
          if (!tbldata[fetch.api]) tbldata[fetch.api] = data;
          setSelectOption(data);
        }
      } catch (e) {
        console.log(e);
      }
    }
  }, [value, fetch.api, fetch.data]);

  function handleOnChange(e) {
    e.preventDefault();
    setSelected(e.target.value);
    let selectedOptions = selectionOption.filter(
      (option) => option[0] == e.target.value
    )[0];
    onChange(e, frmIndex, { name, selectedOptions });
  }

  return (
    <>
      <div className={styles.container} key={`select_block_${name}`}>
        {title && (
          <span className={styles.label} key={`span_${name}`}>
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
          key={`select_${name}`}
          name={name}
          ref={inputRef}
          className={`${styles.select} ${isError ? styles.error : ""}`}
        >
          <option
            key={`default_${name}`}
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
                key={`${index}_${name}`}
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
