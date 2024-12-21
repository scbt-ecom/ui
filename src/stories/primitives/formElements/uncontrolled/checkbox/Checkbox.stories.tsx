'use docs'

import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { type CheckedState, Uncontrolled } from '$/shared/ui'

const meta = {
  title: 'BASE/CheckboxBase',
  component: Uncontrolled.CheckboxBase,
  parameters: {
    layout: 'centered'
  },
  args: {}
} satisfies Meta<typeof Uncontrolled.CheckboxBase>

export default meta

type Story = StoryObj<typeof Uncontrolled.CheckboxBase>

/**
 * Checkbox компонент для управления \`boolean\` значением\n
 *
 * | Props       | Description                                 | Type                    | Required  |
 * | ----------- | ------------------------------------------- | ----------------------- | --------- |
 * | \`invalid\` | Свойство для отображения не валидного поля  | \`boolean\`             | \`false\` |
 * | \`classes\` | Дополнительные стили внутренних компонентов | \`CheckboxBaseClasses\` | \`false\` |
 *
 * Остальные свойства наследуются от [Radix](https://www.radix-ui.com/primitives/docs/components/checkbox#api-reference)
 */
export const Base: Story = {
  args: {}
}

export const Disabled: Story = {
  args: {
    disabled: true
  }
}

export const Invalid: Story = {
  args: {
    invalid: true
  }
}

export const WithState: Story = {
  args: Base.args,
  render: (props) => {
    const [value, setValue] = useState<CheckedState>(false)

    return <Uncontrolled.CheckboxBase {...props} checked={value} onCheckedChange={setValue} />
  }
}
