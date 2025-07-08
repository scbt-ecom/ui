import { forwardRef } from 'react'
import { type UseQueryResult } from '@tanstack/react-query'
import type { AutocompleteItemOption } from './types'
import { useDebounceValue } from '$/shared/hooks'
import { SelectBase, type SelectBaseProps } from '$/shared/ui'

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
  formatter: (item: TData, index: number, array: TData[]) => AutocompleteItemOption<TData>
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

    const onValueChange = (value?: AutocompleteItemOption<TData> | AutocompleteItemOption<TData>[]) => {
      if (!value || Array.isArray(value)) return

      if (onChange) onChange(displayValue ? displayValue(value) : value.label)
    }

    return (
      <SelectBase
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
