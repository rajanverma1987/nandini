import { setting } from "../../forms/masters";
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
export default function Settings() {
  const [formData, setFormData] = useState(setting);
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
  }
  async function handleSubmit() {
    if (await validateForm(setFormData)) {
      const inputData = extractData(formData);
      console.log(inputData);
      try {
        const res = await axios_.post(formData.api, inputData);
        displayModal(res.data.Message);
      } catch (e) {
        displayModal(e.message);
      }
    }
  }
  function handleReset() {
    ResetFormData(setFormData);
  }

  function handleEdit(record) {
    if (!record) return;
    let data = extractData(formData);
    // console.log("data", data.setting, "record", record);
    // Fill Form with selected record
    Object.entries(data.setting).forEach((entry) => {
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

  let functions = { handleOnChange, handleSubmit, handleReset, handleEdit };
  return (
    <>
      <FormGenerator formData={formData} functions={functions} />
    </>
  );
}
