'use client'

import * as React from 'react'
import { fetchSuggestions } from './api'
import { getOptionsByDadataType } from './helpers'
import type { TDadataOption, TDadataType } from './types'
import { useDebounceValue } from '$/shared/hooks'

export const useDadata = (dadataType: TDadataType, dadataBaseUrl: string) => {
  const [query, setQuery] = React.useState('')
  const [suggestionsOptions, setSuggestionsOptions] = React.useState<TDadataOption[] | null>(null)
  const debounceQuery = useDebounceValue(query, 300)

  React.useEffect(() => {
    if (debounceQuery) {
      const handleSearch = async () => {
        const suggestions = await fetchSuggestions(debounceQuery, dadataType, dadataBaseUrl)
        setSuggestionsOptions(getOptionsByDadataType(dadataType, suggestions))
      }
      handleSearch()
    }
  }, [debounceQuery, dadataType, dadataBaseUrl])

  return { setQuery, suggestionsOptions, debounceQuery }
}
