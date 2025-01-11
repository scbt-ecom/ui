import { type FieldValues } from 'react-hook-form'
import { AutocompleteControl, type AutocompleteControlProps } from '../../autocomplete'
import { useDadataQuery } from '../query'
import { DADATA_BASE_CONSTANTS_URL } from '@/configs/api'
import { type SelectItemOption } from '$/exports/ui'

interface AutoResponse {
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

const fioFormatter = (item: AutoResponse): SelectItemOption => ({
  value: item.value,
  label: item.value
})

export const DadataAuto = <TFieldValues extends FieldValues>({
  formatter = fioFormatter,
  ...props
}: Omit<AutocompleteControlProps<TFieldValues, AutoResponse>, 'query'>) => {
  const queryFn = useDadataQuery

  return (
    <AutocompleteControl
      query={(query, options) => queryFn(query, options, 'auto', DADATA_BASE_CONSTANTS_URL)}
      formatter={formatter}
      {...props}
    />
  )
}
