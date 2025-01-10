import { useState } from 'react'
import { type SelectBaseProps, type SelectItemOption, Uncontrolled } from '..'
import { type UseQueryOptions, type UseQueryResult } from '@tanstack/react-query'

export interface AutocompleteBaseProps<TData>
  extends Omit<SelectBaseProps<boolean>, 'options' | 'inputValue' | 'onInputChange' | 'isSearchable' | 'isMulti'> {
  formatter: (item: TData, index: number, array: TData[]) => SelectItemOption
  query: (value: string, options?: Partial<UseQueryOptions<TData[]>>) => UseQueryResult<TData[]>
  queryOptions?: Partial<UseQueryOptions<TData[]>>
}

export const AutocompleteBase = <TData,>({ formatter, query, queryOptions, ...props }: AutocompleteBaseProps<TData>) => {
  const [search, setSearch] = useState<string>('')

  const { data } = query(search, {
    ...queryOptions,
    queryKey: [search]
  })

  const options = data ? data.map(formatter) : []

  return (
    <Uncontrolled.SelectBase
      {...props}
      options={options}
      filterDisabled
      inputValue={search}
      isSearchable
      isMulti={false}
      onInputChange={setSearch}
    />
  )
}
