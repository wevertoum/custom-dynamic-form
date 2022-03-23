import { Form } from "antd";
import { CustomDynamicForm } from "lib";
import React from "react";
import dataFormTest from "utils/dataFormTest";

interface Props {}
const RenderForm: React.FC<Props> = () => {
  const [form] = Form.useForm();
  return (
    <>
      <CustomDynamicForm
        customDataForm={dataFormTest}
        mode="modal"
        form={form}
      />
    </>
  );
};

export default RenderForm;
