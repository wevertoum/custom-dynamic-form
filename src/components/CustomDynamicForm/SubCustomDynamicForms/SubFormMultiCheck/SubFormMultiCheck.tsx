import { Checkbox, Col, Form, Row } from 'antd'
import * as React from 'react'
import useWindowSize from '../../../../hooks/useWindowSize'
import { collapseRule } from '../../../../utils/constants'
import defaultFormRules from '../../../../utils/defaultFormRules'
import ExtraStringField from '../ExtraStringField'

interface Props {
  field: Models.CustomDynamicData.Field
  disableAll: boolean
  key: number
}
const SubFormMultiCheck: React.FC<Props> = ({ field, disableAll, key }) => {
  const [width] = useWindowSize()
  const collapsed = React.useMemo(() => width < collapseRule, [width])
  return (
    <div key={key} style={{ position: 'relative' }} id={`select-select-${key}`}>
      <Form.Item
        name={field.name}
        label={field.label}
        rules={[
          {
            type: 'array',
            max: field.max,
            min: field.min,
            message: `Selecione até ${field.max} opções.`,
          },
          ...(field.required ? defaultFormRules : []),
        ]}
      >
        {field.options && (
          <Checkbox.Group>
            <Row gutter={[16, 16]}>
              {field.options.map((option, index) => (
                <Col span={!collapsed ? 12 : 24} key={index}>
                  <Checkbox
                    disabled={disableAll}
                    value={option.value}
                    key={index}
                  >
                    {option.label}
                  </Checkbox>
                </Col>
              ))}
            </Row>
          </Checkbox.Group>
        )}
      </Form.Item>
      {field.extra_name && field.extra_label && (
        <ExtraStringField field={field} disableAll={disableAll} />
      )}
    </div>
  )
}

export default SubFormMultiCheck
