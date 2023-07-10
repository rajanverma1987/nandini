import { useState } from "react";
import FormGenerator from "../../components/form_generator/FormGenerator";
import { loginForm } from "../../forms/login";
import { useHistory } from "react-router-dom";
import {
  axios_,
  extractData,
  updateFormData,
  validateForm,
} from "../../utilities/utll";

export default function Login() {
  const [formData, setFormData] = useState(loginForm);
  const router = useHistory();
  function handleOnChange() {
    const [e, formItemIndex, ...dropdown] = arguments;
    updateFormData(e, setFormData, formItemIndex); //MANAGE FORM STATE
  }
  async function handleSubmit() {
    let validated = await validateForm(setFormData);
    if (await validateForm(setFormData)) {
      const inputData = extractData(formData);
      console.log(inputData);
      // const res = await axios_.post(formData.api, inputData);
      // if (res.status == 200) {
      //   alert("Success");
      // }
      router.push("/postlogin");
    }
  }
  let functions = { handleOnChange, handleSubmit };

  return (
    <div className="loginPage">
      <div className="loginform">
        <div className="logo">
          <img src="/images/logo.png" />
        </div>
        <FormGenerator formData={formData} functions={functions} />
      </div>
    </div>
  );
}
