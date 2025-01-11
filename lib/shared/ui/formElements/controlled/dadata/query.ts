import { useQuery, type UseQueryOptions } from '@tanstack/react-query'
import { getDataByDadataType } from '$/shared/ui/formElements/dadataControl/autocompleteDadata/model/helpers'

type DadataTypes = 'fio' | 'country' | 'address' | 'auto' | 'party'

export const useDadataQuery = <Data>(
  query: string,
  options?: Partial<UseQueryOptions<Data[]>>,
  dadataType: DadataTypes = 'fio',
  dadataBaseUrl: string = ''
) => {
  return useQuery({
    queryKey: [dadataType],
    queryFn: async () => {
      const result = await fetch(`${dadataBaseUrl}/${dadataType}`, {
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
