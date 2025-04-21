import type { Meta, StoryObj } from '@storybook/react'
import { multipleCalculator, singleCalculator } from './mocks'
import { CalculatorRoot } from '$/widgets'

const meta = {
  title: 'WIDGETS/CalculatorRoot',
  component: CalculatorRoot,
  decorators: [(Story) => <div className='my-20'>{Story()}</div>]
} satisfies Meta<typeof CalculatorRoot>

export default meta

type Story = StoryObj<typeof CalculatorRoot>

export const MultipleCalculator: Story = {
  args: multipleCalculator
}

export const SingleCalculator: Story = {
  args: singleCalculator
}
