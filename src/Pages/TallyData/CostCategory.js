import { costCategory } from "../../forms/tally_data";
import FormGenerator from "./../../components/form_generator/FormGenerator";
import { useEffect, useState } from "react";

export default function CostCategory() {
  const [formData, setFormData] = useState(costCategory);
  useEffect(() => {
    setFormData((prev) => {
      let obj = { ...prev };
      obj.forms[0][0].rows[0].controls[0].fetch.data = { CompanyID: 1 };
      return obj;
    });
  }, []);
  function handleOnChange() {}
  function handleSubmit() {}
  let functions = { handleOnChange, handleSubmit };
  return (
    <>
      <FormGenerator formData={formData} functions={functions} />
    </>
  );
}
