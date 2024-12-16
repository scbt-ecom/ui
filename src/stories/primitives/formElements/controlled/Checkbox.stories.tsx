import { type FieldErrors } from 'react-hook-form'
import toast from 'react-hot-toast'
import type { Meta, StoryObj } from '@storybook/react'
import z from 'zod'
import { useControlledForm } from '$/shared/hooks'
import { Controlled } from '$/shared/ui'

const schema = z.object({
  test: z.boolean().refine(Boolean)
})

type Schema = z.TypeOf<typeof schema>

const Form = () => {
  const { control, handleSubmit } = useControlledForm({
    schema,
    defaultValues: {
      test: false
    }
  })

  const onSubmit = (values: Schema) => {
    toast.success(JSON.stringify(values))
  }

  const onError = (errors: FieldErrors<Schema>) => {
    toast.error(JSON.stringify(errors))
  }

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)}>
      <Controlled.CheckboxControl control={control} name='test'>
        Input
      </Controlled.CheckboxControl>
      <button>Submit</button>
    </form>
  )
}

const meta = {
  title: 'CONTROLLED/Checkbox',
  component: Controlled.CheckboxControl,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  args: {
    children: 'Input'
  }
} satisfies Meta<typeof Controlled.CheckboxControl>

export default meta

type Story = StoryObj<typeof Controlled.CheckboxControl>

export const Base: Story = {
  render: () => <Form />
}
