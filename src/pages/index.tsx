import { Button, Form } from "antd";
import CustomDynamicForm from "components/CustomDynamicForm";
import React from "react";
import dataFormTest from "utils/dataFormTest";

interface Props {}
const Home: React.FC<Props> = () => {
  const [form] = Form.useForm();
  return (
    <>
      <CustomDynamicForm
        onFinish={console.log}
        mode="modal"
        form={form}
        customDataForm={dataFormTest}
      />
      <Button onClick={form.submit}>submit</Button>
    </>
  );
};

export default Home;
