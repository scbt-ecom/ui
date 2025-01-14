import { type FieldValues } from 'react-hook-form'
import { AutocompleteControl, type AutocompleteControlProps } from '../../autocomplete'
import { useDadataQueryCountry } from './query'
import { type SelectItemOption } from '$/exports/ui'

const countryFormatter = (item: { value: string }): SelectItemOption => ({
  value: item?.value || '',
  label: item?.value || ''
})

export const DadataCountry = <TFieldValues extends FieldValues>({
  formatter = countryFormatter,
  dadataBaseUrl,
  ...props
}: Omit<AutocompleteControlProps<TFieldValues>, 'query'> & {
  dadataBaseUrl: string
}) => {
  const queryFn = useDadataQueryCountry

  return (
    <AutocompleteControl
      query={(query, queryOptions) => queryFn(query, dadataBaseUrl, queryOptions)}
      formatter={formatter}
      {...props}
    />
  )
}
