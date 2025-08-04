import { forwardRef, useState } from 'react'
import { type UseQueryOptions, type UseQueryResult } from '@tanstack/react-query'
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
  query: (query: string, options?: Partial<UseQueryOptions<TData[]>>) => UseQueryResult<TData[]>
  /**
   * Параметры запроса
   */
  queryOptions?: Partial<UseQueryOptions<TData[]>>
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
  /**
   * Стратегия управления полем
   * @variation `input-first` - источником правды является инпут
   * @variation `select-first` - источником правды является список
   * @default input-first
   */
  strategy?: 'input-first' | 'select-first'
  limit?: number
}

export const AutocompleteBase = forwardRef(
  <TData,>(
    {
      formatter,
      query,
      queryOptions: initialQueryOptions,
      value,
      displayValue,
      limit = 0,
      onChange,
      strategy = 'input-first',
      ...props
    }: AutocompleteBaseProps<TData>,
    ref: React.ForwardedRef<HTMLInputElement>
  ) => {
    const [search, setSearch] = useState<string>(value ?? '')

    const inputValue = strategy === 'input-first' ? (value ?? '') : search
    const onInputChange = strategy === 'input-first' ? onChange : setSearch

    const debounceSearch = useDebounceValue(inputValue, 100)

    const queryOptions: Partial<UseQueryOptions<TData[]>> = {
      enabled: limit > 0 ? debounceSearch.length >= limit : true,
      ...initialQueryOptions
    }

    const { data } = query(debounceSearch, queryOptions)

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
        empty={debounceSearch.length < limit ? `Введите более ${limit} символов для поиска` : undefined}
      />
    )
  }
) as <TData>(props: AutocompleteBaseProps<TData> & { ref: React.Ref<HTMLInputElement> }) => React.JSX.Element
