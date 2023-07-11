import {
  ResetFormData,
  axios_,
  extractData,
  updateFormData,
  validateForm,
} from "../../utilities/utll";
import { department } from "../../forms/masters";
import { Context } from "../../store/store";
import FormGenerator from "./../../components/form_generator/FormGenerator";
import { useContext, useEffect, useState } from "react";

export default function DepartmentMaster() {
  const [formData, setFormData] = useState(department);
  const { CompanyID } = useContext(Context);
  const [showModal, setShowModal] = useState(false);
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
    if (await validateForm(setFormData)) {
      const inputData = extractData(formData);
      console.log(inputData);
      const res = await axios_.post(formData.api, inputData);
      if (res.status == 200) {
        alert("Success");
      }
    }
  }
  function handleReset() {
    ResetFormData(setFormData);
  }
  let functions = { handleOnChange, handleSubmit, handleReset };
  return (
    <>
      <FormGenerator formData={formData} functions={functions} />
    </>
  );
}
