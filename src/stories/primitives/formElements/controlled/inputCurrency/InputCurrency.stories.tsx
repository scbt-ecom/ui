'use docs'

import toast from 'react-hot-toast'
import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import z from 'zod'
import { HookForm } from '../utils'
import { defaultCurrencyOptions } from './constants'
import { InputCurrencyControl, type InputCurrencyControlProps } from '$/shared/ui'
import { ZodUtils, zodValidators } from '$/shared/validation'

const schema = z.object({
  field: zodValidators.base.getCurrencySchema()
})

type Schema = z.TypeOf<typeof schema>
const defaultValues = ZodUtils.getZodDefaults(schema)

const meta = {
  title: 'Form elements/controlled/InputCurrencyControl',
  component: InputCurrencyControl,
  parameters: {
    layout: 'centered'
  },
  args: {
    label: 'Input',
    name: 'field',
    currencies: defaultCurrencyOptions
  },
  render: (props) => (
    <HookForm<InputCurrencyControlProps, Schema>
      {...props}
      schema={schema}
      defaultValues={defaultValues}
      renderComponent={(componentProps: InputCurrencyControlProps) => <InputCurrencyControl {...componentProps} />}
    />
  )
} satisfies Meta<typeof InputCurrencyControl>

export default meta

type Story = StoryObj<typeof InputCurrencyControl>

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
