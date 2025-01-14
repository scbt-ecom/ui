import type { FieldValues } from 'react-hook-form'
import { AutocompleteDadata } from './autocompleteDadata'
import type { IDadataProps } from './types'

/**
 * @deprecated For better performance use `Controlled.DadataFio` instead.
 */
export const DadataFio = <T extends FieldValues>({ ...props }: IDadataProps<T>) => {
  return <AutocompleteDadata dadataType='fio' {...props} />
}
