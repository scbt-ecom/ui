import { type FieldValues } from 'react-hook-form'
import { AutocompleteControl, type AutocompleteControlProps } from '../../autocomplete'
import { useDadataQueryAddress } from './query'
import { type SelectItemOption } from '$/exports/ui'

const addressFormatter = (item: { value: string }): SelectItemOption => ({
  value: item?.value || '',
  label: item?.value || ''
})

export const DadataAddress = <TFieldValues extends FieldValues>({
  formatter = addressFormatter,
  dadataBaseUrl,
  ...props
}: Omit<AutocompleteControlProps<TFieldValues>, 'query'> & {
  dadataBaseUrl: string
}) => {
  const queryFn = useDadataQueryAddress

  return (
    <AutocompleteControl
      query={(query, queryOptions) => queryFn(query, dadataBaseUrl, queryOptions)}
      formatter={formatter}
      {...props}
    />
  )
}
