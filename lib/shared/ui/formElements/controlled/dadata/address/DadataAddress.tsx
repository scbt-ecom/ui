import { type FieldValues } from 'react-hook-form'
import { type QueryClient } from '@tanstack/react-query'
import { AutocompleteControl, type AutocompleteControlProps } from '../../autocomplete'
import { type IDadataCacheOption } from '../types'
import { useDadataQueryAddress } from './query'
import { type AutocompleteItemOption } from '$/shared/ui'

const addressFormatter = (item: IDadataCacheOption<unknown>): AutocompleteItemOption<typeof item> => ({
  value: item?.value || '',
  label: item?.value || '',
  data: item
})

export type DadataAddressProps<TFieldValues extends FieldValues> = Omit<
  AutocompleteControlProps<TFieldValues, IDadataCacheOption<unknown>>,
  'query' | 'formatter'
> & {
  dadataBaseUrl: string
  formatter?: (item: IDadataCacheOption<unknown>) => AutocompleteItemOption<typeof item>
  queryClient?: QueryClient
}

/**
 * DADATA_BASE_CACHE_URL - нужно использовать этот url
 */
export const DadataAddress = <TFieldValues extends FieldValues>({
  formatter = addressFormatter,
  dadataBaseUrl,
  queryClient,
  ...props
}: DadataAddressProps<TFieldValues>) => {
  const queryFn = useDadataQueryAddress

  return (
    <AutocompleteControl
      query={(query, options) => queryFn(query, dadataBaseUrl, options, queryClient)}
      formatter={formatter}
      {...props}
    />
  )
}
