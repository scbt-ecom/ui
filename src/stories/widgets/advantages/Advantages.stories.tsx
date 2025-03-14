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
    details: {
      items: mockCards.toSpliced(-1, 1),
      variant: 'threeCards'
    }
  }
}

export const FourCards: Story = {
  args: {
    details: {
      variant: 'fourCards',
      items: mockCards
    }
  }
}
