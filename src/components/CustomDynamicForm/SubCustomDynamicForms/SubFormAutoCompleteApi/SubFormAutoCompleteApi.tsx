import * as React from 'react'
import { Form, FormInstance } from 'antd'
import { ExtraStringField } from '..'
import CreateAutoComplete from '../../../CreateAutoComplete/CreateAutoComplete'
import { useGetAutoComplete } from '../../../../hooks/getAutoComplete'
import defaultFormRules from '../../../../utils/defaultFormRules'

interface Props {
  field: Models.CustomDynamicData.Field
  disableAll: boolean
  key: number
  form?: FormInstance
}
const SubFormAutoCompleteApi: React.FC<Props> = ({
  field,
  disableAll,
  key,
}) => {
  const CustomSearch = CreateAutoComplete({
    label: field.label,
    request: useGetAutoComplete(field.request!, field.request_token!),
    toOptions: ({
      [field.request_key_value!]: value,
      [field.request_key_label!]: label,
      [field.request_key_extra_label!]: labelExtra,
    }: any) => ({
      label: labelExtra ? `${label} - ${labelExtra}` : label,
      value,
    }),
    adaptKey: (value) => ({ [field.request_key_label!]: value }),
  })

  return (
    <div key={key} style={{ position: 'relative' }} id={`select-select-${key}`}>
      <Form.Item
        name={field.name}
        label={field.label}
        rules={field.required ? defaultFormRules : undefined}
      >
        <CustomSearch />
      </Form.Item>

      {field.extra_name && field.extra_label && (
        <ExtraStringField field={field} disableAll={disableAll} />
      )}
    </div>
  )
}

export default SubFormAutoCompleteApi
