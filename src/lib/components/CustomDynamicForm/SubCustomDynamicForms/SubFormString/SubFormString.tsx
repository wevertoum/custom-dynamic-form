import { Form, Input } from "antd";
import React, { useMemo } from "react";
import defaultFormRules from "utils/defaultFormRules";

interface Props {
 field: Models.CustomDynamicData.Field;
  disableAll: boolean;
  key: number;
}
const SubFormString: React.FC<Props> = ({ field, disableAll, key }) => {
  const placeholderLabel = useMemo(() => {
    if (field.label.length > 0) {
      return `Informe ${field.label.toLowerCase()}`;
    } else {
      return "Digite aqui a informação";
    }
  }, [field.label]);

  return (
    <Form.Item
      key={key}
      name={field.name}
      label={field.label}
      rules={field.required ? defaultFormRules : undefined}
    >
      <Input.TextArea
        rows={field.rows || 2}
        className="input-size"
        placeholder={placeholderLabel}
        disabled={disableAll}
      />
    </Form.Item>
  );
};

export default SubFormString;
