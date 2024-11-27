import { type FieldValues } from 'react-hook-form'
import { AutocompleteDadata } from './autocompleteDadata'
import { type IDadataProps } from './types'

export const DadataAuto = <T extends FieldValues>({ control, name, label, baseUrl, ...props }: IDadataProps<T>) => {
  return <AutocompleteDadata control={control} name={name} label={label} dadataType='auto' dadataBaseUrl={baseUrl} {...props} />
}
