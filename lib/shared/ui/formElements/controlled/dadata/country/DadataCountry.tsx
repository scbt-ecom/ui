import { type FieldValues } from 'react-hook-form'
import { AutocompleteControl, type AutocompleteControlProps } from '../../autocomplete'
import { useDadataQuery } from '../query'
import { type SelectItemOption } from '$/exports/ui'
import type { IDadataOptions } from '$/shared/ui/formElements/dadataControl/autocompleteDadata/model/helpers'

const countryFormatter = <T,>(item: IDadataOptions<T>): SelectItemOption => ({
  value: item.value,
  label: item.value
})

export const DadataCountry = <TFieldValues extends FieldValues, T, TData extends IDadataOptions<T>>({
  formatter = countryFormatter,
  ...props
}: Omit<AutocompleteControlProps<TFieldValues, T, TData>, 'query' | 'dadataType'>) => {
  const queryFn = useDadataQuery

  return (
    <AutocompleteControl
      query={(query, options, dadataBaseUrl) => queryFn(query, 'country', dadataBaseUrl, options)}
      formatter={formatter}
      {...props}
    />
  )
}
