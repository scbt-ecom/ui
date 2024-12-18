import type { FieldValues } from 'react-hook-form'
import { AutocompleteDadata } from './autocompleteDadata'
import type { IDadataProps } from './types'

export const DadataCountry = <T extends FieldValues>({ ...props }: IDadataProps<T>) => {
  return <AutocompleteDadata dadataType='country' {...props} />
}
