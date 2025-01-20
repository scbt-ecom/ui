'use docs'

import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Uncontrolled } from '$/shared/ui'

const meta = {
  title: 'BASE/SliderBase',
  component: Uncontrolled.SliderBase,
  parameters: {
    layout: 'centered'
  },
  decorators: [
    (Story) => (
      <div className='w-[800px]'>
        <Story />
      </div>
    )
  ],
  args: {
    label: 'Test selector',
    min: 30_000,
    max: 5_000_000,
    variant: 'credit',
    leftText: '30 тыс.',
    rightText: '5 млн.'
  }
} satisfies Meta<typeof Uncontrolled.SliderBase>

export default meta

type Story = StoryObj<typeof Uncontrolled.SliderBase>

export const WithState: Story = {
  args: {
    label: 'Сумма кредита'
  },
  render: (props) => {
    const [value, setValue] = useState<number>()

    return (
      <>
        <Uncontrolled.SliderBase {...props} value={value} onChange={setValue} />
      </>
    )
  }
}

export const YearsVariant: Story = {
  render: WithState.render,
  args: {
    label: 'Сумма кредита',
    min: 1,
    max: 12,
    variant: 'years',
    leftText: '1 год.',
    rightText: '12 лет.'
  }
}

export const Disabled: Story = {
  render: WithState.render,
  args: {
    disabled: true,
    label: 'Сумма кредита',
    min: 1,
    max: 12,
    variant: 'years',
    leftText: '1 год.',
    rightText: '12 лет.'
  }
}
