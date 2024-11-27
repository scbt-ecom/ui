import { type FieldValues } from 'react-hook-form'
import { type TAdditionalInputClassesWithAttachment, type TControlledInputProps, type TInputCommonProps } from '../model'

export type TDadataClasses = Partial<TAdditionalInputClassesWithAttachment> & {
  options?: string
  indentMargin?: string
}

export interface IDadataProps<T extends FieldValues> extends TControlledInputProps<T>, TInputCommonProps {
  classes?: TDadataClasses
  baseUrl: string
}
