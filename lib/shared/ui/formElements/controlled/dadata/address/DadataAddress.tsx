import { type FieldValues } from 'react-hook-form'
import { type QueryClient } from '@tanstack/react-query'
import { type AutocompleteControlProps } from '../../autocomplete'
import { type IDadataCacheOption } from '../types'
import { useDadataQueryAddress } from './query'
import { Controlled, type SelectItemOption } from '$/shared/ui'

const addressFormatter = (item: IDadataCacheOption<unknown>): SelectItemOption => ({
  value: item?.value || '',
  label: item?.value || ''
})

export type DadataAddressProps<TFieldValues extends FieldValues> = Omit<
  AutocompleteControlProps<TFieldValues, IDadataCacheOption<unknown>>,
  'query' | 'formatter'
> & {
  dadataBaseUrl: string
  formatter?: (item: IDadataCacheOption<unknown>) => SelectItemOption
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
    <Controlled.AutocompleteControl
      query={(query) => queryFn(query, dadataBaseUrl, {}, queryClient)}
      formatter={formatter}
      {...props}
    />
  )
}
