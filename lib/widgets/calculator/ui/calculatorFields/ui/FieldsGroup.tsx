import { type FieldValues, useFormContext } from 'react-hook-form'
import { type FieldElementWithoutControl, FieldMapper } from '../../../../fieldMapper'
import type { FieldValidation } from '@/shared/utils'
import { type SliderAdditionalProps } from '$/shared/ui/formElements/uncontrolled/slider'

export type ValidationField = { validation: FieldValidation }

export interface SelectGroupProps<T extends FieldValues> {
  fields: FieldElementWithoutControl<T, 'SelectControl', ValidationField>[]
}

export interface CheckboxGroupProps<T extends FieldValues> {
  fields: FieldElementWithoutControl<T, 'CheckboxControl', ValidationField>[]
}

type RadioGroupFields<T extends FieldValues> = FieldElementWithoutControl<
  T,
  'RadioGroupTabControl' | 'RadioGroupControl' | 'RadioGroupCardControl',
  ValidationField
>[]

export interface RadioGroupProps<T extends FieldValues> {
  fields: RadioGroupFields<T>
}

export interface SlidersGroupProps<T extends FieldValues> {
  fields: FieldElementWithoutControl<T, 'SliderControl', ValidationField>[]
}

export interface SwitchGroupProps<T extends FieldValues> {
  fields: FieldElementWithoutControl<T, 'SwitchControl', ValidationField>[]
}

export interface AdditionalSliderGroupConfig<T extends FieldValues> {
  args: SliderAdditionalProps<T>
  type: 'SliderControl'
}

export type FieldsGroupProps<T extends FieldValues> =
  | SelectGroupProps<T>
  | CheckboxGroupProps<T>
  | RadioGroupProps<T>
  | SlidersGroupProps<T>
  | SwitchGroupProps<T>

export const FieldsGroup = <T extends FieldValues>({ fields }: FieldsGroupProps<T>) => {
  const { control } = useFormContext<T>()

  return <FieldMapper control={control} fields={fields} />
}
