'use docs'

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
type SwitchControlProps = React.ComponentPropsWithoutRef<typeof Controlled.SwitchControl>
type FormProps = Omit<SwitchControlProps, 'control'> & {
  schema: z.Schema
}

const Form = ({ schema, ...props }: FormProps) => {
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
      <Controlled.SwitchControl control={control} {...props}>
        Primary text
      </Controlled.SwitchControl>
      <br />
      <button>Submit</button>
    </form>
  )
}

const meta = {
  title: 'CONTROLLED/SwitchControl',
  component: Controlled.SwitchControl,
  parameters: {
    layout: 'centered'
  },
  args: {
    children: 'Input',
    name: 'test'
  }
} satisfies Meta<typeof Controlled.SwitchControl>

export default meta

type Story = StoryObj<typeof Controlled.SwitchControl>

/**
 * \`SelectControl\` компонент, управляемый библиотекой \`react-hook-form\`\n
 *
 * | Props            | Description                                    | Type                            | Required  |
 * | ---------------- | ---------------------------------------------- | ------------------------------- | --------- |
 * | \`control\`      | Контрол объект для управления полем            | \`Control\<TFieldValues\>\`     | \`true\`  |
 * | \`name\`         | Имя поля                                       | \`string\`                      | \`true\`  |
 * | \`children\`     | Отображаемый лейбл                             | \`React.ReactElement | string\` | \`true\`  |
 * | \`classes\`      | Дополнительные стили компонента                | \`SwitchControlClasses\`        | \`false\` |
 * | \`helperText\`     | Дополнительный текст                           | \`string\`                      | \`false\` |
 * | \`tooltip\`      | Текст всплывающей подсказки                    | \`React.ReactElement | string\` | \`false\` |
 * | \`popoverProps\` | Свойства \`Popover\` компонента                | \`PopoverProps\`                | \`false\` |
 *
 * Остальные свойства наследуются от [Switch](?path=/docs/base-switchbase--docs)\n
 */
export const Base: Story = {
  render: (props) => <Form schema={schema} {...props} />
}

export const WithTextHint: Story = {
  args: {
    helperText: 'Secondary text'
  },
  render: (props) => <Form schema={schema} {...props} />
}

export const WithTooltip: Story = {
  args: {
    tooltip: 'Tooltip text'
  },
  render: (props) => <Form schema={schema} {...props} />
}

export const WithTextHintAndTooltip: Story = {
  args: {
    ...WithTextHint.args,
    ...WithTooltip.args
  },
  render: (props) => <Form schema={schema} {...props} />
}

export const Disabled: Story = {
  args: {
    ...WithTextHintAndTooltip.args,
    disabled: true
  },
  render: (props) => <Form schema={schema} {...props} />
}
