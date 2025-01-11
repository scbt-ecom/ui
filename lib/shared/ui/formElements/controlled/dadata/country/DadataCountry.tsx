import { type FieldValues } from 'react-hook-form'
import { AutocompleteControl, type AutocompleteControlProps } from '../../autocomplete'
import { useDadataQuery } from '../query'
import { DADATA_BASE_CACHE_URL } from '@/configs/api'
import { type SelectItemOption } from '$/exports/ui'

interface CountryResponse {
  value: string
  unrestricted_value: any
  data: {
    code: string
    alfa2: string
    alfa3: string
    name_short: string
    name: any
  }
}

const countryFormatter = (item: CountryResponse): SelectItemOption => {
  return {
    value: item.value,
    label: item.value
  }
}

export const DadataCountry = <TFieldValues extends FieldValues>({
  formatter = countryFormatter,
  ...props
}: Omit<AutocompleteControlProps<TFieldValues, CountryResponse>, 'query'>) => {
  const queryFn = useDadataQuery

  return (
    <AutocompleteControl
      query={(query, options) => queryFn(query, options, 'country', DADATA_BASE_CACHE_URL)}
      formatter={formatter}
      {...props}
    />
  )
}
