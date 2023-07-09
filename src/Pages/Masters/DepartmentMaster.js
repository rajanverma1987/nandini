import { department } from "../../forms/masters";
import FormGenerator from "./../../components/form_generator/FormGenerator";
import { useState } from "react";

export default function DepartmentMaster() {
  const [formData, setFormData] = useState(department);

  function handleOnChange() {}
  function handleSubmit() {}
  let functions = { handleOnChange, handleSubmit };
  return (
    <>
      <FormGenerator formData={formData} functions={functions} />
    </>
  );
}
