'use docs'

import toast from 'react-hot-toast'
import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import z from 'zod'
import { HookForm } from '../utils'
import { Controlled } from '$/shared/ui'

export type InputOtpControlProps = React.ComponentPropsWithoutRef<typeof Controlled.InputOtpControl>

const schema = z.object({
  test: z.string().min(4, 'Name error')
})

type Schema = z.TypeOf<typeof schema>

const meta = {
  title: 'CONTROLLED/InputOtpControl',
  component: Controlled.InputOtpControl,
  parameters: {
    layout: 'centered'
  },
  args: {
    name: 'test'
  },
  render: (props) => (
    <HookForm<InputOtpControlProps, Schema>
      {...props}
      schema={schema}
      defaultValues={{
        test: ''
      }}
      renderComponent={(componentProps: InputOtpControlProps) => <Controlled.InputOtpControl {...componentProps} />}
    />
  )
} satisfies Meta<typeof Controlled.InputOtpControl>

export default meta

type Story = StoryObj<typeof Controlled.InputOtpControl>

/**
 * \`InputOtpControl\` компонент, управляемый библиотекой \`react-hook-form\`\n
 *
 * | Props        | Description                         | Type                         | Required  |
 * | ------------ | ----------------------------------- | ---------------------------- | --------- |
 * | \`control\`  | Контрол объект для управления полем | \`Control\<TFieldValues\>\`  | \`true\`  |
 * | \`name\`     | Имя поля                            | \`string\`                   | \`true\`  |
 * | \`classes\`  | Дополнительные стили компонента     | \`MaskInputClasses\`         | \`false\` |
 * | \`helperText\` | Дополнительный текст                | \`string\`                   | \`false\` |
 *
 * Остальные свойства наследуются от [InputOtpBase](?path=/docs/base-inputOtp--docs)\n
 */
export const Base: Story = {}

export const Disabled: Story = {
  args: {
    disabled: true,
    helperText: 'Эта кнопка выключена'
  }
}

export const WithExternalHandlers: Story = {
  args: {
    ...Base.args,
    externalHandlers: {
      onClick: fn(() => {
        toast('handled external onClick')
      }),
      onChange: fn(() => {
        toast('handled external onChange')
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
