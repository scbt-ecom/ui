import { useQuery, type UseQueryOptions } from '@tanstack/react-query'
import { DADATA_BASE_CACHE_URL } from '@/configs/api'

export type Data = {
  value: string
  unrestricted_value: string
  data: {
    surname: string
    name: string
    patronymic: string
    gender: string
    source: string
    qc: string
  }
}

export const useMockQuery = (query: string, options?: Partial<UseQueryOptions<Data[], Error>>) =>
  useQuery<Data[], Error>({
    queryKey: ['mock'],
    queryFn: async () => {
      const data = await fetch(`${DADATA_BASE_CACHE_URL}/fio`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({ query })
      }).then((res) => res.json())

      return data.suggestions
    },
    staleTime: 5 * 60 * 1000,
    // enabled: Boolean(query),
    ...options
  })
