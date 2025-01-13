'use docs'

import type { Meta, StoryObj } from '@storybook/react'
import z from 'zod'
import { HookForm } from '../utils'
import { Controlled } from '$/shared/ui'

const schema = z.object({
  test: z.boolean()
})

type Schema = z.TypeOf<typeof schema>
type CheckboxControlProps = React.ComponentPropsWithoutRef<typeof Controlled.CheckboxControl>

const meta = {
  title: 'CONTROLLED/CheckboxControl',
  component: Controlled.CheckboxControl,
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
        <Controlled.CheckboxControl {...componentProps} name='test'>
          Input
        </Controlled.CheckboxControl>
      )}
    />
  )
} satisfies Meta<typeof Controlled.CheckboxControl>

export default meta

type Story = StoryObj<typeof Controlled.CheckboxControl>

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
