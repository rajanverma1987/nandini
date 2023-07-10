import { company } from "../../forms/tally_data";
import { Context } from "../../store/store";
import FormGenerator from "./../../components/form_generator/FormGenerator";
import { useContext, useEffect, useState } from "react";

export default function Company() {
  const [formData, setFormData] = useState(company);
  const { CompanyID } = useContext(Context);
  useEffect(() => {
    setFormData((prev) => {
      let obj = { ...prev };
      obj.forms[0][0].rows[0].controls[0].fetch.data = { ID: CompanyID };
      return obj;
    });
  }, [CompanyID]);

  function handleOnChange() {}
  function handleSubmit() {}
  let functions = { handleOnChange, handleSubmit };
  return (
    <>
      <FormGenerator formData={formData} functions={functions} />
    </>
  );
}
