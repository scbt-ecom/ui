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
 * | Props                | Description                                    | Type                    | Required  |
 * | -------------------- | ---------------------------------------------- | ----------------------- | --------- |
 * | \`invalid\`          | Свойство для отображения не валидного поля     | \`boolean\`             | \`false\` |
 * | \`classes\`          | Дополнительные стили внутренних компонентов    | \`CheckboxBaseClasses\` | \`false\` |
 * | \`externalHandlers\` | Дополнительные хендлеры                        | \`ExternalHandlers\`    | \`false\` |
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

export const WithExternalHandlers: Story = {
  args: {
    ...Base.args,
    externalHandlers: {
      onChange: (value) => console.warn('handled external onChange', value),
      onClick: () => console.warn('handled external onClick'),
      onBlur: () => console.warn('handled external onBlur'),
      onFocus: () => console.warn('handled external onFocus')
    }
  },
  render: WithState.render
}
