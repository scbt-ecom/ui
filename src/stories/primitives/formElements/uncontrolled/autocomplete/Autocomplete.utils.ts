import { useQuery, type UseQueryOptions } from '@tanstack/react-query'

type DadataCacheTypes = 'fio' | 'country' | 'address'
type DadataConstantsTypes = 'auto' | 'party'
type DadataTypes = DadataCacheTypes | DadataConstantsTypes

interface FioResponse {
  value: string
  unrestricted_value: string
  data: {
    surname: string | null
    name: string | null
    patronymic: string | null
    gender: string
    source: any
    qc: string
  }
}

type DadataResponse = {
  suggestions: FioResponse[]
}

export const useGetFioSuggestQuery = (
  query: string,
  options?: Partial<UseQueryOptions<FioResponse[]>>,
  dadataType: DadataTypes = 'fio'
) =>
  useQuery({
    queryKey: ['fio', 'rustem', 'gay'],
    queryFn: async () => {
      const res = await fetch(import.meta.env.STORYBOOK_DADATA_CACHE_API + dadataType, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ query })
      })

      return ((await res.json()) as DadataResponse).suggestions
    },
    staleTime: 5 * 60 * 1000,
    gcTime: 0,
    ...options
  })
