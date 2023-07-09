import { setting } from "../../forms/masters";
import FormGenerator from "./../../components/form_generator/FormGenerator";
import { useState } from "react";

export default function Settings() {
  const [formData, setFormData] = useState(setting);

  function handleOnChange() {}
  function handleSubmit() {}
  let functions = { handleOnChange, handleSubmit };
  return (
    <>
      <FormGenerator formData={formData} functions={functions} />
    </>
  );
}
