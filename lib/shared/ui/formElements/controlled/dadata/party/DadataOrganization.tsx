import { type FieldValues } from 'react-hook-form'
import { type AutocompleteControlProps } from '../../autocomplete'
import { type IDadataOrganizationOption } from '../types'
import { useDadataQueryParty } from './query'
import { Controlled, type SelectItemOption } from '$/shared/ui'

const organizationFormatter = (item: IDadataOrganizationOption): SelectItemOption => ({
  value: item?.value || '',
  label: item?.value || ''
})

export type DadataOrganizationProps<TFieldValues extends FieldValues> = Omit<
  AutocompleteControlProps<TFieldValues, IDadataOrganizationOption>,
  'query' | 'formatter'
> & {
  dadataBaseUrl: string
  formatter?: (item: IDadataOrganizationOption) => SelectItemOption
}

/**
 * DADATA_BASE_CACHE_URL - нужно использовать этот url
 */
export const DadataOrganization = <TFieldValues extends FieldValues>({
  formatter = organizationFormatter,
  dadataBaseUrl,
  ...props
}: DadataOrganizationProps<TFieldValues>) => {
  const queryFn = useDadataQueryParty

  return <Controlled.AutocompleteControl query={(query) => queryFn(query, dadataBaseUrl)} formatter={formatter} {...props} />
}
