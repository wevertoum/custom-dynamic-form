import { Form, Input } from 'antd'
import * as React from 'react'
import defaultFormRules from '../../../../utils/defaultFormRules'

interface Props {
  field: Models.CustomDynamicData.Field
  disableAll: boolean
  key: number
}
const SubFormTimePicker: React.FC<Props> = ({ field, disableAll, key }) => {
  return (
    <Form.Item
      key={key}
      name={field.name}
      label={field.label}
      rules={field.required ? defaultFormRules : undefined}
    >
      <Input className="time-picker" disabled={disableAll} type="time" />
    </Form.Item>
  )
}

export default SubFormTimePicker
