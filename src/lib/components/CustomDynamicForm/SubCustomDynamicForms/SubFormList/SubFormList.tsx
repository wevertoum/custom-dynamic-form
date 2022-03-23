import { mdiDelete, mdiPlus } from "@mdi/js";
import { Button, Input, InputNumber, Select } from "antd";
import { Form } from "antd";
import React from "react";
import MaterialIcon from "lib/components/MaterialIcon";
import { ExtraStringField } from "..";
import "./SubFormList.css";

interface Props {
  field: Models.CustomDynamicData.Field;
  disableAll: boolean;
  key: number;
}
const SubFormList: React.FC<Props> = ({ field, disableAll, key }) => {
  return (
    <>
      <Form.List key={key} name={field.name}>
        {(fields, { add, remove }) => {
          return (
            <>
              {fields.map(({ name }, i) => (
                <div key={i} className="form-list-item">
                  <div className="list-item-input">
                    {field.formList.map(
                      ({ label, type, name, options, min, max }, j) => (
                        <div
                          key={j}
                          style={{
                            position: "relative",
                          }}
                          id={`select-select-${j}`}
                        >
                          {type === "string" && (
                            <Form.Item name={[name, name]} label={label}>
                              <Input
                                className="input-size"
                                autoComplete="off"
                                disabled={disableAll}
                              />
                            </Form.Item>
                          )}
                          {type === "select" && options && (
                            <Form.Item
                              key={j}
                              name={[name, name]}
                              label={label}
                            >
                              <Select
                                getPopupContainer={() =>
                                  document.getElementById(
                                    `select-select-${key}`
                                  )!!
                                }
                                placeholder="Selecione..."
                                disabled={disableAll}
                              >
                                {options.map((option, k) => (
                                  <Select.Option key={k} value={option.value}>
                                    {option.label}
                                  </Select.Option>
                                ))}
                              </Select>
                            </Form.Item>
                          )}
                          {type === "number" && (
                            <Form.Item
                              key={j}
                              name={[name, name]}
                              label={label}
                              rules={[
                                {
                                  type: "number",
                                  max: max,
                                  min: min,
                                  message: `Valor inválido! O valor deve estar entre ${min} e ${max}`,
                                },
                              ]}
                            >
                              <InputNumber
                                className="input-size"
                                disabled={disableAll}
                              />
                            </Form.Item>
                          )}
                        </div>
                      )
                    )}
                  </div>

                  {!disableAll && (
                    <Button
                      style={{ marginLeft: "10px" }}
                      danger
                      shape="circle"
                      icon={<MaterialIcon path={mdiDelete} />}
                      type="dashed"
                      onClick={() => remove(i)}
                    />
                  )}
                </div>
              ))}

              {!disableAll && (
                <Button
                  ghost
                  icon={<MaterialIcon path={mdiPlus} />}
                  type="primary"
                  onClick={add}
                  disabled={disableAll}
                >
                  Adicionar {field.label.toLowerCase()}
                </Button>
              )}
            </>
          );
        }}
      </Form.List>
      {field.extra_name && field.extra_label && (
        <ExtraStringField field={field} disableAll={disableAll} />
      )}
    </>
  );
};

export default SubFormList;
