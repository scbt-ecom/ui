import { type FieldValues, useFormContext } from 'react-hook-form'
import { type FieldElementWithoutControl, FieldMapper } from '../../../../fieldMapper'
import type { FieldValidation } from '../../../../model'

type RadioGroupFields<T extends FieldValues> = FieldElementWithoutControl<
  T,
  'RadioGroupTabControl' | 'RadioGroupControl' | 'RadioGroupCardControl',
  { validation: FieldValidation }
>[]

export interface RadioGroupProps<T extends FieldValues> {
  fields: RadioGroupFields<T>
}

export const RadioGroup = <T extends FieldValues>({ fields }: RadioGroupProps<T>) => {
  const { control } = useFormContext<T>()

  return (
    <div className='flex flex-wrap items-center gap-x-3 gap-y-4'>
      <FieldMapper control={control} fields={fields} />
    </div>
  )
}
