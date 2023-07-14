import React, { useEffect, useId, useState } from "react";

import Heading from "./../../components/heading/Heading";
import Input from "./../../components/input/Input";
import InputRow from "./../../components/input_row/InputRow";
import Form from "./../../components/form/Form";
import Button from "./../../components/button/Button";
import Select from "./../../components/select/Select";
import styles from "./styles/formGenerator.module.css";
import FileInput from "./../../components/fileInput/FileInput";

import Search from "../search/Search";
import CheckBox from "../checkbox/Checkbox";
import Table from "../table/Table";
import MultiSelect from "../multiSelect/MultiSelect";

export default function FormGenerator({ formData, functions, componentType }) {
  const [loading, setLoading] = useState(true);

  const uid = useId();
  useEffect(() => {
    setLoading(false);
  }, []);
  if (loading) {
    return <React.Fragment>Loading...</React.Fragment>;
  }

  return (
    <>
      {formData && (
        <div className={styles.container} key={`mainForm_${uid}`}>
          <Heading text={formData.screenTitle} key={`heading_${uid}`} />
          {formData.forms &&
            formData.forms.length > 0 &&
            formData.forms.map((form, frmIndex) => {
              const formKey = `form_${uid}_${frmIndex}`; // Generate a unique key for each form
              return (
                <div key={formKey}>
                  {Array.isArray(form) &&
                    form?.map((formItem, formItemIndex) => {
                      const formItemKey = `sub_form${uid}`; // Generate a unique key for each form item
                      return (
                        <Form
                          title={formItem.title}
                          key={`${formItemKey}_${formItemIndex}`}
                        >
                          {formItem.rows &&
                            formItem.rows.length > 0 &&
                            formItem.rows.map((row, rowIndex) => {
                              const rowKey = `row_${rowIndex}_${uid}`; // Generate a unique key for each row

                              return (
                                <InputRow
                                  key={rowKey}
                                  align={row.align}
                                  col={row.col}
                                  width={row.width}
                                  margin={row.margin}
                                >
                                  {row.controls &&
                                    row.controls.map(
                                      (control, controlIndex) => {
                                        const controlKey = `${formItemIndex}_${rowIndex}${controlIndex}_${control.name}_${uid}`; // Generate a unique key for each control
                                        return (
                                          control.visible == true && (
                                            <React.Fragment
                                              key={`row_${controlKey}`}
                                            >
                                              {(control.type === "input" ||
                                                control.type === "email" ||
                                                control.type ===
                                                  "password") && (
                                                <Input
                                                  styles={
                                                    componentType === "login"
                                                      ? { width: "60%" }
                                                      : null
                                                  }
                                                  isError={!control.isValid}
                                                  key={`input_${controlKey}`}
                                                  type={control.type}
                                                  value={control.value}
                                                  label={`${control.title}${
                                                    control.validation.required
                                                      ? "*"
                                                      : ""
                                                  }`}
                                                  name={control.name}
                                                  onChange={(e) => {
                                                    functions[
                                                      control.onChange
                                                    ].call(
                                                      this,
                                                      e,
                                                      formItemIndex
                                                    );
                                                  }}
                                                />
                                              )}
                                              {control.type === "checkbox" && (
                                                <CheckBox
                                                  isError={!control.isValid}
                                                  key={`input_${controlKey}`}
                                                  type={control.type}
                                                  label={control.title}
                                                  name={control.name}
                                                  onChange={(e) => {
                                                    functions[
                                                      control.onChange
                                                    ].call(
                                                      this,
                                                      e,
                                                      formItemIndex
                                                    );
                                                  }}
                                                />
                                              )}
                                              {control.type === "file" && (
                                                <FileInput
                                                  isError={!control.isValid}
                                                  key={`fileinput_${controlKey}`}
                                                  type={control.type}
                                                  label={control.title}
                                                  name={control.name}
                                                  onChange={(e) => {
                                                    functions[
                                                      control.onChange
                                                    ].call(
                                                      this,
                                                      e,
                                                      formItemIndex
                                                    );
                                                  }}
                                                />
                                              )}

                                              {control.type === "date" && (
                                                <Input
                                                  isError={!control.isValid}
                                                  key={`date_${controlKey}`}
                                                  type={control.type}
                                                  label={control.title}
                                                  name={control.name}
                                                  enabled={control.enabled}
                                                  value={control.value}
                                                  onChange={(e) => {
                                                    functions[
                                                      control.onChange
                                                    ].call(
                                                      this,
                                                      e,
                                                      formItemIndex
                                                    );
                                                  }}
                                                />
                                              )}
                                              {control.type === "select" && (
                                                <Select
                                                  value={control.value}
                                                  isError={!control.isValid}
                                                  fetch={control?.fetch}
                                                  frmIndex={formItemIndex}
                                                  multi={control?.multi}
                                                  rows={control?.rows}
                                                  key={`select_${controlKey}`}
                                                  options={control.options}
                                                  selectorText={
                                                    control.selector
                                                  }
                                                  title={control.title}
                                                  name={control.name}
                                                  onChange={
                                                    functions[control.onChange]
                                                  }
                                                />
                                              )}
                                              {control.type ===
                                                "multiselect" && (
                                                <MultiSelect
                                                  value={control.value}
                                                  isError={!control.isValid}
                                                  fetch={control?.fetch}
                                                  frmIndex={formItemIndex}
                                                  multi={control?.multi}
                                                  rows={control?.rows}
                                                  key={`multiselect_${controlKey}`}
                                                  options={control.options}
                                                  selectorText={
                                                    control.selector
                                                  }
                                                  title={control.title}
                                                  name={control.name}
                                                  onChange={
                                                    functions[control.onChange]
                                                  }
                                                />
                                              )}
                                              {control.type === "button" && (
                                                <Button
                                                  key={controlKey}
                                                  btnText={control.title}
                                                  btnType={control.btnType}
                                                  align={control.align}
                                                  onClick={
                                                    functions[control.onClick]
                                                  }
                                                />
                                              )}
                                              {control.type === "search" && (
                                                <Search
                                                  key={controlKey}
                                                  type={control.type}
                                                  label={control.title}
                                                  name={control.name}
                                                  onClick={
                                                    functions[control.onClick]
                                                  }
                                                />
                                              )}
                                              {control.type === "table" && (
                                                <Table
                                                  onEdit={
                                                    functions[control.onEdit]
                                                  }
                                                  showEdit={control?.showEdit}
                                                  name={control.name}
                                                  key={controlKey}
                                                  fetch={control.fetch}
                                                />
                                              )}
                                            </React.Fragment>
                                          )
                                        );
                                      }
                                    )}
                                </InputRow>
                              );
                            })}
                        </Form>
                      );
                    })}
                </div>
              );
            })}
        </div>
      )}
    </>
  );
}
