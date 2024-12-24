'use docs'

import { type FieldErrors } from 'react-hook-form'
import toast from 'react-hot-toast'
import type { Meta, StoryObj } from '@storybook/react'
import z from 'zod'
import { useControlledForm } from '$/shared/hooks'
import { Controlled, type RadioOption } from '$/shared/ui'

const schema = z.object({
  test: z.string().nullable().refine(Boolean)
})

const options: RadioOption[] = [
  {
    id: 0,
    value: 'value_1',
    label: 'value 1'
  },
  {
    id: 1,
    value: 'value_2',
    label: 'value 2',
    disabled: true
  },
  {
    id: 2,
    value: 'value_3',
    label: 'value 3'
  },
  {
    id: 3,
    value: 'value_4',
    label: 'value 4'
  },
  {
    id: 4,
    value: 'value_5',
    label: 'value 5'
  },
  {
    id: 5,
    value: 'value_6',
    label: 'value 6'
  },
  {
    id: 6,
    value: 'value_7',
    label: 'value 7'
  }
]

type Schema = z.TypeOf<typeof schema>
type RadioGroupControlProps = React.ComponentPropsWithoutRef<typeof Controlled.RadioGroupControl>
type FormProps = Omit<RadioGroupControlProps, 'control'> & {
  schema: z.Schema
}

const Form = ({ schema, ...props }: FormProps) => {
  const { control, handleSubmit } = useControlledForm({
    schema,
    defaultValues: {
      test: null
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
      <Controlled.RadioGroupControl control={control} {...props} />
      <br />
      <button>Submit</button>
    </form>
  )
}

const meta = {
  title: 'CONTROLLED/RadioGroupControl',
  component: Controlled.RadioGroupControl,
  parameters: {
    layout: 'centered'
  },
  args: {
    options,
    label: 'Some label',
    name: 'test'
  }
} satisfies Meta<typeof Controlled.RadioGroupControl>

export default meta

type Story = StoryObj<typeof Controlled.RadioGroupControl>

/**
 * \`RadioGroupControl\` компонент, управляемый библиотекой \`react-hook-form\`\n
 *
 * | Props        | Description                         | Type                        | Required  |
 * | ------------ | ----------------------------------- | --------------------------- | --------- |
 * | \`control\`  | Контрол объект для управления полем | \`Control\<TFieldValues\>\` | \`true\`  |
 * | \`label\`    | Отображаемый лейбл                  | \`Control\<TFieldValues\>\` | \`true\`  |
 * | \`name\`     | Имя поля                            | \`string\`                  | \`true\`  |
 * | \`options\`  | Список отображаемых опций           | \`RadioOption[]\`           | \`true\`  |
 * | \`classes\`  | Дополнительные стили компонента     | \`RadioControlClasses\`     | \`false\` |
 * | \`textHint\` | Дополнительный текст                | \`string\`                  | \`false\` |
 *
 * Остальные свойства наследуются от [RadioGroup](?path=/docs/base-radiogroupbase--docs)\n
 */
export const Base: Story = {
  render: (props) => <Form schema={schema} {...props} />
}

export const Disabled: Story = {
  args: {
    disabled: true
  },
  render: Base.render
}

export const WithCustomReturnValue: Story = {
  args: {
    returnValue: (option) => option.label
  },
  render: Base.render
}

export const WithCustomDisplayValue: Story = {
  args: {
    displayValue: (option) => String(option.id)
  },
  render: Base.render
}
