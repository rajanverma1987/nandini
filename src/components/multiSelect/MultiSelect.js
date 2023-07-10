// import { forwardRef, useState, useEffect } from "react";
// import { v4 as uuidv4 } from "uuid";
import styles from "./styles/multiselect.module.css";
import { axios_, dropDownData } from "../../utilities/utll";

// function MultiSelect(
//   {
//     fetch = {},
//     selectorText = "",
//     options = [],
//     isError = false,
//     title = null,
//     name = "",
//     frmIndex = 0,
//     value = [-1],
//     multi = false,
//     rows = 0,
//     onChange = () => {},
//   },
//   inputRef
// ) {

//   const [selected, setSelected] = useState(value);
//   const [selectionOption, setSelectOption] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     if (fetch?.api) {
//       getOptions();
//     } else {
//       let data = dropDownData(options, fetch.fields);
//       setSelectOption(data);
//     }
//     setLoading(false);
//     async function getOptions() {
//       try {
//         const res = await axios_.post(fetch.api, fetch.data);
//         if (res.status == 200) {
//           let data = dropDownData(res.data.Data, fetch.fields);
//           setSelectOption(data);
//         }
//       } catch (e) {
//         console.log(e);
//       }
//     }
//   }, [fetch.api]);

//   function handleOnChange(e) {
//     e.preventDefault();
//     setSelected(e.target.value);
//     let selectedOptions = selectionOption.filter(
//       (option) => option[0] == e.target.value
//     )[0];
//     onChange(e, frmIndex, { name, selectedOptions });
//   }
//   return (
//     <>
//       <div className={styles.container} key={`select_block_${uid}${name}`}>
//         {title && (
//           <span className={styles.label} key={`span_${uid}`}>
//             {title}
//           </span>
//         )}
//         <select
//           onChange={handleOnChange}
//           key={`select_${uid}`}
//           name={name}
//           ref={inputRef}
//           multiple={multi}
//           aria-rowcount={5}
//           style={{ "--row": 4 }}
// className={`${styles.select} ${isError ? styles.error : ""} ${
//   selected == -1 ? styles.primaryColor : ""
// }`}
//         >
//           {loading ? (
//             <option>...Loading</option>
//           ) : (
//             selectionOption?.length > 0 &&
//             selectionOption.map((option, index) => (
//               <option
//                 key={`${index}_${uid}${name}`}
//                 value={option[0]}
//                 disabled={option?.enabled ? option?.enabled : false}
//               >
//                 {option[1]}
//               </option>
//             ))
//           )}
//         </select>
//       </div>
//     </>
//   );
// }

// export default forwardRef(MultiSelect);

import React, { useState, useEffect } from "react";
const MultiSelect = ({
  fetch = {},
  options_ = [],
  isError = false,
  title = null,
  name = "",
  frmIndex = 0,
  value = [-1],
  multi = false,
  rows = 3,
  onChange = () => {},
}) => {
  const [options, setOptions] = useState(options_);
  const [selectedOptions, setSelectedOptions] = useState([]);

  useEffect(() => {
    axios_
      .post(fetch.api, {})
      .then((response) => {
        setOptions(response.data.Data);
      })
      .catch((error) => {
        console.error("Error fetching options:", error);
      });
  }, []);

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
      <span className={styles.label}>{title}</span>
      <select
        style={{ height: `${rows}rem` }}
        multiple
        value={selectedOptions}
        onChange={handleOptionChange}
        className={`${styles.select} ${isError ? styles.error : ""}`}
      >
        {options.map((option, index) => (
          <option key={`option${index}`} value={option.RoleId}>
            {option.RoleName}
          </option>
        ))}
      </select>
    </div>
  );
};

export default MultiSelect;
