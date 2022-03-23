import { FormInstance } from "antd";
import * as React from 'react';
import {
  SubFormDatePicker,
  SubFormNumber,
  SubFormSelect,
  SubFormBoolean,
  SubFormInterval,
  SubFormList,
  SubFormString,
  SubFormMultiCheck,
} from "..";
import SubFormMaskedInput from "../SubFormMaskedInput";

interface Props {
  field: Models.CustomDynamicData.Field;
  mode: "in_page" | "modal";
  fieldIndex: number;
  form?: FormInstance;
}
const SelectFieldType: React.FC<Props> = ({
  field,
  mode = "in_page",
  fieldIndex,
  form,
}) => {
  return (
    <>
      <div key={fieldIndex}>
        {field.type === "string" && (
          <SubFormString
            key={fieldIndex}
            disableAll={mode === "in_page"}
            field={field}
          />
        )}
        {field.type === "select" && (
          <SubFormSelect
            form={form}
            key={fieldIndex}
            disableAll={mode === "in_page"}
            field={field}
          />
        )}
        {field.type === "interval" && (
          <SubFormInterval
            key={fieldIndex}
            disableAll={mode === "in_page"}
            field={field}
          />
        )}
        {field.type === "number" && (
          <SubFormNumber
            key={fieldIndex}
            disableAll={mode === "in_page"}
            field={field}
          />
        )}
        {field.type === "boolean" && (
          <SubFormBoolean
            key={fieldIndex}
            disableAll={mode === "in_page"}
            field={field}
          />
        )}
        {field.type === "date" && (
          <SubFormDatePicker
            key={fieldIndex}
            disableAll={mode === "in_page"}
            field={field}
          />
        )}
        {field.type === "list" && (
          <SubFormList
            key={fieldIndex}
            disableAll={mode === "in_page"}
            field={field}
          />
        )}
        {field.type === "multicheck" && (
          <SubFormMultiCheck
            key={fieldIndex}
            disableAll={mode === "in_page"}
            field={field}
          />
        )}
        {field.type === "masked" && (
          <SubFormMaskedInput
            key={fieldIndex}
            disableAll={mode === "in_page"}
            field={field}
          />
        )}
      </div>
    </>
  );
};

export default SelectFieldType;
