import type React from 'react'
import type { Control, FieldErrors, FieldValues } from 'react-hook-form'
import toast, { Toaster } from 'react-hot-toast'
import { object, type ZodSchema } from 'zod'
import type { DataAttributes } from './types'
import { useControlledForm } from '$/shared/hooks'
import { Button } from '$/shared/ui'
import { ZodUtils, zodValidators } from '$/shared/validation'

const defaultSchema = object({
  field: zodValidators.base.getStringSchema()
})

export type FormProviderProps<ComponentProps extends {}, Schema extends FieldValues = FieldValues> = {
  schema?: ZodSchema
  defaultValues?: Schema
  args: Omit<ComponentProps, 'control'> & DataAttributes
  renderComponent: (control: Control<Schema>, props: Omit<ComponentProps, 'control'>) => React.JSX.Element
}

export const FormProvider = <ComponentProps extends {}, Schema extends FieldValues>({
  schema = defaultSchema,
  defaultValues = ZodUtils.getZodDefaults(defaultSchema),
  renderComponent,
  args
}: FormProviderProps<ComponentProps, Schema>) => {
  const { control, handleSubmit, reset } = useControlledForm({
    schema,
    defaultValues
  })

  const onSubmit = (values: Schema) => {
    toast.success(JSON.stringify(values))
  }

  const onError = (errors: FieldErrors<Schema>) => {
    toast.error(JSON.stringify(errors))
  }

  return (
    <form
      className='mx-auto flex w-full max-w-[600px] flex-col gap-y-4 py-10'
      onSubmit={handleSubmit(onSubmit, onError)}
      data-test-id='form'
    >
      <Toaster position='top-right' />
      {renderComponent(control, args)}
      <Button type='submit' data-test-id='submit'>
        Submit
      </Button>
      <Button type='button' onClick={reset} data-test-id='reset'>
        Reset
      </Button>
    </form>
  )
}
