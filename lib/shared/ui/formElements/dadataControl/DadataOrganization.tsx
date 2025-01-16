import type { FieldValues } from 'react-hook-form'
import { AutocompleteDadata } from './autocompleteDadata'
import type { IDadataProps } from './types'

/**
 * @deprecated For better performance use `Controlled.DadataOrganization` instead.
 */
export const DadataOrganization = <T extends FieldValues>({ ...props }: IDadataProps<T>) => {
  return <AutocompleteDadata dadataType='party' {...props} />
}
