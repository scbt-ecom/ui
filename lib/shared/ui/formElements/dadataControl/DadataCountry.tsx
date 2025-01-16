import type { FieldValues } from 'react-hook-form'
import { AutocompleteDadata } from './autocompleteDadata'
import type { IDadataProps } from './types'

/**
 * @deprecated For better performance use `Controlled.DadataCountry` instead.
 */
export const DadataCountry = <T extends FieldValues>({ ...props }: IDadataProps<T>) => {
  return <AutocompleteDadata dadataType='country' {...props} />
}
