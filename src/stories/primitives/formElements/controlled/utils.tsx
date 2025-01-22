import type React from 'react'
import type { Control, FieldErrors, FieldValues } from 'react-hook-form'
import toast from 'react-hot-toast'
import type { ZodSchema } from 'zod'
import { useControlledForm } from '$/shared/hooks'
import { Button } from '$/shared/ui'

type FormProps<ComponentProps extends {}, Schema extends FieldValues = FieldValues> = ComponentProps & {
  schema: ZodSchema
  defaultValues: Schema
  renderComponent: (
    props: Omit<FormProps<ComponentProps, Schema>, 'schema' | 'defaultValues' | 'renderComponent'> & { control: Control<Schema> }
  ) => React.JSX.Element
}

export const HookForm = <ComponentProps extends {}, Schema extends FieldValues>({
  schema,
  defaultValues,
  renderComponent,
  ...props
}: FormProps<ComponentProps, Schema>) => {
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
    <form className='flex w-[500px] flex-col gap-y-2' onSubmit={handleSubmit(onSubmit, onError)}>
      {renderComponent({ control, ...props })}
      <Button type='submit'>Submit</Button>
      <Button type='button' onClick={reset}>
        Reset
      </Button>
    </form>
  )
}
