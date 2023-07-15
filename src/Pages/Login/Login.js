import { useContext, useEffect, useState } from "react";
import FormGenerator from "../../components/form_generator/FormGenerator";
import { loginForm } from "../../forms/login";

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
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { ip, setUser } = useContext(Context);
  const [formData, setFormData] = useState(loginForm);
  const [message, setMessage] = useState(null);
  const [success, setLogginSuccess] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    try {
      let user = JSON.parse(localStorage.getItem("user"));
      console.log(user);
      if (!user) return;
      if (user[0]?.UserName) {
        navigate("/postlogin");
      }
    } catch (e) {
      console.log(e);
    }
  }, []);

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
          navigate("/postlogin");
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
