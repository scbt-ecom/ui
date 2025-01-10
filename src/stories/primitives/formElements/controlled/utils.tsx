import type React from 'react'
import type { Control, FieldErrors, FieldValues } from 'react-hook-form'
import toast from 'react-hot-toast'
import type { ZodSchema } from 'zod'
import { useControlledForm } from '$/shared/hooks'
import { Button } from '$/shared/ui'

type FormProps<ComponentProps, Schema extends FieldValues> = ComponentProps & {
  schema: ZodSchema
  defaultValues: Schema
  renderComponent: (props: ComponentProps & { control: Control<Schema> }) => React.JSX.Element
}

export const HookForm = <ComponentProps, Schema extends FieldValues>({
  schema,
  defaultValues,
  renderComponent,
  ...props
}: FormProps<ComponentProps, Schema>) => {
  const { control, handleSubmit } = useControlledForm({
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
    <form onSubmit={handleSubmit(onSubmit, onError)}>
      {renderComponent({ control, ...props })}
      <Button type='submit'>Submit</Button>
    </form>
  )
}
