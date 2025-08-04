import { type FieldValues } from 'react-hook-form'
import { type QueryClient } from '@tanstack/react-query'
import { AutocompleteControl, type AutocompleteControlProps } from '../../autocomplete'
import { type IDadataOrganizationOption } from '../types'
import { useDadataQueryParty } from './query'
import { type AutocompleteItemOption } from '$/shared/ui'

const organizationFormatter = (item: IDadataOrganizationOption): AutocompleteItemOption<typeof item> => ({
  value: item?.value || '',
  label: item?.value || ''
})

export type DadataOrganizationProps<TFieldValues extends FieldValues> = Omit<
  AutocompleteControlProps<TFieldValues, IDadataOrganizationOption>,
  'query' | 'formatter'
> & {
  dadataBaseUrl: string
  formatter?: (item: IDadataOrganizationOption) => AutocompleteItemOption<typeof item>
  queryClient?: QueryClient
}

/**
 * DADATA_BASE_CACHE_URL - нужно использовать этот url
 */
export const DadataOrganization = <TFieldValues extends FieldValues>({
  formatter = organizationFormatter,
  dadataBaseUrl,
  queryClient,
  ...props
}: DadataOrganizationProps<TFieldValues>) => {
  const queryFn = useDadataQueryParty

  return (
    <AutocompleteControl
      query={(query, option) => queryFn(query, dadataBaseUrl, option, queryClient)}
      formatter={formatter}
      {...props}
    />
  )
}
