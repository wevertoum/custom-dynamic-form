import { Form, FormInstance, Select } from "antd";
import * as React from 'react'
import defaultFormRules from "../../../../utils/defaultFormRules";
import { ExtraStringField } from "..";
import SelectFieldType from "../SelectFieldType";

interface Props {
  field: Models.CustomDynamicData.Field;
  disableAll: boolean;
  key: number;
  form?: FormInstance;
}
const SubFormSelect: React.FC<Props> = ({ field, disableAll, key, form }) => {
  const [currentOptionCondition, setCurrentOptionCondition] = React.useState<string>(
    () => form?.getFieldValue(field.name) || undefined
  );

  const currentCondition = React.useMemo(() => {
    if (field.conditions && currentOptionCondition) {
      return field.conditions[currentOptionCondition];
    } else {
      return undefined;
    }
  }, [field.conditions, currentOptionCondition]);

  return (
    <div key={key} style={{ position: "relative" }} id={`select-select-${key}`}>
      <Form.Item
        name={field.name}
        label={field.label}
        rules={field.required ? defaultFormRules : undefined}
      >
        <Select
          onChange={(value) => setCurrentOptionCondition(value as string)}
          getPopupContainer={() =>
            document.getElementById(`select-select-${key}`)!!
          }
          placeholder="Selecione..."
          disabled={disableAll}
        >
          {field.options &&
            field.options.map(({ label, value }) => (
              <Select.Option key={value} value={value}>
                {label}
              </Select.Option>
            ))}
        </Select>
      </Form.Item>

      {currentCondition &&
        currentCondition.map((field, key) => (
          <>
            <SelectFieldType
              mode={disableAll ? "in_page" : "modal"}
              form={form}
              fieldIndex={key}
              field={field}
            />
          </>
        ))}

      {field.extra_name && field.extra_label && (
        <ExtraStringField field={field} disableAll={disableAll} />
      )}
    </div>
  );
};

export default SubFormSelect;
