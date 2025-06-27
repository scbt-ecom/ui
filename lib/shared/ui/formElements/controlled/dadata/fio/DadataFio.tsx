import { type FieldValues } from 'react-hook-form'
import { type QueryClient } from '@tanstack/react-query'
import { AutocompleteControl, type AutocompleteControlProps } from '../../autocomplete'
import { type IDadataCacheOption } from '../types'
import { useDadataQueryFio } from './query'
import { type SelectItemOption } from '$/shared/ui'

const fioFormatter = (item: IDadataCacheOption<unknown>): SelectItemOption => ({
  value: item?.value || '',
  label: item?.value || ''
})

export type DadataFioProps<TFieldValues extends FieldValues> = Omit<
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
export const DadataFio = <TFieldValues extends FieldValues>({
  formatter = fioFormatter,
  dadataBaseUrl,
  queryClient,
  ...props
}: DadataFioProps<TFieldValues>) => {
  const queryFn = useDadataQueryFio

  return (
    <AutocompleteControl query={(query) => queryFn(query, dadataBaseUrl, {}, queryClient)} formatter={formatter} {...props} />
  )
}
