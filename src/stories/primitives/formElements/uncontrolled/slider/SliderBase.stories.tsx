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
    label: 'Test selector'
  }
} satisfies Meta<typeof Uncontrolled.SliderBase>

export default meta

type Story = StoryObj<typeof Uncontrolled.SliderBase>

export const WithState: Story = {
  args: {
    label: 'Сумма кредита',
    min: 30_000,
    max: 5_000_000,
    variant: 'credit',
    leftText: '30 тыс.',
    rightText: '5 млн.'
  },
  render: (props) => {
    const [value, setValue] = useState<number>()

    return (
      <>
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/* @ts-expect-error */}
        <Uncontrolled.SliderBase {...props} value={value} onChange={setValue} />
      </>
    )
  }
}
