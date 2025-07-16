import { forwardRef } from 'react'
import { type UseQueryResult } from '@tanstack/react-query'
import type { AutocompleteItemOption } from './types'
import { useDebounceValue } from '$/shared/hooks'
import { Combobox, type ComboboxProps, type ComboboxValue } from '$/shared/ui'

export interface AutocompleteBaseProps<TData>
  extends Omit<
    ComboboxProps<false>,
    'options' | 'inputValue' | 'onInputChange' | 'searchable' | 'multiple' | 'value' | 'onChange'
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

    const onValueChange = (value: ComboboxValue<false>) => {
      if (!value) return

      if (onChange) onChange(displayValue ? displayValue(value) : value.label)
    }

    return (
      <Combobox
        {...props}
        ref={ref}
        options={options}
        searchable
        filterDisabled
        inputValue={value}
        onInputChange={onChange}
        multiple={false}
        displayValue={displayValue}
        externalHandlers={{
          changeHandler: (value) => {
            onValueChange(value)
            externalHandlers?.changeHandler?.(value)
          },
          ...externalHandlers
        }}
      />
    )
  }
) as <TData>(props: AutocompleteBaseProps<TData> & { ref: React.Ref<HTMLInputElement> }) => React.JSX.Element
