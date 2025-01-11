import { type FieldValues } from 'react-hook-form'
import { AutocompleteControl, type AutocompleteControlProps } from '../../autocomplete'
import { useDadataQuery } from '../query'
import { DADATA_BASE_CONSTANTS_URL } from '@/configs/api'
import { type SelectItemOption } from '$/exports/ui'

interface PartyResponse {
  value: string
  unrestricted_value: string
  data: {
    surname: string | null
    name: string | null
    patronymic: string | null
    gender: string
    source: any
    qc: string
  }
}

export const fioFormatter = (item: PartyResponse): SelectItemOption => ({
  value: item.value,
  label: item.value
})

export const DadataParty = <TFieldValues extends FieldValues>({
  formatter = fioFormatter,
  ...props
}: Omit<AutocompleteControlProps<TFieldValues, PartyResponse>, 'query'>) => {
  const queryFn = useDadataQuery

  return (
    <AutocompleteControl
      query={(query, options) => queryFn(query, options, 'party', DADATA_BASE_CONSTANTS_URL)}
      formatter={formatter}
      {...props}
    />
  )
}
