import { useQuery, type UseQueryOptions } from '@tanstack/react-query'
import { getDataByDadataType, type IDadataOptions } from '$/shared/ui/formElements/dadataControl/autocompleteDadata/model/helpers'

export type DadataTypes = 'fio' | 'country' | 'address' | 'auto' | 'party'

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

export const useDadataQuery = <T>(
  query: string,
  dadataTypes: DadataTypes,
  dadataBaseUrl: string,
  options?: Partial<UseQueryOptions<IDadataOptions<T>[]>>
) =>
  useQuery({
    queryKey: [dadataTypes],
    queryFn: async () => {
      const result = await fetch(`${dadataBaseUrl}/${dadataTypes}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ query })
      })

      const data = await result.json()

      const formattedData = getDataByDadataType(dadataTypes, data) as unknown as IDadataOptions<T>[]

      return formattedData
    },
    staleTime: 5 * 60 * 1000,
    gcTime: 0,
    ...options
  })

// interface UseDadataQuery<Data> {
//   query: string
//   options?: Partial<UseQueryOptions<Data[]>>
//   dadataType: DadataTypes
//   dadataBaseUrl: string
// }
//
// export const useDadataQuery = <Data>({ query, options, dadataType = 'fio', dadataBaseUrl }: UseDadataQuery<Data>) => {
//   return useQuery({
//     queryKey: [dadataType],
//     queryFn: async () => {
//       const result = await fetch(dadataBaseUrl + dadataType, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ query })
//       })
//
//       const data = await result.json()
//
//       const formattedData = getDataByDadataType(dadataType, data) as Data[]
//
//       return formattedData
//     },
//     staleTime: 5 * 60 * 1000,
//     gcTime: 0,
//     ...options
//   })
// }
