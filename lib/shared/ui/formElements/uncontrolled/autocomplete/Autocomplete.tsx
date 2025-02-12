import { forwardRef } from 'react'
import { type SelectBaseProps, type SelectItemOption, Uncontrolled } from '..'
import { type UseQueryResult } from '@tanstack/react-query'
import { useDebounceValue } from '$/shared/hooks'

export interface AutocompleteBaseProps<TData>
  extends Omit<
    SelectBaseProps<boolean>,
    'options' | 'inputValue' | 'onInputChange' | 'isSearchable' | 'isMulti' | 'value' | 'onChange'
  > {
  /**
   * Функция для запроса основанная на [@tanstack/query](https://tanstack.com/query/latest/docs/framework/react/overview)
   */
  query: (query: string) => UseQueryResult<TData[]>
  /**
   * Позволяет форматировать данные
   */
  formatter: (item: TData, index: number, array: TData[]) => SelectItemOption
  /**
   * Значение инпута
   */
  value?: string
  /**
   * Handler инпута
   */
  onChange?: (value: string) => void
}

export const AutocompleteBase = forwardRef(
  <TData,>(
    { formatter, query, value, displayValue, onChange, externalHandlers, ...props }: AutocompleteBaseProps<TData>,
    ref: React.ForwardedRef<HTMLInputElement>
  ) => {
    const debounceSearch = useDebounceValue(value || '', 100)

    const { data } = query(debounceSearch)

    const options = data ? data.map(formatter) : []

    const onValueChange = (value?: SelectItemOption | SelectItemOption[]) => {
      if (!value || Array.isArray(value)) return

      if (onChange) onChange(displayValue ? displayValue(value) : value.label)
    }

    return (
      <Uncontrolled.SelectBase
        {...props}
        ref={ref}
        options={options}
        filterDisabled
        inputValue={value}
        onInputChange={onChange}
        isSearchable
        isMulti={false}
        displayValue={displayValue}
        externalHandlers={{
          onChange: (value) => {
            onValueChange(value)
            if (externalHandlers?.onChange) externalHandlers?.onChange(value)
          },
          ...externalHandlers
        }}
      />
    )
  }
) as <TData>(props: AutocompleteBaseProps<TData> & { ref: React.Ref<HTMLInputElement> }) => React.JSX.Element
