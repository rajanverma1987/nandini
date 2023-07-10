import { stockGroup } from "../../forms/tally_data";
import FormGenerator from "./../../components/form_generator/FormGenerator";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../store/store";
export default function StockGroup() {
  const [formData, setFormData] = useState(stockGroup);
  const { CompanyID } = useContext(Context);
  useEffect(() => {
    setFormData((prev) => {
      let obj = { ...prev };
      obj.forms[0][0].rows[0].controls[0].fetch.data = { CompanyID };
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
