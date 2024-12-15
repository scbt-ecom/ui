import { type FieldErrors } from 'react-hook-form'
import toast from 'react-hot-toast'
import type { Meta, StoryObj } from '@storybook/react'
import z from 'zod'
import { useControlledForm } from '$/shared/hooks'
import { Controlled } from '$/shared/ui'

const schema = z.object({
  test: z.string().min(3, 'Name error')
})

type Schema = z.TypeOf<typeof schema>

const Form = () => {
  const { control, handleSubmit } = useControlledForm({
    schema,
    defaultValues: {
      test: ''
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
      <Controlled.InputControl control={control} name='test' label='Input' />
      <button>Submit</button>
    </form>
  )
}

const meta = {
  title: 'CONTROLLED/Input',
  component: Controlled.InputControl,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  args: {
    label: 'Input'
  }
} satisfies Meta<typeof Controlled.InputControl>

export default meta

type Story = StoryObj<typeof Controlled.InputControl>

export const Base: Story = {
  render: () => <Form />
}
