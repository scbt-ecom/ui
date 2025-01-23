import type { Meta, StoryObj } from '@storybook/react'
import { MOCK_INTERLINKING_FOUR_COLS, MOCK_INTERLINKING_THREE_COLS, MOCK_INTERLINKING_TWO_COLS } from './mocks'
import { InterLinking } from '$/widgets'

const meta = {
  title: 'WIDGETS/InterLinking',
  component: InterLinking,
  tags: ['autodocs']
} satisfies Meta<typeof InterLinking>

export default meta

type Story = StoryObj<typeof InterLinking>

export const FourColumns: Story = {
  args: {
    ...MOCK_INTERLINKING_FOUR_COLS
  }
}

export const ThreeColumns: Story = {
  args: {
    ...MOCK_INTERLINKING_THREE_COLS
  }
}

export const TwoColumns: Story = {
  args: {
    ...MOCK_INTERLINKING_TWO_COLS
  }
}
