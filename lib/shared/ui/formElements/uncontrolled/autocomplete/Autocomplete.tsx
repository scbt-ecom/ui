import { useMemo, useState } from 'react'
import { type SelectBaseProps, type SelectItemOption, Uncontrolled } from '..'
import { type UseQueryResult } from '@tanstack/react-query'
import { useDebounceValue } from '../../../../hooks'

export interface AutocompleteBaseProps<TData>
  extends Omit<
    SelectBaseProps<boolean>,
    'options' | 'inputValue' | 'onInputChange' | 'isSearchable' | 'isMulti' | 'value' | 'onChange'
  > {
  /**
   * Запрос который должен получать options (пишем на tanstack/query)
   */
  query: (query: string) => UseQueryResult<TData[]>
  /**
   * Позволяет форматировать данные
   */
  formatter: (item: TData, index: number, array: TData[]) => SelectItemOption
  /**
   * Позволяет управлять выходным значением
   */
  returnValue?: (value: SelectItemOption) => string
  /**
   * Значение инпута
   */
  value?: string
  /**
   * Handler инпута
   */
  onChange?: (value: string) => void
}

export const AutocompleteBase = <TData,>({
  formatter,
  query,
  value,
  returnValue,
  onChange,
  ...props
}: AutocompleteBaseProps<TData>) => {
  const [search, setSearch] = useState<string>('')
  const debounceSearch = useDebounceValue(search, 100)

  const { data } = query(debounceSearch)

  const options = data ? data.map(formatter) : []

  const onValueChange = (value?: SelectItemOption | SelectItemOption[]) => {
    if (!value || Array.isArray(value)) return

    if (onChange) {
      onChange(returnValue ? returnValue(value) : value.value)
    }
  }

  const selected = useMemo<SelectItemOption | undefined>(() => {
    return options.find((option) => (returnValue ? returnValue(option) : option.value === value))
  }, [options, returnValue, value])

  return (
    <Uncontrolled.SelectBase
      {...props}
      options={options}
      filterDisabled
      onChange={onValueChange}
      value={selected}
      inputValue={search}
      isSearchable
      isMulti={false}
      onInputChange={setSearch}
    />
  )
}
