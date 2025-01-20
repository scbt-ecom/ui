'use docs'

import { useState } from 'react'
import toast from 'react-hot-toast'
import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { Uncontrolled } from '$/shared/ui'

const meta = {
  title: 'BASE/SwitchBase',
  component: Uncontrolled.SwitchBase,
  parameters: {
    layout: 'centered'
  },
  args: {}
} satisfies Meta<typeof Uncontrolled.SwitchBase>

export default meta

type Story = StoryObj<typeof Uncontrolled.SwitchBase>

/**
 * Checkbox компонент для управления \`boolean\` значением\n
 *
 * | Props       | Description                                 | Type                  | Required  |
 * | ----------- | ------------------------------------------- | --------------------- | --------- |
 * | \`classes\` | Дополнительные стили внутренних компонентов | \`SwitchBaseClasses\` | \`false\` |
 *
 * Остальные свойства наследуются от [Radix](https://www.radix-ui.com/primitives/docs/components/switch#api-reference)
 */
export const Base: Story = {
  args: {}
}

export const Disabled: Story = {
  args: {
    disabled: true
  }
}

export const DefaultChecked: Story = {
  args: {
    defaultChecked: true
  }
}

export const WithState: Story = {
  args: Base.args,
  render: (props) => {
    const [value, setValue] = useState<boolean>(false)

    return <Uncontrolled.SwitchBase {...props} checked={value} onCheckedChange={setValue} />
  }
}

export const WithExternalHandlers: Story = {
  args: {
    ...Base.args,
    externalHandlers: {
      onChange: (value) => {
        fn(() => toast(`handled external onChange ${value}`))
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
  },
  render: WithState.render
}
