import { useQuery, type UseQueryOptions } from '@tanstack/react-query'
import { getDataByDadataType } from '../helpers'
import { type IDadataOrganizationOption } from '../types'

export const useDadataQueryParty = (
  query: string,
  dadataBaseUrl: string,
  options?: Partial<UseQueryOptions<IDadataOrganizationOption[]>>
) =>
  useQuery({
    queryKey: ['party', query],
    queryFn: async () => {
      const result = await fetch(`${dadataBaseUrl}/party`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ query })
      })
      const data = await result.json()
      return getDataByDadataType('party', data) as IDadataOrganizationOption[]
    },
    staleTime: 5 * 60 * 1000,
    gcTime: 0,
    placeholderData: (prev) => prev,
    ...options
  })
