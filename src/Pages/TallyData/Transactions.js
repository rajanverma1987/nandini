import { Transactions } from "../../forms/tally_data";
import FormGenerator from "../../components/form_generator/FormGenerator";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../store/store";
import {
  updateFormOnSelection,
  updateFormData,
  dateFormat,
  extractData,
} from "../../utilities/utll";
export default function Transaction() {
  const [formData, setFormData, tbldata] = useState(Transactions);
  const { CompanyID } = useContext(Context);
  useEffect(() => {}, [CompanyID]);

  function handleOnChange() {
    const [e, formItemIndex, ...dropdown] = arguments;

    updateFormData(e, setFormData, formItemIndex); //MANAGE FORM STATE

    console.log("dropdown[0]?.selectedOptions", dropdown[0]?.selectedOptions);
    // Update Date control value on Period change
    if (dropdown[0]?.name === "Period" && dropdown[0]?.selectedOptions) {
      updateFormOnSelection(
        setFormData,
        formItemIndex,
        "FromDate",
        "value",
        dateFormat(dropdown[0]?.selectedOptions[2])
      );
      updateFormOnSelection(
        setFormData,
        formItemIndex,
        "ToDate",
        "value",
        dateFormat(dropdown[0]?.selectedOptions[3])
      );
      // Enable/Disable Date Controls
      if (dropdown[0]?.selectedOptions[1] === "Custom") {
        updateFormOnSelection(
          setFormData,
          formItemIndex,
          "submit",
          "visible",
          true
        );
        updateFormOnSelection(
          setFormData,
          formItemIndex,
          "FromDate",
          "enabled",
          true
        );
        updateFormOnSelection(
          setFormData,
          formItemIndex,
          "ToDate",
          "enabled",
          true
        );
      } else {
        updateFormOnSelection(
          setFormData,
          formItemIndex,
          "submit",
          "visible",
          false
        );
        updateFormOnSelection(
          setFormData,
          formItemIndex,
          "FromDate",
          "enabled",
          false
        );
        updateFormOnSelection(
          setFormData,
          formItemIndex,
          "ToDate",
          "enabled",
          false
        );
      }
    }
    tbldata &&
      tbldata["transactionsTable"] &&
      delete tbldata["transactionsTable"];

    if (dropdown[0]?.selectedOptions[1] !== "Custom") {
      setFormData((prev) => {
        let obj = { ...prev };
        obj.forms[1][0].rows[0].controls[0].fetch.data = {
          CompanyID,
          FromDate: dateFormat(dropdown[0]?.selectedOptions[2]),
          ToDate: dateFormat(dropdown[0]?.selectedOptions[3]),
        };
        return obj;
      });
    }
  }
  function handleSubmit() {
    let inputData = extractData(formData);
    console.log("inputData", inputData);
    setFormData((prev) => {
      let obj = { ...prev };
      obj.forms[1][0].rows[0].controls[0].fetch.data = {
        CompanyID,
        FromDate: dateFormat(inputData.transactions.FromDate),
        ToDate: dateFormat(inputData.transactions.ToDate),
      };
      return obj;
    });
  }

  let functions = { handleOnChange, handleSubmit };
  return (
    <>
      <FormGenerator formData={formData} functions={functions} />
    </>
  );
}
