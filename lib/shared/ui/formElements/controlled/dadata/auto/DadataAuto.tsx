import { type FieldValues } from 'react-hook-form'
import { type QueryClient } from '@tanstack/react-query'
import { AutocompleteControl, type AutocompleteControlProps } from '../../autocomplete'
import { type IDadataAutoOption } from '../types'
import { useDadataQueryAuto } from './query'
import { VITE_DADATA_BASE_CONSTANTS_URL } from '@/configs/api'
import { type AutocompleteItemOption } from '$/shared/ui'

const autoFormatter = (item: IDadataAutoOption): AutocompleteItemOption<typeof item> => ({
  value: item?.model_mark || '',
  label: item?.model_mark || '',
  data: item
})

export type DadataAutoProps<TFieldValues extends FieldValues> = Omit<
  AutocompleteControlProps<TFieldValues, IDadataAutoOption>,
  'query' | 'formatter'
> & {
  dadataBaseUrl: string
  formatter?: (item: IDadataAutoOption) => AutocompleteItemOption<typeof item>
  queryClient?: QueryClient
}

/**
 * DADATA_BASE_CONSTANTS_URL - нужно использовать этот url
 */
export const DadataAuto = <TFieldValues extends FieldValues>({
  formatter = autoFormatter,
  dadataBaseUrl = VITE_DADATA_BASE_CONSTANTS_URL,
  queryClient,
  ...props
}: DadataAutoProps<TFieldValues>) => {
  const queryFn = useDadataQueryAuto

  return (
    <AutocompleteControl
      query={(query, options) => queryFn(query, dadataBaseUrl, options, queryClient)}
      formatter={formatter}
      {...props}
    />
  )
}
