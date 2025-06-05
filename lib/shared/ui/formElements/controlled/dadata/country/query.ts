import { type QueryClient, useQuery, type UseQueryOptions } from '@tanstack/react-query'
import { getDataByDadataType } from '../helpers'
import { type IDadataCountryOption } from '../types'

export const useDadataQueryCountry = (
  query: string,
  dadataBaseUrl: string,
  options?: Partial<UseQueryOptions<IDadataCountryOption[]>>,
  queryClient?: QueryClient
) =>
  useQuery(
    {
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
        return getDataByDadataType('country', data) as IDadataCountryOption[]
      },
      staleTime: 5 * 60 * 1000,
      gcTime: 0,
      placeholderData: (prev) => prev,
      enabled: Boolean(query),
      ...options
    },
    queryClient
  )
