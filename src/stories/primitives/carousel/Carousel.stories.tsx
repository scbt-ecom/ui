import type { Meta, StoryObj } from '@storybook/react'
import { Carousel } from '$/shared/ui'

const meta = {
  title: 'INTERACTIVE/Carousel',
  component: Carousel,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  }
} satisfies Meta<typeof Carousel>

export default meta
type Story = StoryObj<typeof meta>

export const Base: Story = {
  args: {}
}
