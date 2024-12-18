import type { FieldValues } from 'react-hook-form'
import { AutocompleteDadata } from './autocompleteDadata'
import type { IDadataProps } from './types'

export const DadataFio = <T extends FieldValues>({ ...props }: IDadataProps<T>) => {
  return <AutocompleteDadata dadataType='fio' {...props} />
}
