'use docs'

import toast from 'react-hot-toast'
import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import z from 'zod'
import { HookForm } from '../utils'
import { Controlled } from '$/shared/ui'

const textareaSchema = z.object({
  test: z.string().min(3, 'Name error')
})

type Schema = z.TypeOf<typeof textareaSchema>
type TextareaControlProps = React.ComponentPropsWithoutRef<typeof Controlled.TextareaControl>

const meta = {
  title: 'Form elements/controlled/TextareaControl',
  component: Controlled.TextareaControl,
  parameters: {
    layout: 'centered'
  },
  args: {
    label: 'Some label',
    placeholder: 'Some placeholder',
    name: 'test'
  },
  render: (props) => (
    <HookForm<TextareaControlProps, Schema>
      {...props}
      defaultValues={{
        test: ''
      }}
      schema={textareaSchema}
      renderComponent={(componentProps: TextareaControlProps) => <Controlled.TextareaControl {...componentProps} />}
    />
  )
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
export const Base: Story = {}

export const Disabled: Story = {
  args: {
    disabled: true
  }
}

export const ReadOnly: Story = {
  args: {
    readOnly: true
  }
}

export const WithExternalHandlers: Story = {
  args: {
    ...Base.args,
    externalHandlers: {
      onChange: (event) => {
        fn(() => toast(`handled external onChange ${event}`))
      },
      onClick: fn(() => {
        toast('handled external onClick')
      }),
      onBlur: fn(() => {
        toast('handled external onBlur')
      }),
      onFocus: fn(() => {
        toast('handled external onFocus')
      })
    }
  }
}
