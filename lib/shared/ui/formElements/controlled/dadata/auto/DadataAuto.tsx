import { type FieldValues } from 'react-hook-form'
import { type AutocompleteControlProps } from '../../autocomplete'
import { type IDadataAutoOption } from '../types'
import { useDadataQueryAuto } from './query'
import { Controlled, type SelectItemOption } from '$/shared/ui'

const autoFormatter = (item: IDadataAutoOption): SelectItemOption => ({
  value: item?.model_mark || '',
  label: item?.model_mark || ''
})

export type DadataAutoProps<TFieldValues extends FieldValues> = Omit<
  AutocompleteControlProps<TFieldValues, IDadataAutoOption>,
  'query' | 'formatter'
> & {
  dadataBaseUrl: string
  formatter?: (item: IDadataAutoOption) => SelectItemOption
}

/**
 * DADATA_BASE_CONSTANTS_URL - нужно использовать этот url
 */
export const DadataAuto = <TFieldValues extends FieldValues>({
  formatter = autoFormatter,
  dadataBaseUrl,
  ...props
}: DadataAutoProps<TFieldValues>) => {
  const queryFn = useDadataQueryAuto

  return <Controlled.AutocompleteControl query={(query) => queryFn(query, dadataBaseUrl)} formatter={formatter} {...props} />
}
