import * as React from 'react'

// require('./styles.less')

import { AutoComplete as AntAutoComplete, Input, Space } from 'antd'
import { debounce } from 'lodash'
import { mdiClose, mdiLoading, mdiMagnify } from '@mdi/js'
import Page, { buildCleanPage } from '../../utils/Page'
import MaterialIcon from '../MaterialIcon'
import deshumanize from '../../utils/deshumanize'

const CreateAutoComplete = function <T>({
  label,
  request,
  toOptions,
  limit = 5,
  adaptKey = (key) => key,
}: Search.AutoCompleteOptions<T>) {
  const cleanPage = buildCleanPage<T>()

  const AutoComplete: React.FC<Search.AutoCompleteProps<T>> = ({
    value: formControlValue = '',
    onChange = () => {},
    onSelect = () => {},
    onClear = () => {},
    disabled = false,
    allowClear = false,
    style = {},
    placeholder = '',
  }) => {
    const [page, setPage] = React.useState(cleanPage)
    const [keyword, setKeyword] = React.useState('')
    const [searching, setSearching] = React.useState(false)
    const [value, setValue] = React.useState<string | undefined>()

    const options = React.useMemo(() => {
      return page.results.map(toOptions).map(({ label, value }) => ({
        label,
        value: label,
        extra: value,
      }))
    }, [page.results])

    const _request = React.useCallback(async (keyword?: any) => {
      setSearching(true)
      setKeyword(keyword)
      try {
        const { data } = await request({
          ...adaptKey(keyword),
          limit,
        })
        const page = new Page(data)
        setPage(page as any)
      } catch {
        setPage(cleanPage)
        setKeyword('')
      } finally {
        setSearching(false)
      }
    }, [])

    const onSearchThrottle = debounce((key: any) => _request(key), 700)

    const trigerChange = React.useCallback(
      (_, { extra, value, label }) => {
        setValue(value)
        onSelect({ label, value: extra })
        onChange(extra)
      },
      [onChange, onSelect, setValue]
    )

    const loadInitialOptions = React.useCallback(async () => {
      await _request('')
      setValue(undefined)
    }, [_request])

    React.useEffect(() => {
      setValue(formControlValue)
    }, [formControlValue])

    return (
      <div
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
        }}
        id={`auw-${deshumanize(label)}`}
        className={`auto-complete-wrapper`}
      >
        <AntAutoComplete
          searchValue={formControlValue}
          style={{ width: '100%', ...style }}
          showSearch={false}
          showArrow={false}
          disabled={disabled}
          onFocus={loadInitialOptions}
          onSearch={onSearchThrottle}
          onSelect={trigerChange}
          options={options}
          getPopupContainer={() =>
            document.getElementById(`auw-${deshumanize(label)}`)!!
          }
          notFoundContent={
            <>
              <h4
                style={{
                  color: `var(--${
                    keyword.length === 0 ? 'info' : 'danger'
                  }-color)`,
                  fontWeight: 300,
                }}
              >
                <>
                  {searching ? (
                    <Space direction="horizontal" align="center">
                      <MaterialIcon path={mdiLoading} spin />
                      Buscando...
                    </Space>
                  ) : keyword.length === 0 ? (
                    `Selecione um(a) ${label}.`
                  ) : (
                    `Nenhum(a) ${label} foi encontrado(a).`
                  )}
                </>
              </h4>
            </>
          }
        >
          <Input
            addonAfter={
              <div
                onClick={
                  allowClear && value
                    ? () => {
                        onClear()
                      }
                    : () => {}
                }
              >
                <MaterialIcon
                  spin={searching}
                  path={
                    searching
                      ? mdiLoading
                      : allowClear && value
                      ? mdiClose
                      : mdiMagnify
                  }
                />
              </div>
            }
            placeholder={placeholder}
            value={value}
          />
        </AntAutoComplete>
      </div>
    )
  }

  return React.useMemo(() => AutoComplete, [])
}

export default CreateAutoComplete
