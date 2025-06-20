import { type QueryClient, useQuery, type UseQueryOptions } from '@tanstack/react-query'
import { getDataByDadataType } from '../helpers'
import { type IDadataCacheOption } from '../types'

export const useDadataQueryFio = (
  query: string,
  dadataBaseUrl: string,
  options?: Partial<UseQueryOptions<IDadataCacheOption<unknown>[]>>,
  queryClient?: QueryClient
) =>
  useQuery(
    {
      queryKey: ['fio', query],
      queryFn: async () => {
        const result = await fetch(`${dadataBaseUrl}/fio`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ query })
        })

        const data = await result.json()
        return getDataByDadataType('fio', data) as IDadataCacheOption<unknown>[]
      },
      staleTime: 5 * 60 * 1000,
      gcTime: 0,
      placeholderData: (prev) => prev,
      enabled: Boolean(query),
      ...options
    },
    queryClient
  )
