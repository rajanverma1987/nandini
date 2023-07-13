import { useContext, useEffect, useState } from "react";
import FormGenerator from "../../components/form_generator/FormGenerator";
import { loginForm } from "../../forms/login";
import { useHistory } from "react-router-dom";

import {
  axios_,
  extractData,
  updateFormData,
  validateForm,
} from "../../utilities/utll";
import { Context } from "../../store/store";
import { IoIosCall, IoMdMail } from "react-icons/io";
import { AiFillCopyrightCircle } from "react-icons/ai";
import Toast from "../../components/toast/Toast";

export default function Login() {
  const { ip, setUserName, setUser } = useContext(Context);
  const [formData, setFormData] = useState(loginForm);
  const [message, setMessage] = useState(null);
  const [success, setLogginSuccess] = useState(true);
  const history = useHistory();
  useEffect(() => {
    try {
      let user = JSON.parse(localStorage.getItem("user"));
      console.log(user);
      if (user[0]?.UserName) {
        history.push("/postlogin");
      }
    } catch (e) {
      console.log(e);
    }
  }, []);
  const router = useHistory();
  function handleOnChange() {
    const [e, formItemIndex, ...dropdown] = arguments;
    updateFormData(e, setFormData, formItemIndex); //MANAGE FORM STATE
  }

  async function handleSubmit() {
    let validated = await validateForm(setFormData);
    if (await validateForm(setFormData)) {
      const inputData = extractData(formData);
      let body = { ...inputData };
      setLogginSuccess(true);
      body.USERMASTER.ip = ip.data.ip;
      const res = await axios_.post(formData.api, body);

      if (res.data.EmployeeData) {
        localStorage.setItem("user", JSON.stringify(res.data?.UserData));
        setUser(res.data?.UserData);
        setMessage(res.data.Message);
        setTimeout(() => {
          router.push("/postlogin");
        }, 3000);
      } else {
        setLogginSuccess(false);
        setMessage(res.data.Message);
      }
    }
  }
  let functions = { handleOnChange, handleSubmit };

  return (
    <div className="loginPage">
      {message && (
        <Toast unloader={setMessage} message={message} success={success} />
      )}
      <div className="logoHeader">
        <img src="/images/mayank.png" />
      </div>
      <div className="loginform">
        <div className="logo">
          <img src="/images/logo.png" />
        </div>
        <FormGenerator
          formData={formData}
          functions={functions}
          componentType={"login"}
        />
      </div>
      <div className="footer">
        <div className="contact">
          <span>
            <IoMdMail />
            <a href="mailto:dilipe9@gmail.com">dilipe9@gmail.com</a>
          </span>
          <span>
            <IoIosCall />
            <a href="tel:7597788711">7597788711</a>
          </span>
        </div>
        <div className="contact">
          <span className="copyright">
            2023
            <AiFillCopyrightCircle />
            Mayank Software Solutions
          </span>
        </div>
      </div>
    </div>
  );
}
