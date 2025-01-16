'use docs'

import type { Meta, StoryObj } from '@storybook/react'
import z from 'zod'
import { HookForm } from '../utils'
import { Controlled } from '$/shared/ui'

const schema = z.object({
  test: z.string().min(3, 'Name error')
})

type Schema = z.TypeOf<typeof schema>
type InputControlProps = React.ComponentPropsWithoutRef<typeof Controlled.InputControl>

const meta = {
  title: 'CONTROLLED/InputControl',
  component: Controlled.InputControl,
  parameters: {
    layout: 'centered'
  },
  args: {
    label: 'Input',
    name: 'test'
  },
  render: (props) => (
    <HookForm<InputControlProps, Schema>
      {...props}
      schema={schema}
      defaultValues={{
        test: ''
      }}
      renderComponent={(componentProps: InputControlProps) => <Controlled.InputControl {...componentProps} />}
    />
  )
} satisfies Meta<typeof Controlled.InputControl>

export default meta

type Story = StoryObj<typeof Controlled.InputControl>

/**
 * \`InputControl\` компонент, контролируемый библиотекой \`react-hook-form\`\n
 *
 * | Props        | Description                         | Type                         | Required  |
 * | ------------ | ----------------------------------- | ---------------------------- | --------- |
 * | \`control\`  | Контрол объект для управления полем | \`Control\<TFieldValues\>\`  | \`true\`  |
 * | \`name\`     | Имя поля                            | \`string\`                   | \`true\`  |
 * | \`classes\`  | Дополнительные стили компонента     | \`InputControlClasses\`      | \`false\` |
 * | \`helperText\` | Дополнительный текст                | \`string\`                   | \`false\` |
 *
 * Остальные свойства наследуются от [Input](?path=/docs/base-inputbase--docs)\n
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
