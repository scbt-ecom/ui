import { type FieldValues } from 'react-hook-form'
import { type AutocompleteControlProps } from '../../autocomplete'
import { type IDadataCountryOption } from '../types'
import { useDadataQueryCountry } from './query'
import { Controlled, type SelectItemOption } from '$/shared/ui'

const countryFormatter = (item: IDadataCountryOption): SelectItemOption => ({
  value: item?.country_name || '',
  label: item?.country_name || ''
})

/**
 * DADATA_BASE_CONSTANTS_URL - нужно использовать этот url
 */
export const DadataCountry = <TFieldValues extends FieldValues>({
  formatter = countryFormatter,
  dadataBaseUrl,
  ...props
}: Omit<AutocompleteControlProps<TFieldValues, IDadataCountryOption>, 'query' | 'formatter'> & {
  dadataBaseUrl: string
  formatter?: (item: IDadataCountryOption) => SelectItemOption
}) => {
  const queryFn = useDadataQueryCountry

  return <Controlled.AutocompleteControl query={(query) => queryFn(query, dadataBaseUrl)} formatter={formatter} {...props} />
}
