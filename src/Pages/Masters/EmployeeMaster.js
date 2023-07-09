import { employee } from "../../forms/masters";
import FormGenerator from "./../../components/form_generator/FormGenerator";
import {
  axios_,
  extractData,
  updateFormData,
  validateForm,
} from "../../_utilities/utll";

import { useContext, useEffect, useState } from "react";
import { Context } from "../../store/store";
export default function EmployeeMaster() {
  const [formData, setFormData] = useState(employee);
  const { companyID } = useContext(Context);
  useEffect(() => {
    console.log("COMPANY ID", companyID);
    setFormData((prev) => {
      let obj = { ...prev };
      obj.forms[1][0].rows[0].controls[0].fetch.data = { companyID };
      return obj;
    });
  }, [companyID]);
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
