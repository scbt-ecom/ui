import { type FieldValues, useFormContext } from 'react-hook-form'
import { type FieldElementWithoutControl, FieldMapper } from '../../../../fieldMapper'
import type { FieldValidation } from '../../../../model'

export interface SwitchGroupProps<T extends FieldValues> {
  fields: FieldElementWithoutControl<T, 'SwitchControl', { validation: FieldValidation }>[]
}

export const SwitchGroup = <T extends FieldValues>({ fields }: SwitchGroupProps<T>) => {
  const { control } = useFormContext<T>()

  return (
    <div className='flex flex-col gap-4'>
      <FieldMapper control={control} fields={fields} />
    </div>
  )
}
