import { type FieldValues, useFormContext } from 'react-hook-form'
import { type FieldElementWithoutControl, FieldMapper } from '../../../../fieldMapper'
import type { FieldValidation } from '../../../../model'

export interface CheckboxGroupProps<T extends FieldValues> {
  fields: FieldElementWithoutControl<T, 'CheckboxControl', { validation: FieldValidation }>[]
}

export const CheckboxGroup = <T extends FieldValues>({ fields }: CheckboxGroupProps<T>) => {
  const { control } = useFormContext<T>()

  return (
    <div className='flex flex-col gap-4'>
      <FieldMapper control={control} fields={fields} />
    </div>
  )
}
