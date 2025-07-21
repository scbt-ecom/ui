import { forwardRef, useState } from 'react'
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
  strategy?: 'input-first' | 'select-first'
}

export const AutocompleteBase = forwardRef(
  <TData,>(
    { formatter, query, value, displayValue, onChange, strategy = 'input-first', ...props }: AutocompleteBaseProps<TData>,
    ref: React.ForwardedRef<HTMLInputElement>
  ) => {
    const [search, setSearch] = useState<string>(value ?? '')

    const inputValue = strategy === 'input-first' ? (value ?? '') : search
    const onInputChange = strategy === 'input-first' ? onChange : setSearch

    const debounceSearch = useDebounceValue(inputValue, 100)

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
        inputValue={inputValue}
        onInputChange={onInputChange}
        multiple={false}
        displayValue={displayValue}
        onChange={onValueChange}
      />
    )
  }
) as <TData>(props: AutocompleteBaseProps<TData> & { ref: React.Ref<HTMLInputElement> }) => React.JSX.Element
