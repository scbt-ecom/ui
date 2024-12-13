import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { zodResolver } from '@hookform/resolvers/zod'
import type { Meta, StoryObj } from '@storybook/react'
import z from 'zod'
import { Controlled, type SelectItemOption } from '$/shared/ui'

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

type SelectControlProps = React.ComponentPropsWithoutRef<typeof Controlled.SelectControl<Schema>>

type FormProps = Omit<SelectControlProps, 'control'> & {
  schema: z.ZodSchema
  defaultValues: Schema
  renderComponent: (props: SelectControlProps) => React.JSX.Element
}

const Form = ({ schema, defaultValues, renderComponent, ...props }: FormProps) => {
  const { control, handleSubmit } = useForm<z.TypeOf<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues
  })

  const onSubmit = (values: Schema) => {
    toast.success(JSON.stringify(values))
  }

  const onError = (errors: any) => {
    toast.error(JSON.stringify(errors))
  }

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)}>
      {renderComponent({ ...props, control })}
      <button>Submit</button>
    </form>
  )
}

const meta = {
  title: 'CONTROLLED/Select',
  component: Controlled.SelectControl<Schema>,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  args: {
    label: 'Input',
    options,
    name: 'test'
  }
} satisfies Meta<typeof Controlled.SelectControl<Schema>>

export default meta

type Story = StoryObj<typeof Controlled.SelectControl<Schema>>

export const Base: Story = {
  render: (props) => (
    <Form
      {...props}
      schema={schema}
      defaultValues={{ test: null }}
      renderComponent={(componentProps) => <Controlled.SelectControl<Schema> {...componentProps} />}
    />
  )
}

const multiSchema = z.object({
  test: z.array(z.string().nullable().refine(Boolean))
})
export const WithMulti: Story = {
  args: {
    isMulti: true
  },
  render: (props) => (
    <Form
      {...props}
      schema={multiSchema}
      defaultValues={{ test: null }}
      renderComponent={(componentProps) => <Controlled.SelectControl<Schema> {...componentProps} />}
    />
  )
}

export const WithSearchable: Story = {
  args: {
    isSearchable: true
  },
  render: (props) => (
    <Form
      {...props}
      schema={schema}
      defaultValues={{ test: null }}
      renderComponent={(componentProps) => <Controlled.SelectControl<Schema> {...componentProps} />}
    />
  )
}
