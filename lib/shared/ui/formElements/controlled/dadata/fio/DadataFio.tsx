import { type FieldValues } from 'react-hook-form'
import { AutocompleteControl, type AutocompleteControlProps } from '../../autocomplete'
import { useDadataQueryFio } from './query'
import { type SelectItemOption } from '$/exports/ui'

const fioFormatter = (item: { value: string }): SelectItemOption => ({
  value: item?.value || '',
  label: item?.value || ''
})

export const DadataFio = <TFieldValues extends FieldValues>({
  formatter = fioFormatter,
  dadataBaseUrl,
  ...props
}: Omit<AutocompleteControlProps<TFieldValues>, 'query'> & {
  dadataBaseUrl: string
}) => {
  const queryFn = useDadataQueryFio

  return (
    <AutocompleteControl query={(query, options) => queryFn(query, dadataBaseUrl, options)} formatter={formatter} {...props} />
  )
}
