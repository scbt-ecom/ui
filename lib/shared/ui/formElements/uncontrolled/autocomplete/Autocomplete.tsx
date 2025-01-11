import { useMemo, useState } from 'react'
import { type SelectBaseProps, type SelectItemOption, Uncontrolled } from '..'
import { type UseQueryOptions, type UseQueryResult } from '@tanstack/react-query'

export interface AutocompleteBaseProps<TData>
  extends Omit<
    SelectBaseProps<boolean>,
    'options' | 'inputValue' | 'onInputChange' | 'isSearchable' | 'isMulti' | 'value' | 'onChange'
  > {
  formatter?: (item: TData, index: number, array: TData[]) => SelectItemOption
  query: (value: string, options?: Partial<UseQueryOptions<TData[]>>) => UseQueryResult<TData[]>
  queryOptions?: Partial<UseQueryOptions<TData[]>>
  dadataBaseUrl: string
  returnValue?: (value: SelectItemOption) => string
  value?: string
  onChange?: (value: string) => void
}

const defaultFormatter = <ItemData,>(item: ItemData): SelectItemOption => ({
  value: (item as { value: string }).value, // TODO: поправить типизацию
  label: (item as { label: string }).label
})

export const AutocompleteBase = <TData,>({
  formatter = defaultFormatter,
  query,
  queryOptions,
  value,
  returnValue,
  onChange,
  ...props
}: AutocompleteBaseProps<TData>) => {
  const [search, setSearch] = useState<string>('')

  const { data } = query(search, {
    ...queryOptions,
    queryKey: [search]
  })

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
