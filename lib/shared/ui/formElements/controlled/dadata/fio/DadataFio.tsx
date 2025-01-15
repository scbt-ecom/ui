import { type FieldValues } from 'react-hook-form'
import { type AutocompleteControlProps } from '../../autocomplete'
import { type IDadataCacheOption } from '../types'
import { useDadataQueryFio } from './query'
import { Controlled, type SelectItemOption } from '$/shared/ui'

const fioFormatter = (item: IDadataCacheOption<unknown>): SelectItemOption => ({
  value: item?.value || '',
  label: item?.value || ''
})

/**
 * DADATA_BASE_CACHE_URL - нужно использовать этот url
 */
export const DadataFio = <TFieldValues extends FieldValues>({
  formatter = fioFormatter,
  dadataBaseUrl,
  ...props
}: Omit<AutocompleteControlProps<TFieldValues, IDadataCacheOption<unknown>>, 'query' | 'formatter'> & {
  dadataBaseUrl: string
  formatter?: (item: IDadataCacheOption<unknown>) => SelectItemOption
}) => {
  const queryFn = useDadataQueryFio

  return <Controlled.AutocompleteControl query={(query) => queryFn(query, dadataBaseUrl)} formatter={formatter} {...props} />
}
