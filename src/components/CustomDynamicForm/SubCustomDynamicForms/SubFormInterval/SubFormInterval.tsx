import { Form, Input, Slider } from "antd";
import * as React from 'react';
import defaultFormRules from "../../../../utils/defaultFormRules";
import { ExtraStringField } from "..";
import "./SubFormInterval.scss";

interface Props {
  field: Models.CustomDynamicData.Field;
  disableAll: boolean;
  key: number;
}
const SubFormInterval: React.FC<Props> = ({ field, disableAll, key }) => {
  return (
    <>
      <Form.Item
        key={key}
        label={field.label}
        name={field.name}
        rules={field.required ? defaultFormRules : undefined}
      >
        {disableAll ? (
          <Input disabled={disableAll} />
        ) : (
          <Slider min={field.min} max={field.max} disabled={disableAll} />
        )}
      </Form.Item>
      {field.extra_name && field.extra_label && (
        <ExtraStringField field={field} disableAll={disableAll} />
      )}
    </>
  );
};

export default SubFormInterval;
