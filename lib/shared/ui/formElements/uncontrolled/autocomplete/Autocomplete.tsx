import { useMemo, useState } from 'react'
import { type SelectBaseProps, type SelectItemOption, Uncontrolled } from '..'
import { type UseQueryOptions, type UseQueryResult } from '@tanstack/react-query'
import { type DadataTypes } from '@/stories/primitives/formElements/uncontrolled/autocomplete/Autocomplete.utils'
import { type IDadataOptions } from '$/shared/ui/formElements/dadataControl/autocompleteDadata/model/helpers'

export interface AutocompleteBaseProps<T, TData extends IDadataOptions<T>>
  extends Omit<
    SelectBaseProps<boolean>,
    'options' | 'inputValue' | 'onInputChange' | 'isSearchable' | 'isMulti' | 'value' | 'onChange'
  > {
  formatter?: (item: TData, index: number, array: TData[]) => SelectItemOption
  query: (
    query: string,
    dadataType: DadataTypes,
    dadataBaseUrl: string,
    options?: Partial<UseQueryOptions<TData[]>>
  ) => UseQueryResult<TData[]>
  queryOptions?: Partial<UseQueryOptions<TData[]>>
  dadataBaseUrl: string
  dadataType: DadataTypes
  returnValue?: (value: SelectItemOption) => string
  value?: string
  onChange?: (value: string) => void
}

const defaultFormatter = <ItemData,>(item: ItemData): SelectItemOption => ({
  value: (item as { value: string }).value, // TODO: поправить типизацию
  label: (item as { label: string }).label
})

export const AutocompleteBase = <T, TData extends IDadataOptions<T>>({
  formatter = defaultFormatter,
  query,
  queryOptions,
  value,
  returnValue,
  onChange,
  dadataType,
  dadataBaseUrl,
  ...props
}: AutocompleteBaseProps<T, TData>) => {
  const [search, setSearch] = useState<string>('')

  const { data } = query(search, dadataType, dadataBaseUrl, {
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
