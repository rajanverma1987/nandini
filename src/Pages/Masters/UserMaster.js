import { user } from "../../forms/masters";
import FormGenerator from "./../../components/form_generator/FormGenerator";

import {
  axios_,
  extractData,
  updateFormData,
  updateFormOnSelection,
  validateForm,
  ResetFormData,
} from "../../utilities/utll";

import { useContext, useEffect, useState } from "react";
import { Context } from "../../store/store";
export default function UserMaster() {
  const [formData, setFormData] = useState(user);
  const { CompanyID, displayModal } = useContext(Context);
  const [edit, setEdit] = useState(false);
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

    // Toggle Employee or Company
    if (dropdown[0]?.name === "userType") {
      if (dropdown[0].selectedOptions[0] === 1) {
        setFormData((prev) => {
          let obj = { ...prev };
          obj.forms[0][0].rows[0].controls[2].name = "EmployeeId";
          obj.forms[0][0].rows[0].controls[2].title = "Employee";
          obj.forms[0][0].rows[0].controls[2].selector = "Select Employee";
          obj.forms[0][0].rows[0].controls[2].fetch.api =
            "Master/Employee/GetByIdData";
          obj.forms[0][0].rows[0].controls[2].fetch.data = { CompanyID };
          obj.forms[0][0].rows[0].controls[2].fetch.fields = [
            "EmployeeCode",
            "EmployeeName",
          ];
          return obj;
        });
      } else if (dropdown[0].selectedOptions[0] === 2) {
        setFormData((prev) => {
          let obj = { ...prev };
          obj.forms[0][0].rows[0].controls[2].name = "CompanyID";
          obj.forms[0][0].rows[0].controls[2].title = "Company";
          obj.forms[0][0].rows[0].controls[2].selector = "Select Company";
          obj.forms[0][0].rows[0].controls[2].fetch.api = "Company/GetData";
          obj.forms[0][0].rows[0].controls[2].fetch.data = { CompanyID };
          obj.forms[0][0].rows[0].controls[2].fetch.fields = [
            "ID",
            "RemoteCmpName",
          ];
          return obj;
        });
      }
    }
  }
  async function handleSubmit() {
    const inputData = extractData(formData);
    console.log(inputData);
    if (await validateForm(setFormData)) {
      const inputData = extractData(formData);
      // CHeck if Password and COnfirm Pass match
      if (inputData.User.Password != inputData.User.confirmPassword) {
        updateFormOnSelection(setFormData, 0, "Password", "isValid", false);
        updateFormOnSelection(
          setFormData,
          0,
          "confirmPassword",
          "isValid",
          false
        );
        return;
      }
      try {
        const res = await axios_.post(formData.api, inputData);
        displayModal(res.data.Message);
      } catch (e) {
        displayModal(e.message);
      }
    }
  }

  function handleEdit(record) {
    if (!record) return;
    let data = extractData(formData);
    // console.log("data", data.department, "record", record);
    // Fill Form with selected record
    Object.entries(data.user).forEach((entry) => {
      updateFormOnSelection(
        setFormData,
        0,
        entry[0],
        "value",
        record[1][entry[0]] ? record[1][entry[0]] : ""
      );
      console.log(entry);
    });
    setEdit(true);
  }

  function handleReset() {
    ResetFormData(setFormData);
  }
  let functions = { handleOnChange, handleSubmit, handleReset, handleEdit };
  return (
    <>
      <FormGenerator formData={formData} functions={functions} />
    </>
  );
}
