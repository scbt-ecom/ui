import type { FieldValues } from 'react-hook-form'
import { AutocompleteDadata } from './autocompleteDadata'
import type { IDadataProps } from './types'

/**
 * @deprecated For better performance use `Controlled.DadataAddress` instead.
 */
export const DadataAddress = <T extends FieldValues>({ ...props }: IDadataProps<T>) => {
  return <AutocompleteDadata dadataType='address' {...props} />
}
