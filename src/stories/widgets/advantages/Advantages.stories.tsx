import { type Meta, type StoryObj } from '@storybook/react'
import { mockCards } from './mocks'
import { Advantages } from '$/widgets/advantages'

const meta = {
  title: 'WIDGETS/Advantages',
  component: Advantages,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  }
} satisfies Meta<typeof Advantages>

export default meta

type Story = StoryObj<typeof Advantages>

export const ThreeCards: Story = {
  args: {
    config: {
      variant: 'threeCards',
      details: mockCards.toSpliced(-1, 1)
    }
  }
}

export const FourCards: Story = {
  args: {
    config: {
      variant: 'fourCards',
      details: mockCards
    }
  }
}
