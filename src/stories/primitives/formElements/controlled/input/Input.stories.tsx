'use docs'

import toast from 'react-hot-toast'
import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import z from 'zod'
import { HookForm } from '../utils'
import { InputControl } from '$/shared/ui'
import { ZodUtils, zodValidators } from '$/shared/validation'

const schema = z.object({
  field: zodValidators.base.getStringSchema()
})

const numberSchema = z.object({
  field: zodValidators.base.getNumberSchema()
})

type Schema = z.TypeOf<typeof schema>
type NumberSchema = z.TypeOf<typeof numberSchema>
type InputControlProps = React.ComponentPropsWithoutRef<typeof InputControl>

const meta = {
  title: 'Form elements/controlled/InputControl',
  component: InputControl,
  parameters: {
    layout: 'centered'
  },
  args: {
    label: 'Input',
    name: 'field'
  },
  render: (props) => (
    <HookForm<InputControlProps, Schema>
      {...props}
      schema={schema}
      defaultValues={{
        field: ''
      }}
      renderComponent={(componentProps: InputControlProps) => <InputControl {...componentProps} />}
    />
  )
} satisfies Meta<typeof InputControl>

export default meta

type Story = StoryObj<typeof InputControl>

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

export const WithTypeNumber: Story = {
  args: {
    ...Base.args,
    type: 'number'
  },
  render: (props) => (
    <HookForm<InputControlProps, NumberSchema>
      {...props}
      schema={numberSchema}
      defaultValues={ZodUtils.getZodDefaults(numberSchema)}
      renderComponent={(componentProps: InputControlProps) => <InputControl {...componentProps} />}
    />
  )
}
