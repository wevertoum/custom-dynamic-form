import React, { useMemo } from "react";
import { Divider, Form, FormInstance, Typography } from "antd";
import SelectFieldType from "./SubCustomDynamicForms/SelectFieldType";
import "./CustomDynamicForm.css";

interface Props {
  form?: FormInstance;
  onFinish?: (values: any) => void;
  initialValues?: Models.CustomDynamicData;
  mode: "in_page" | "modal";
  customDataForm: Models.CustomDynamicData[];
  extraFieldSet?: React.ReactNode;
}

const CustomDynamicForm: React.FC<Props> = ({
  form,
  onFinish = () => {},
  initialValues: rawValues = {} as Models.CustomDynamicData,
  mode = "in_page",
  customDataForm,
  extraFieldSet = <></>,
}) => {
  const initialValues = useMemo(() => {
    return {
      ...rawValues,
    };
  }, [rawValues]);

  return (
    <>
      <Form
        className="group-form-dynamic"
        layout="vertical"
        form={form}
        onFinish={onFinish}
        initialValues={initialValues}
      >
        {customDataForm.map(({ group, fields }, indexGrupo) => (
          <div key={indexGrupo} className={`group-form-dynamic`}>
            <Divider orientation="left">
              <div className="divider">
                <Typography.Title level={5}>{group}</Typography.Title>
              </div>
            </Divider>
            {fields &&
              fields.map((field, key) => (
                <>
                  <SelectFieldType
                    form={form}
                    fieldIndex={key}
                    field={field}
                    mode={mode}
                  />
                </>
              ))}
          </div>
        ))}
        {extraFieldSet}
      </Form>
    </>
  );
};

export default CustomDynamicForm;
