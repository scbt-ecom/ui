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
    suffix: 'currency',
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
    label: 'Срок кредита',
    marks: [1, 3, 6, 12, 18],
    componentType: 'marks',
    readOnly: true,
    suffix: 'year',
    leftText: '1 год.',
    rightText: '18 лет.'
  }
}

export const MonthsVariant: Story = {
  render: (props) => {
    const [value, setValue] = useState<number>()

    return (
      <>
        <p>{value}</p>
        <Uncontrolled.SliderBase {...props} componentType='step' min={0} max={100} step={1} value={value} onChange={setValue} />
      </>
    )
  },
  args: {
    label: 'Срок кредита',
    min: 1,
    max: 12,
    suffix: 'month',
    leftText: '1 месяц.',
    rightText: '12 месяцев.'
  }
}

export const PercentVariantWithAdditionalSuffix: Story = {
  render: WithState.render,
  args: {
    componentType: 'step',
    label: 'Первоначальный взнос',
    min: 1,
    max: 100,
    suffix: 'percent',
    leftText: '1 %',
    rightText: '100 %',
    additionalSuffix: `/ ${400_000}`
  }
}

export const ReadOnly: Story = {
  render: WithState.render,
  args: {
    label: 'Сумма кредита',
    min: 1,
    max: 100,
    suffix: 'percent',
    leftText: '1 год.',
    rightText: '12 лет.',
    additionalSuffix: `/ ${400_000}`,
    readOnly: true
  }
}

export const WithMarks: Story = {
  render: WithState.render,
  args: {
    label: 'Срок кредита',
    suffix: 'year',
    componentType: 'marks',
    marks: [1, 2, 3, 6, 12, 24, 36],
    leftText: '1 год.',
    rightText: '36 лет',
    readOnly: true
  }
}

export const Disabled: Story = {
  render: WithState.render,
  args: {
    disabled: true,
    label: 'Срок кредита',
    min: 1,
    max: 12,
    suffix: 'month',
    leftText: '1 месяц.',
    rightText: '12 месяцев.'
  }
}
