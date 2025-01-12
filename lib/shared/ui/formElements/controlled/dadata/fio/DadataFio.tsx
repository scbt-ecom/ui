import { type FieldValues } from 'react-hook-form'
import { AutocompleteControl, type AutocompleteControlProps } from '../../autocomplete'
import { useDadataQuery } from '../query'
import { type SelectItemOption } from '$/exports/ui'
import type { IDadataOptions } from '$/shared/ui/formElements/dadataControl/autocompleteDadata/model/helpers'

const fioFormatter = <T,>(item: IDadataOptions<T>): SelectItemOption => ({
  value: item.value,
  label: item.value
})

export const DadataFio = <TFieldValues extends FieldValues, T, TData extends IDadataOptions<T>>({
  formatter = fioFormatter,
  ...props
}: Omit<AutocompleteControlProps<TFieldValues, T, TData>, 'query' | 'dadataType'>) => {
  return (
    <AutocompleteControl
      {/* eslint-disable-next-line react-hooks/rules-of-hooks */}
      query={(query, options, dadataBaseUrl) => useDadataQuery(query, 'fio', dadataBaseUrl, options)}
      formatter={formatter}
      {...props}
    />
  )
}
