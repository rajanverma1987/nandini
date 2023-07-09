import axios from "axios";
export const axios_ = axios.create({
  baseURL: "https://datawarehouse.mayanksoftwares.com/api/",
});

export const dropDownData = (json, headers) => {
  let data = [];
  let row = [];

  Object.entries(json).forEach((entry) => {
    row = [];
    headers.forEach((header) => {
      row.push(entry[1][header]);
    });
    data.push(row);
  });

  return data;
};

export const validateForm = async (stateUpdateFunction) => {
  let formStatus = true;

  await stateUpdateFunction((prev) => {
    let obj = { ...prev };
    obj.forms.forEach((subForms) => {
      subForms.forEach((form) => {
        form.rows.forEach((row) => {
          row.controls.forEach((control) => {
            control.isValid = true;
            const { value } = control;
            if (control.type !== "button" && control.type !== "table") {
              if (control?.validation) {
                let validations = Object.entries(control.validation);
                validations.forEach((validaton) => {
                  switch (validaton[0]) {
                    case "required":
                      if (validaton[1]) {
                        if (control.type == "select") {
                          console.log(control.name, value);
                          if (value == -1 || value == "") {
                            control.isValid = false;
                            formStatus = false;
                          }
                        } else {
                          if (!value) {
                            control.isValid = false;
                            formStatus = false;
                          }
                        }
                      }
                      break;
                    case "minLength":
                      if (value.length < validaton[1]) {
                        control.isValid = false;
                        formStatus = false;
                      }
                      break;
                    case "maxLength":
                      if (value.length > validaton[1]) {
                        control.isValid = false;
                        formStatus = false;
                      }
                      break;
                    case "isNumeric":
                      if (isNaN(value) && validaton[1]) {
                        console.log(value.length, validaton[1]);
                        control.isValid = false;
                        formStatus = false;
                      }
                      break;
                  }
                });
              }
            }
          });
        });
      });
    });
    return obj;
  });
  console.log(formStatus);
  return formStatus;
};

export const extractData = function (forms) {
  let extractedData = {};
  let parentName;
  try {
    forms.forms.forEach((subForms) => {
      subForms.forEach((form, formIndex) => {
        if (form.name) {
          if (form.type === "parent") {
            parentName = form.name;
            extractedData[parentName] = {};
          } else if (form.type === "child") {
            if (!extractedData[parentName][form.name])
              extractedData[parentName][form.name] = [];
            extractedData[parentName][form.name].push({});
          }

          form.rows.forEach((row) => {
            row.controls.forEach((control) => {
              const { name, value, type } = control;
              if (type !== "button" && type !== "table") {
                if (form.name === parentName) {
                  extractedData[parentName][name] = value;
                } else {
                  extractedData[parentName][form.name][
                    extractedData[parentName][form.name].length - 1
                  ][name] = value;
                }
              }
            });
          });
        }
      });
    });
    return extractedData;
  } catch (e) {
    console.log(e);
  }
};

export const updateFormData = (e, stateUpdateFunction, formItemIndex) => {
  const { name, value } = e.target;
  stateUpdateFunction((prev) => {
    let obj = { ...prev };
    obj.forms.forEach((form) => {
      form.forEach((forItem, formIndex) => {
        forItem.rows?.forEach((row) => {
          row.controls.forEach((control) => {
            if (control.name == name && formIndex == formItemIndex) {
              control.isValid = true;
              control.value = value;
            }
          });
        });
      });
    });
    return obj;
  });
};

export const updateFormOnSelection = (
  stateUpdateFunction,
  formItemIndex,
  name,
  value
) => {
  stateUpdateFunction((prev) => {
    let obj = { ...prev };
    obj.forms.forEach((form) => {
      form.forEach((forItem, formIndex) => {
        forItem.rows?.forEach((row) => {
          row.controls.forEach((control) => {
            if (control.type !== "table" && control.type !== "button") {
              if (control.name == name && formIndex == formItemIndex) {
                control.isValid = true;
                control.value = value;
              }
            }
          });
        });
      });
    });
    return obj;
  });
};

export const jsonToArray = (json) => {
  let result = [];

  Object.entries(json).forEach((row, index) => {
    if (index === 0) {
      // Get Header Row
      let headers = [];
      Object.entries(row[1]).forEach((col) => {
        if (!(typeof col[1] === "object")) {
          headers.push(col[0]);
        }
      });
      result.push(headers);
    }
    let rowData = [];
    // Get Data Row
    Object.entries(row[1]).forEach((col) => {
      if (!(typeof col[1] === "object")) {
        rowData.push(col[1]);
      }
    });
    result.push(rowData);
    rowData = [];
  });
  return result;
};

export const shufflTableColums = (data, order) => {
  let res = [];
  data.forEach((item) => {
    res.push([]);
    order.forEach((col, index) => {
      res[res.length - 1].push(item[col]);
    });
  });
  return res;
};

export const sortTable = (data, order, colIndex) => {
  let [header, ...d] = data;

  if (order === "asc") {
    d = d.sort((a, b) => {
      if (a[colIndex] <= b[colIndex]) return -1;
      if (a[colIndex] > b[colIndex]) return 1;
    });
  }
  if (order === "desc") {
    d = d.sort((a, b) => {
      if (a[colIndex] <= b[colIndex]) return 1;
      if (a[colIndex] > b[colIndex]) return -1;
    });
  }
  let res = [header, ...d];

  return res;
};

export const convertToCSV = function (array) {
  let csvContent = "data:text/csv;charset=utf-8,";
  array.forEach(function (rowArray) {
    let row = rowArray.map((value) => String(value));
    csvContent += row.join(",") + "\r\n";
  });

  let encodedUri = encodeURI(csvContent);
  let link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "data.csv");

  document.body.appendChild(link);
  link.click();
};
