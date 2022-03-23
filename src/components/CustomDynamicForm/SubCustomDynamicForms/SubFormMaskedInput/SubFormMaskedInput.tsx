import { Form } from "antd";
import { MaskedInput } from "antd-mask-input";
import React from "react";
import { ExtraStringField } from "..";

interface Props {
  field: Models.CustomDynamicData.Field;
  disableAll: boolean;
  key: number;
}
const SubFormMaskedInput: React.FC<Props> = ({ field, disableAll, key }) => {
  return (
    <>
      <Form.Item
        key={key}
        name={field.name}
        label={field.label}
        rules={[
          {
            required: field.required,
            message: `Informe ${field.label.toLowerCase()}`,
          },
          {
            pattern: field.regex,
            message: `Informe um valor válido para ${field.label.toLowerCase()}`,
          },
        ]}
      >
        <MaskedInput
          className="input-size"
          disabled={disableAll}
          placeholder={`Informe ${field.label.toLowerCase()}`}
          autoComplete="off"
          mask={field.mask || ""}
        />
      </Form.Item>
      {field.extra_name && field.extra_label && (
        <ExtraStringField field={field} disableAll={disableAll} />
      )}
    </>
  );
};

export default SubFormMaskedInput;
