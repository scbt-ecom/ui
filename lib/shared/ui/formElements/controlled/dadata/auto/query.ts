import { useQuery, type UseQueryOptions } from '@tanstack/react-query'
import { getDataByDadataType } from '../helpers'
import { type IDadataAutoOption } from '../types'

export const useDadataQueryAuto = (
  query: string,
  dadataBaseUrl: string,
  options?: Partial<UseQueryOptions<IDadataAutoOption[]>>
) =>
  useQuery({
    queryKey: ['auto', query],
    queryFn: async () => {
      const result = await fetch(`${dadataBaseUrl}/auto`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ query })
      })
      const data = await result.json()
      return getDataByDadataType('auto', data) as IDadataAutoOption[]
    },
    staleTime: 5 * 60 * 1000,
    gcTime: 0,
    placeholderData: (prev) => prev,
    enabled: Boolean(query),
    ...options
  })
