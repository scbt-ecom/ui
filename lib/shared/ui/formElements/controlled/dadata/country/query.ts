import { useQuery, type UseQueryOptions } from '@tanstack/react-query'
import { getDataByDadataType, getOptionsByDadataType } from '../helpers'
import type { OptionData } from '$/shared/ui/formElements/uncontrolled/autocomplete/Autocomplete'

export const useDadataQueryCountry = (query: string, dadataBaseUrl: string, options?: Partial<UseQueryOptions<OptionData[]>>) =>
  useQuery({
    queryKey: ['country', query],
    queryFn: async () => {
      const result = await fetch(`${dadataBaseUrl}/country`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ query })
      })
      const data = await result.json()
      const transformedData = getDataByDadataType('country', data)

      return getOptionsByDadataType('country', transformedData)
    },
    staleTime: 5 * 60 * 1000,
    gcTime: 0,
    ...options
  })
