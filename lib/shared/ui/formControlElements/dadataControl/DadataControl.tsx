import { type FieldValues } from 'react-hook-form'
import { AutocompleteDadata } from '../autocompleteDadata/AutocompleteDadata'
import { type TAdditionalInputClassesWithAttachment, type TControlledInputProps, type TInputCommonProps } from '../model'

type TDadataClasses = Partial<TAdditionalInputClassesWithAttachment> & {
  options?: string
  indentMargin?: string
}

export interface IDadataProps<T extends FieldValues> extends TControlledInputProps<T>, TInputCommonProps {
  classes?: TDadataClasses
  baseUrl: string
}

export const DadataFio = <T extends FieldValues>({ control, name, label, baseUrl }: IDadataProps<T>) => {
  return <AutocompleteDadata control={control} name={name} label={label} dadataType='fio' dadataBaseUrl={baseUrl} />
}

export const DadataAddress = <T extends FieldValues>({ control, name, label, baseUrl }: IDadataProps<T>) => {
  return <AutocompleteDadata control={control} name={name} label={label} dadataType='address' dadataBaseUrl={baseUrl} />
}

export const DadataOrganization = <T extends FieldValues>({ control, name, label, baseUrl }: IDadataProps<T>) => {
  return <AutocompleteDadata control={control} name={name} label={label} dadataType='party' dadataBaseUrl={baseUrl} />
}

export const DadataCountry = <T extends FieldValues>({ control, name, label, baseUrl }: IDadataProps<T>) => {
  return <AutocompleteDadata control={control} name={name} label={label} dadataType='country' dadataBaseUrl={baseUrl} />
}

export const DadataAuto = <T extends FieldValues>({ control, name, label, baseUrl }: IDadataProps<T>) => {
  return <AutocompleteDadata control={control} name={name} label={label} dadataType='auto' dadataBaseUrl={baseUrl} />
}
