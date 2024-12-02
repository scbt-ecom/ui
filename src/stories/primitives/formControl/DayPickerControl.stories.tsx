import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { type Meta, type StoryObj } from '@storybook/react'
import z, { type TypeOf } from 'zod'
import { DayPickerControl } from '$/shared/ui'

const meta = {
  title: 'CONTROLLED FORM UI/DayPickerControl',
  component: DayPickerControl,
  parameters: {
    layout: 'centered'
  }
} satisfies Meta<typeof DayPickerControl>
export default meta

type Story = StoryObj<typeof DayPickerControl>

const schema = z.object({
  date: z.object({
    from: z.string().default(''),
    to: z.string().optional()
  })
})

type Schema = TypeOf<typeof schema>

const DayPickerWithState = () => {
  const { control } = useForm<Schema>({
    resolver: zodResolver(schema),
    defaultValues: {
      date: {
        from: ''
      }
    }
  })

  return (
    <>
      <DayPickerControl control={control} name='date' mode='single' />
    </>
  )
}

export const Base: Story = {
  render: () => <DayPickerWithState />
}
