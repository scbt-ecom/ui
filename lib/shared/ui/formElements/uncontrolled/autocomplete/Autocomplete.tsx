import { useMemo, useState } from 'react'
import { type SelectBaseProps, type SelectItemOption, Uncontrolled } from '..'
import { type UseQueryOptions, type UseQueryResult } from '@tanstack/react-query'

export type OptionData = { value: string; label: string }

export interface AutocompleteBaseProps
  extends Omit<
    SelectBaseProps<boolean>,
    'options' | 'inputValue' | 'onInputChange' | 'isSearchable' | 'isMulti' | 'value' | 'onChange'
  > {
  formatter?: (item: OptionData, index: number, array: OptionData[]) => SelectItemOption
  query: (query: string, options?: Partial<UseQueryOptions<OptionData[]>>) => UseQueryResult<OptionData[]>
  queryOptions?: Partial<UseQueryOptions<OptionData[]>>
  returnValue?: (value: SelectItemOption) => string
  value?: string
  onChange?: (value: string) => void
}

const defaultFormatter = (item: OptionData): SelectItemOption => ({
  value: item.value,
  label: item.value
})

export const AutocompleteBase = ({
  formatter = defaultFormatter,
  query,
  queryOptions,
  value,
  returnValue,
  onChange,
  ...props
}: AutocompleteBaseProps) => {
  const [search, setSearch] = useState<string>('')

  const { data } = query(search, {
    ...queryOptions,
    placeholderData: (prev) => prev,
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
