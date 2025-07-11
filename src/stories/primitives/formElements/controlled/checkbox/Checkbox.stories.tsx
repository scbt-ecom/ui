'use docs'

import type { Meta, StoryObj } from '@storybook/react'
import z from 'zod'
import { HookForm } from '../utils'
import { CheckboxControl } from '$/shared/ui'

const schema = z.object({
  test: z.boolean()
})

type Schema = z.TypeOf<typeof schema>
type CheckboxControlProps = React.ComponentPropsWithoutRef<typeof CheckboxControl>

const meta = {
  title: 'Form elements/controlled/CheckboxControl',
  component: CheckboxControl,
  parameters: {
    layout: 'centered'
  },
  args: {
    children: 'Input'
  },
  render: (props) => (
    <HookForm<CheckboxControlProps, Schema>
      {...props}
      schema={schema}
      defaultValues={{
        test: false
      }}
      renderComponent={(componentProps: CheckboxControlProps) => (
        <CheckboxControl {...componentProps} name='test'>
          Input
        </CheckboxControl>
      )}
    />
  )
} satisfies Meta<typeof CheckboxControl>

export default meta

type Story = StoryObj<typeof CheckboxControl>

/**
 * \`CheckboxControl\` компонент, управляемый библиотекой \`react-hook-form\`\n
 *
 * | Props        | Description                         | Type                            | Required  |
 * | ------------ | ----------------------------------- | ------------------------------- | --------- |
 * | \`control\`  | Контрол объект для управления полем | \`Control\<TFieldValues\>\`     | \`true\`  |
 * | \`name\`     | Имя поля                            | \`string\`                      | \`true\`  |
 * | \`children\` | Отображаемый лейбл                  | \`React.ReactElement | string\` | \`true\`  |
 * | \`classes\`  | Дополнительные стили компонента     | \`CheckboxControlClasses\`      | \`false\` |
 * | \`helperText\` | Дополнительный текст                | \`string\`                      | \`false\` |
 *
 * Остальные свойства наследуются от [Checkbox](?path=/docs/base-checkboxbase--docs)\n
 */
export const Base: Story = {}

export const Disabled: Story = {
  args: {
    disabled: true
  }
}

export const WithExternalHandlers: Story = {
  args: {
    ...Base.args,
    externalHandlers: {
      onChange: (value) => console.warn('handled external onChange', value),
      onClick: () => console.warn('handled external onClick'),
      onBlur: () => console.warn('handled external onBlur'),
      onFocus: () => console.warn('handled external onFocus')
    }
  }
}
