import { useQuery, type UseQueryOptions } from '@tanstack/react-query'
import { getDataByDadataType } from '$/shared/ui/formElements/dadataControl/autocompleteDadata/model/helpers'

type DadataTypes = 'fio' | 'country' | 'address' | 'auto' | 'party'

export interface FioResponse {
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

interface UseDadataQuery<Data> {
  query: string
  options?: Partial<UseQueryOptions<Data[]>>
  dadataType: DadataTypes
  dadataBaseUrl: string
}

export const useDadataQuery = <Data>({ query, options, dadataType = 'fio', dadataBaseUrl }: UseDadataQuery<Data>) => {
  return useQuery({
    queryKey: ['fio'],
    queryFn: async () => {
      const result = await fetch(dadataBaseUrl + dadataType, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ query })
      })

      const data = await result.json()

      const formattedData = getDataByDadataType(dadataType, data) as Data[]

      return formattedData
    },
    staleTime: 5 * 60 * 1000,
    gcTime: 0,
    ...options
  })
}
