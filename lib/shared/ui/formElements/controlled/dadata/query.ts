import { useQuery, type UseQueryOptions } from '@tanstack/react-query'
import { getDataByDadataType, type IDadataOptions } from '$/shared/ui/formElements/dadataControl/autocompleteDadata/model/helpers'

type DadataTypes = 'fio' | 'country' | 'address' | 'auto' | 'party'

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
