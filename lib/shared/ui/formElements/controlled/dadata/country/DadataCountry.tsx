import { type FieldValues } from 'react-hook-form'
import { type QueryClient } from '@tanstack/react-query'
import { AutocompleteControl, type AutocompleteControlProps } from '../../autocomplete'
import { type IDadataCountryOption } from '../types'
import { useDadataQueryCountry } from './query'
import { type AutocompleteItemOption } from '$/shared/ui'

const countryFormatter = (item: IDadataCountryOption): AutocompleteItemOption<typeof item> => ({
  value: item?.country_name || '',
  label: item?.country_name || '',
  data: item
})

export type DadataCountryProps<TFieldValues extends FieldValues> = Omit<
  AutocompleteControlProps<TFieldValues, IDadataCountryOption>,
  'query' | 'formatter'
> & {
  dadataBaseUrl: string
  formatter?: (item: IDadataCountryOption) => AutocompleteItemOption<typeof item>
  queryClient?: QueryClient
}

/**
 * DADATA_BASE_CONSTANTS_URL - нужно использовать этот url
 */
export const DadataCountry = <TFieldValues extends FieldValues>({
  formatter = countryFormatter,
  dadataBaseUrl,
  queryClient,
  ...props
}: DadataCountryProps<TFieldValues>) => {
  const queryFn = useDadataQueryCountry

  return (
    <AutocompleteControl query={(query) => queryFn(query, dadataBaseUrl, {}, queryClient)} formatter={formatter} {...props} />
  )
}
