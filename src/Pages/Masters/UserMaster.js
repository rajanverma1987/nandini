import { user } from "../../forms/masters";
import FormGenerator from "./../../components/form_generator/FormGenerator";
import { useState } from "react";
import {
  axios_,
  extractData,
  updateFormData,
  validateForm,
} from "../../_utilities/utll";
export default function UserMaster() {
  const [formData, setFormData] = useState(user);

  function handleOnChange() {
    const [e, formItemIndex, ...dropdown] = arguments;
    updateFormData(e, setFormData, formItemIndex); //MANAGE FORM STATE
  }
  async function handleSubmit() {
    if (await validateForm(setFormData)) {
      const inputData = extractData(formData);
      console.log(inputData);
      const res = await axios_.post(formData.api, inputData);
      if (res.status == 200) {
        alert("Success");
      }
    }
  }
  let functions = { handleOnChange, handleSubmit };
  return (
    <>
      <FormGenerator formData={formData} functions={functions} />
    </>
  );
}
