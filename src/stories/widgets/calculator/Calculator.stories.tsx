import type { Meta, StoryObj } from '@storybook/react'
import { multipleCalculator, singleCalculator } from './mocks'
import { Calculator } from '$/widgets'

const meta = {
  title: 'WIDGETS/Calculator',
  component: Calculator,
  decorators: [(Story) => <div className='my-20'>{Story()}</div>]
} satisfies Meta<typeof Calculator>

export default meta

type Story = StoryObj<typeof Calculator>

export const MultipleCalculator: Story = {
  args: multipleCalculator
}

export const SingleCalculator: Story = {
  args: singleCalculator
}
