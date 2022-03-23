import { Form, Input } from "antd";
import React from "react";
import defaultFormRules from "utils/defaultFormRules";

interface Props {
  field: Models.CustomDynamicData.Field;
  disableAll: boolean;
}
const ExtraStringField: React.FC<Props> = ({ field, disableAll }) => {
  return (
    <Form.Item
      name={field.extra_name}
      label={field.extra_label}
      rules={field.required ? defaultFormRules : undefined}
    >
      <Input.TextArea
        rows={2}
        className="input-size"
        placeholder={`Informe ${field.extra_label!.toLowerCase()}`}
        disabled={disableAll}
      />
    </Form.Item>
  );
};

export default ExtraStringField;
