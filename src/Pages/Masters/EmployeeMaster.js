import { employee } from "../../forms/masters";
import FormGenerator from "./../../components/form_generator/FormGenerator";
import {
  axios_,
  extractData,
  updateFormData,
  validateForm,
  ResetFormData,
} from "../../utilities/utll";

import { useContext, useEffect, useState } from "react";
import { Context } from "../../store/store";
export default function EmployeeMaster() {
  const [formData, setFormData] = useState(employee);
  const { companyID } = useContext(Context);
  const [reset, setReset] = useState(false);
  useEffect(() => {
    setFormData((prev) => {
      let obj = { ...prev };
      obj.forms[1][0].rows[0].controls[0].fetch.data = { companyID };
      return obj;
    });
  }, [companyID, reset]);

  function handleOnChange() {
    const [e, formItemIndex, ...dropdown] = arguments;
    updateFormData(e, setFormData, formItemIndex); //MANAGE FORM STATE
  }
  async function handleSubmit() {
    const inputData = extractData(formData);
    console.log("inputData", inputData);
    if (await validateForm(setFormData)) {
      const inputData = extractData(formData);

      const res = await axios_.post(formData.api, inputData);
      if (res.status == 200) {
        alert("Success");
      }
    }
  }
  function handleReset() {
    setReset((prev) => !prev);
    ResetFormData(setFormData);
  }
  let functions = { handleOnChange, handleSubmit, handleReset };
  return (
    <>
      <FormGenerator formData={formData} functions={functions} />
    </>
  );
}
