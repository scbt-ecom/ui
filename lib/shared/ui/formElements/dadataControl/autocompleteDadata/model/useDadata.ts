'use client'

import * as React from 'react'
import { keepPreviousData, queryOptions, useQuery } from '@tanstack/react-query'
import { fetchSuggestions } from './api'
import { getOptionsByDadataType } from './helpers'
import type { TDadataType } from './types'
import { useDebounceValue } from '$/shared/hooks'

export const useDadata = <T>(dadataType: TDadataType, dadataBaseUrl: string) => {
  const [query, setQuery] = React.useState('')
  const debounceQuery = useDebounceValue(query, 100)

  const options = queryOptions({
    queryKey: ['dadata', dadataType, debounceQuery],
    queryFn: ({ signal }) => fetchSuggestions<T>(debounceQuery, dadataType, dadataBaseUrl, signal),
    enabled: !!debounceQuery,
    placeholderData: keepPreviousData,
    select: (suggestions) => getOptionsByDadataType(dadataType, suggestions)
  })

  const { data: suggestionsOptions = [], ...rest } = useQuery(options)

  return { setQuery, suggestionsOptions, debounceQuery, ...rest }
}
