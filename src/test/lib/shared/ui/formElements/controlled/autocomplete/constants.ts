import { useQuery, type UseQueryOptions } from '@tanstack/react-query'
import { object } from 'zod'
import type { DataAttributes } from '@/test/utils/types'
import { type Controlled } from '$/shared/ui'
import { zodValidators } from '$/shared/validation'

export const baseSchema = object({
  field: zodValidators.base.getSelectSchema()
})

export const optionalSchema = object({
  field: zodValidators.base.getSelectSchema({ required: false })
})

type AutocompleteProps = React.ComponentPropsWithoutRef<typeof Controlled.AutocompleteControl> & DataAttributes

const useQueryFn = (search: string, options?: Partial<UseQueryOptions<string[]>>) =>
  useQuery<string[]>({
    queryKey: [search],
    queryFn: async () => {
      return Array.from({ length: 20 }).map((_, index) => {
        return `Value ${index}`
      })
    },
    ...options
  })

export const autocompleteBaseProps: Omit<AutocompleteProps, 'control'> = {
  label: 'Pick a value',
  name: 'field',
  query: useQueryFn,
  formatter: (item: any) => {
    return {
      value: item,
      label: item
    }
  },
  'data-test-id': 'autocomplete'
}
