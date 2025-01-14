import { type FieldValues } from 'react-hook-form'
import { AutocompleteControl, type AutocompleteControlProps } from '../../autocomplete'
import { useDadataQueryAuto } from './query'
import { type SelectItemOption } from '$/exports/ui'
import { type OptionData } from '$/shared/ui/formElements/uncontrolled/autocomplete/Autocomplete'

const autoFormatter = (item: OptionData): SelectItemOption => ({
  value: item?.value || '',
  label: item?.value || ''
})

export const DadataAuto = <TFieldValues extends FieldValues>({
  formatter = autoFormatter,
  dadataBaseUrl,
  ...props
}: Omit<AutocompleteControlProps<TFieldValues>, 'query'> & {
  dadataBaseUrl: string
}) => {
  const queryFn = useDadataQueryAuto

  return (
    <AutocompleteControl
      query={(query, queryOptions) => queryFn(query, dadataBaseUrl, queryOptions)}
      formatter={formatter}
      {...props}
    />
  )
}
