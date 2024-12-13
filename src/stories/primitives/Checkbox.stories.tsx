import type { Meta, StoryObj } from '@storybook/react'
import { CheckboxBase } from '$/shared/ui'

const meta = {
  title: 'BASE/CheckboxBase',
  component: CheckboxBase,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  args: {}
} satisfies Meta<typeof CheckboxBase>

export default meta

type Story = StoryObj<typeof CheckboxBase>

export const Base: Story = {
  args: {
    invalid: false,
    disabled: false
  }
}
