import { type FieldValues } from 'react-hook-form'
import { type QueryClient } from '@tanstack/react-query'
import { AutocompleteControl, type AutocompleteControlProps } from '../../autocomplete'
import { type IDadataCountryOption } from '../types'
import { useDadataQueryCountry } from './query'
import { VITE_DADATA_BASE_CONSTANTS_URL } from '@/configs/api'
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
  dadataBaseUrl = VITE_DADATA_BASE_CONSTANTS_URL,
  queryClient,
  ...props
}: DadataCountryProps<TFieldValues>) => {
  const queryFn = useDadataQueryCountry

  return (
    <AutocompleteControl
      query={(query, options) => queryFn(query, dadataBaseUrl, options, queryClient)}
      formatter={formatter}
      {...props}
    />
  )
}
