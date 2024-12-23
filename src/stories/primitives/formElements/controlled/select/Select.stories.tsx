'use docs'

import toast from 'react-hot-toast'
import type { Meta, StoryObj } from '@storybook/react'
import z from 'zod'
import { useControlledForm } from '$/shared/hooks'
import { Controlled, type SelectItemOption } from '$/shared/ui'

const options: SelectItemOption[] = [
  {
    id: 0,
    value: 'value_1',
    label: 'Value 1',
    additionalText: 'Nexus'
  },
  {
    id: 1,
    value: 'value_2',
    label: 'Value 2'
  },
  {
    id: 2,
    value: 'value_3',
    label: 'Value 3',
    additionalText: 'Nexus'
  },
  {
    id: 3,
    value: 'value_4',
    label: 'Value 4'
  },
  {
    id: 4,
    value: 'value_5',
    label: 'Value 5',
    disabled: true
  },
  {
    id: 5,
    value: 'value_6',
    label: 'Value 6'
  },
  {
    id: 6,
    value: 'value_7',
    label: 'Value 7'
  },
  {
    id: 7,
    value: 'value_8',
    label: 'Value 8'
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
  const { control, handleSubmit } = useControlledForm({
    schema,
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
  title: 'CONTROLLED/SelectControl',
  component: Controlled.SelectControl<Schema>,
  parameters: {
    layout: 'centered'
  },
  args: {
    label: 'Input',
    options,
    name: 'test'
  }
} satisfies Meta<typeof Controlled.SelectControl<Schema>>

export default meta

type Story = StoryObj<typeof Controlled.SelectControl<Schema>>

/**
 * \`SelectControl\` компонент, управляемый библиотекой \`react-hook-form\`\n
 *
 * | Props        | Description                         | Type                             | Required  |
 * | ------------ | ----------------------------------- | -------------------------------- | --------- |
 * | \`control\`  | Контрол объект для управления полем | \`Control\<TFieldValues\>\`      | \`true\`  |
 * | \`name\`     | Имя поля                            | \`string\`                       | \`true\`  |
 * | \`classes\`  | Дополнительные стили компонента     | \`SelectControlClasses\`         | \`false\` |
 * | \`textHint\` | Дополнительный текст                | \`string\`                       | \`false\` |
 *
 * Остальные свойства наследуются от [Select](?path=/docs/base-selectbase--docs)\n
 */
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
