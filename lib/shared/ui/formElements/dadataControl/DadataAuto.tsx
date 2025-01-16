import type { FieldValues } from 'react-hook-form'
import { AutocompleteDadata } from './autocompleteDadata'
import type { IDadataProps } from './types'

/**
 * @deprecated For better performance use `Controlled.DadataAuto` instead.
 */
export const DadataAuto = <T extends FieldValues>({ ...props }: IDadataProps<T>) => {
  return <AutocompleteDadata dadataType='auto' {...props} />
}
