'use docs'

import type { Meta, StoryObj } from '@storybook/react'
import z from 'zod'
import { HookForm } from '../utils'
import { Controlled } from '$/shared/ui'

const schema = z.object({
  test: z.boolean()
})

type Schema = z.TypeOf<typeof schema>
type SwitchControlProps = React.ComponentPropsWithoutRef<typeof Controlled.SwitchControl>

const meta = {
  title: 'CONTROLLED/SwitchControl',
  component: Controlled.SwitchControl,
  parameters: {
    layout: 'centered'
  },
  args: {
    children: 'Input',
    name: 'test'
  },
  render: (props) => (
    <HookForm<SwitchControlProps, Schema>
      {...props}
      defaultValues={{
        test: false
      }}
      schema={schema}
      renderComponent={(componentProps: SwitchControlProps) => (
        <Controlled.SwitchControl {...componentProps}>Primary text</Controlled.SwitchControl>
      )}
    />
  )
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
export const Base: Story = {}

export const WithTextHint: Story = {
  args: {
    helperText: 'Secondary text'
  }
}

export const WithTooltip: Story = {
  args: {
    tooltip: 'Tooltip text'
  }
}

export const WithTextHintAndTooltip: Story = {
  args: {
    ...WithTextHint.args,
    ...WithTooltip.args
  }
}

export const Disabled: Story = {
  args: {
    ...WithTextHintAndTooltip.args,
    disabled: true
  }
}
