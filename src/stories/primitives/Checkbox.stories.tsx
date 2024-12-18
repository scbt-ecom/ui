import type { Meta, StoryObj } from '@storybook/react'
import { Uncontrolled } from '$/shared/ui'

const meta = {
  title: 'BASE/CheckboxBase',
  component: Uncontrolled.CheckboxBase,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  args: {}
} satisfies Meta<typeof Uncontrolled.CheckboxBase>

export default meta

type Story = StoryObj<typeof Uncontrolled.CheckboxBase>

export const Base: Story = {
  args: {
    invalid: false,
    disabled: false
  }
}
