import { employee } from "../../forms/masters";
import FormGenerator from "./../../components/form_generator/FormGenerator";
import {
  axios_,
  extractData,
  updateFormData,
  validateForm,
  ResetFormData,
  updateFormOnSelection,
} from "../../utilities/utll";

import { useContext, useEffect, useState } from "react";
import { Context } from "../../store/store";
export default function EmployeeMaster() {
  const [formData, setFormData] = useState(employee);
  const { CompanyID, displayModal } = useContext(Context);
  const [editId, setEdit] = useState(false);

  useEffect(() => {
    setFormData((prev) => {
      let obj = { ...prev };
      obj.forms[1][0].rows[0].controls[0].fetch.data = { CompanyID };
      return obj;
    });
  }, [CompanyID]);

  function handleOnChange() {
    const [e, formItemIndex, ...dropdown] = arguments;
    updateFormData(e, setFormData, formItemIndex); //MANAGE FORM STATE

    if (dropdown[0]?.name === "Country" && dropdown[0]?.selectedOptions) {
      setFormData((prev) => {
        let obj = { ...prev };
        obj.forms[0][0].rows[0].controls[10].fetch.api =
          "Master/State/GetByIdData";
        obj.forms[0][0].rows[0].controls[10].fetch.data = {
          CountryId: dropdown[0].selectedOptions[0],
        };
        return obj;
      });
    } else if (dropdown[0]?.name === "State" && dropdown[0]?.selectedOptions) {
      setFormData((prev) => {
        let obj = { ...prev };
        obj.forms[0][0].rows[0].controls[11].fetch.api =
          "Master/City/GetByIdData";
        obj.forms[0][0].rows[0].controls[11].fetch.data = {
          StateId: dropdown[0].selectedOptions[0],
        };
        return obj;
      });
    }
  }

  async function handleSubmit() {
    const inputData = extractData(formData);

    if (await validateForm(setFormData)) {
      const inputData = extractData(formData);
      console.log("editId", editId);
      if (editId) {
        inputData.Employee.EmployeeId = editId;
      }
      console.log("inputData", inputData);
      try {
        const res = await axios_.post(formData.api, inputData);
        displayModal(res);
      } catch (e) {
        console.log(e);
        displayModal(null, e.message);
      }
    }
    setEdit(false);
  }

  function handleReset() {
    ResetFormData(setFormData);
  }

  function handleEdit(record) {
    if (!record) return;

    // Load State and City Dropdown
    setFormData((prev) => {
      let obj = { ...prev };
      obj.forms[0][0].rows[0].controls[10].fetch.api =
        "Master/State/GetByIdData";
      obj.forms[0][0].rows[0].controls[10].fetch.data = {
        CountryId: 0,
      };
      return obj;
    });
    setFormData((prev) => {
      let obj = { ...prev };
      obj.forms[0][0].rows[0].controls[11].fetch.api =
        "Master/City/GetByIdData";
      obj.forms[0][0].rows[0].controls[11].fetch.data = {
        StateId: 0,
      };
      return obj;
    });

    // Update Forms for Editing
    setTimeout(() => {
      let data = extractData(formData);
      console.log("data", data.employee, "record", record);
      // Fill Form with selected record
      Object.entries(data.Employee).forEach((entry) => {
        updateFormOnSelection(
          setFormData,
          0,
          entry[0],
          "value",
          record[1][entry[0]] ? record[1][entry[0]] : ""
        );
      });
      setEdit(record[1].EmployeeId);
    }, 1000);
  }

  let functions = { handleOnChange, handleSubmit, handleReset, handleEdit };
  return (
    <>
      <FormGenerator formData={formData} functions={functions} />
    </>
  );
}
