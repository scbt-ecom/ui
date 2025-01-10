import { useState } from 'react'
import { type UseQueryOptions, type UseQueryResult } from '@tanstack/react-query'
import { SelectBase, type SelectBaseProps, type SelectItemOption } from '../select'

export interface IAutocompleteProps<TData, TError = Error>
  extends Omit<SelectBaseProps, 'isMulti' | 'isSearchable' | 'filterOptionDisabled'> {
  queryHook?: (query: string, options?: Partial<UseQueryOptions<TData[], TError>>) => UseQueryResult<TData[], TError>
  queryOptions?: Partial<UseQueryOptions<TData[], TError>>
  formatter: (option: TData, index: number, array: TData[]) => SelectItemOption
  returnValue?: (option: SelectItemOption) => string
}

export const Autocomplete = <TData,>({ queryHook, formatter, queryOptions, ...props }: IAutocompleteProps<TData>) => {
  const [search, setSearch] = useState<string>('')

  const onInputChange = (value: string, { action }: { action: string }) => {
    if (action === 'input-change') {
      setSearch(value)
    }
  }

  const { data } = queryHook ? queryHook(search, queryOptions) : { data: [] }

  const options = data ? data.map(formatter) : []

  return (
    <SelectBase
      {...props}
      isSearchable
      // filterOptionDisabled
      options={options}
      inputValue={search}
      onInputChange={onInputChange}
    />
  )
}
