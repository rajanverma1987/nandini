import {
  ResetFormData,
  axios_,
  extractData,
  updateFormData,
  updateFormOnSelection,
  validateForm,
} from "../../utilities/utll";
import { department } from "../../forms/masters";
import { Context } from "../../store/store";
import FormGenerator from "./../../components/form_generator/FormGenerator";
import { useContext, useEffect, useState } from "react";

export default function DepartmentMaster() {
  const [formData, setFormData] = useState(department);
  const { CompanyID, displayModal } = useContext(Context);
  const [showModal, setShowModal] = useState(false);
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
    let validated = await validateForm(setFormData);
    if (validated) {
      const inputData = extractData(formData);
      try {
        const res = await axios_.post(formData.api, inputData);
        displayModal(res.data.Message);
      } catch (e) {
        displayModal(e.message);
      }
    }
    setEdit(false);
  }
  function handleReset() {
    ResetFormData(setFormData);
  }

  function handleEdit(record) {
    if (!record) return;
    let data = extractData(formData);
    // console.log("data", data.department, "record", record);
    // Fill Form with selected record
    Object.entries(data.department).forEach((entry) => {
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
