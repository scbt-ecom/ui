import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { zodResolver } from '@hookform/resolvers/zod'
import type { Meta, StoryObj } from '@storybook/react'
import z from 'zod'
import { Controlled, type SelectBaseProps, type SelectItemOption } from '$/shared/ui'

const options: SelectItemOption[] = [
  {
    id: 0,
    value: 'value_1',
    label: 'Nexus говно',
    additionalText: 'Nexus'
  },
  {
    id: 1,
    value: 'value_2',
    label: 'Nexus шляпа'
  },
  {
    id: 2,
    value: 'value_3',
    label: 'Nexus параша',
    additionalText: 'Nexus'
  },
  {
    id: 3,
    value: 'value_4',
    label: 'NPM очко'
  },
  {
    id: 4,
    value: 'value_5',
    label: 'NPM параша',
    disabled: true
  },
  {
    id: 5,
    value: 'value_6',
    label: 'Nexus параша'
  },
  {
    id: 6,
    value: 'value_7',
    label: 'NPM очко'
  },
  {
    id: 7,
    value: 'value_8',
    label: 'NPM параша'
  }
]

const schema = z.object({
  test: z.string().nullable().refine(Boolean)
})

type Schema = z.TypeOf<typeof schema>

const Form = (props: SelectBaseProps) => {
  const { control, handleSubmit } = useForm<Schema>({
    resolver: zodResolver(schema),
    defaultValues: {
      test: null
    }
  })

  const onSubmit = (values: Schema) => {
    toast.success(JSON.stringify(values))
  }

  const onError = (errors: any) => {
    toast.error(JSON.stringify(errors))
  }

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)}>
      <Controlled.SelectControl {...props} options={options} control={control} name='test' />
      <button>Submit</button>
    </form>
  )
}

const meta = {
  title: 'CONTROLLED/Select',
  component: Controlled.SelectControl,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  args: {
    label: 'Input'
  }
} satisfies Meta<typeof Controlled.SelectControl>

export default meta

type Story = StoryObj<typeof Controlled.SelectControl>

export const Base: Story = {
  render: (props) => <Form {...props} />
}
