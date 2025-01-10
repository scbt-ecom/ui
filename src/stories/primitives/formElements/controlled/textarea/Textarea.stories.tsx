'use docs'

import { type FieldErrors } from 'react-hook-form'
import toast from 'react-hot-toast'
import type { Meta, StoryObj } from '@storybook/react'
import z from 'zod'
import { HookForm } from '../utils'
import { useControlledForm } from '$/shared/hooks'
import { Controlled, type TextareaControlProps } from '$/shared/ui'

const textareaSchema = z.object({
  test: z.string().min(3, 'Name error')
})

type Schema = z.TypeOf<typeof textareaSchema>

type FormProps = Omit<TextareaControlProps<Schema>, 'control'> & {
  schema: z.ZodSchema
  renderComponent: (props: TextareaControlProps<Schema>) => React.JSX.Element
}

const Form = ({ renderComponent, schema, ...props }: FormProps) => {
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
    <form className='w-full' onSubmit={handleSubmit(onSubmit, onError)}>
      {renderComponent({ ...props, control })}
      <button>Submit</button>
    </form>
  )
}

const meta = {
  title: 'CONTROLLED/TextareaControl',
  component: Controlled.TextareaControl,
  parameters: {
    layout: 'centered'
  },
  args: {
    label: 'Some label',
    placeholder: 'Some placeholder',
    name: 'test'
  }
} satisfies Meta<typeof Controlled.TextareaControl>

export default meta

type Story = StoryObj<typeof Controlled.TextareaControl>

/**
 * \`TextareaControl\` компонент, контролируемый библиотекой \`react-hook-form\`\n
 *
 * | Props          | Description                         | Type                         | Required  |
 * | -------------- | ----------------------------------- | ---------------------------- | --------- |
 * | \`control\`    | Контрол объект для управления полем | \`Control\<TFieldValues\>\`  | \`true\`  |
 * | \`name\`       | Имя поля                            | \`string\`                   | \`true\`  |
 * | \`classes\`    | Дополнительные стили компонента     | \`TextareaControlClasses\`   | \`false\` |
 * | \`helperText\` | Дополнительный текст                | \`string\`                   | \`false\` |
 *
 * Остальные свойства наследуются от [Textarea](?path=/docs/base-textareabase--docs)\n
 */
export const Base: Story = {
  render: (props) => (
    <HookForm<TextareaControlProps<Schema>, Schema>
      {...props}
      schema={textareaSchema}
      renderComponent={(componentProps) => <Controlled.TextareaControl {...componentProps} />}
    />
  )
}
