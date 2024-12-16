import type { Meta, StoryObj } from '@storybook/react'
import { mockBenefitDataFourCards, mockBenefitDataThreeCards, mockBenefitDataTwoCards } from './model/mocks.tsx'
import { Benefit } from '$/widgets'

const meta = {
  title: 'WIDGETS/Benefit',
  component: Benefit,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className='h-screen'>
        <Story />
      </div>
    )
  ]
} satisfies Meta<typeof Benefit>

export default meta

type Story = StoryObj<typeof Benefit>

export const Base: Story = {
  render: () => (
    <>
      <Benefit {...mockBenefitDataThreeCards} />
    </>
  )
}

export const FourCards: Story = {
  render: () => (
    <>
      <Benefit {...mockBenefitDataFourCards} />
    </>
  )
}

export const TwoCards: Story = {
  render: () => (
    <>
      <Benefit {...mockBenefitDataTwoCards} />
    </>
  )
}
