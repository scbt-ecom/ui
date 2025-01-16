import { useQuery, type UseQueryOptions } from '@tanstack/react-query'
import { getDataByDadataType } from '../helpers'
import { type IDadataCacheOption } from '../types'

export const useDadataQueryAddress = (
  query: string,
  dadataBaseUrl: string,
  options?: Partial<UseQueryOptions<IDadataCacheOption<unknown>[]>>
) =>
  useQuery({
    queryKey: ['address', query],
    queryFn: async () => {
      const result = await fetch(`${dadataBaseUrl}/address`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ query })
      })
      const data = await result.json()
      return getDataByDadataType('address', data) as IDadataCacheOption<unknown>[]
    },
    staleTime: 5 * 60 * 1000,
    gcTime: 0,
    placeholderData: (prev) => prev,
    enabled: Boolean(query),
    ...options
  })
