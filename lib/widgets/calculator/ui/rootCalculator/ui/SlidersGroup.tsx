import { type FieldValues, useFormContext } from 'react-hook-form'
import { type FieldElementWithoutControl, FieldMapper } from '../../../../fieldMapper'
import type { FieldValidation } from '../../../../model'

export interface SlidersGroupProps<T extends FieldValues> {
  fields: FieldElementWithoutControl<T, 'SliderControl', { validation: FieldValidation }>[]
}

export const SlidersGroup = <T extends FieldValues>({ fields }: SlidersGroupProps<T>) => {
  const { control } = useFormContext<T>()

  return <FieldMapper control={control} fields={fields} />
}
