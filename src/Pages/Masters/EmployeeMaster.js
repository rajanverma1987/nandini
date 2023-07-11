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
  const { CompanyID, displayModal } = useContext(Context);
  const [reset, setReset] = useState(false);
  useEffect(() => {
    setFormData((prev) => {
      let obj = { ...prev };
      obj.forms[1][0].rows[0].controls[0].fetch.data = { CompanyID };
      return obj;
    });
  }, [CompanyID, reset]);

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
    console.log("inputData", inputData);
    if (await validateForm(setFormData)) {
      const inputData = extractData(formData);

      try {
        const res = await axios_.post(formData.api, inputData);
        displayModal(res.data.Message);
      } catch (e) {
        displayModal(e.message);
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
