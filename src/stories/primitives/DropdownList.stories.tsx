import type { Meta, StoryObj } from '@storybook/react'
import { DropdownItem, type DropdownItemOption } from '$/shared/ui'

const options: DropdownItemOption[] = [
  {
    value: 'value_1',
    label: 'Value 1',
    helperText: 'Helper text'
  },
  {
    value: 'value_2',
    label: 'Value 2'
  }
]

const meta = {
  title: 'Base/DropdownItem',
  component: DropdownItem,
  parameters: {
    layout: 'centered'
  },
  args: {
    multiple: true,
    item: options[0]
  },
  tags: ['autodocs']
} satisfies Meta<typeof DropdownItem>

export default meta

type Story = StoryObj<typeof meta>

export const Base: Story = {
  args: {
    onPick: () => {}
  }
}
