import {
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
  const { companyID } = useContext(Context);

  useEffect(() => {
    setFormData((prev) => {
      let obj = { ...prev };
      obj.forms[1][0].rows[0].controls[0].fetch.data = { companyID };
      return obj;
    });
  }, [companyID]);

  const [showModal, setShowModal] = useState(false);

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
  let functions = { handleOnChange, handleSubmit };
  return (
    <>
      <FormGenerator formData={formData} functions={functions} />
    </>
  );
}
