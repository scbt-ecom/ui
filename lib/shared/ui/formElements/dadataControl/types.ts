import { type FieldValues } from 'react-hook-form'
import { type IAutocompleteDadataProps, type TAutocompleteDadataClasses } from './autocompleteDadata'

export interface IDadataProps<T extends FieldValues> extends Omit<IAutocompleteDadataProps<T>, 'dadataType'> {
  classes?: TAutocompleteDadataClasses
}
