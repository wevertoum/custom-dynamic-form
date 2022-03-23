import { Form, FormInstance, Radio } from "antd";
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
const SubFormBoolean: React.FC<Props> = ({ field, disableAll, key, form }) => {
  const [currentOptionCondition, setCurrentOptionCondition] = React.useState<
    "false" | "true"
  >(() => form?.getFieldValue(field.name) || undefined);

  const currentCondition = React.useMemo(() => {
    if (field.conditions && currentOptionCondition) {
      return field.conditions[currentOptionCondition];
    } else {
      return undefined;
    }
  }, [field, currentOptionCondition]);

  return (
    <>
      <Form.Item
        key={key}
        name={field.name}
        label={field.label}
        rules={field.required ? defaultFormRules : undefined}
      >
        <Radio.Group
          buttonStyle="solid"
          optionType="button"
          disabled={disableAll}
          onChange={(e) => {
            setCurrentOptionCondition(e.target.value);
          }}
        >
          <Radio.Button value={"true"} disabled={disableAll}>
            Sim
          </Radio.Button>
          <Radio.Button value={"false"} disabled={disableAll}>
            Não
          </Radio.Button>
        </Radio.Group>
      </Form.Item>

      {field.extra_name && field.extra_label && (
        <ExtraStringField field={field} disableAll={disableAll} />
      )}

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
    </>
  );
};

export default SubFormBoolean;
