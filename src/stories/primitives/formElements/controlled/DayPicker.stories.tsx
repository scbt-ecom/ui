import { type FieldErrors } from 'react-hook-form'
import toast from 'react-hot-toast'
import type { Meta, StoryObj } from '@storybook/react'
import z from 'zod'
import { useControlledForm } from '$/shared/hooks'
import { Controlled } from '$/shared/ui'

const schema = z.object({
  from: z.string().optional().refine(Boolean),
  to: z.string().optional()
})

type Schema = z.TypeOf<typeof schema>

const Form = () => {
  const { control, handleSubmit } = useControlledForm({
    schema,
    defaultValues: {
      to: '2024-12-20T08:05:24.003Z'
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
      <Controlled.DayPickerControl control={control} name='from' inputProps={{ label: 'Pick the date' }} />
      <Controlled.DayPickerControl control={control} name='to' inputProps={{ label: 'Pick the date' }} />
      <button>Submit</button>
    </form>
  )
}

const meta = {
  title: 'CONTROLLED/DayPickerControl',
  component: Controlled.DayPickerControl,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  args: {
    inputProps: {
      label: 'Input'
    }
  }
} satisfies Meta<typeof Controlled.DayPickerControl>

export default meta

type Story = StoryObj<typeof Controlled.DayPickerControl>

export const Base: Story = {
  render: () => <Form />
}
