import type { Meta, StoryObj } from '@storybook/react'
import { Divider } from '$/shared/ui'
import { cn } from '$/shared/utils'

const meta = {
  title: 'Base/Divider',
  component: Divider,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  render: (props) => (
    <div
      className={cn('flex h-[40px] items-center gap-4', {
        'flex-col': props.direction === 'horizontal'
      })}
    >
      <div className='h-full w-[40px] bg-color-negative' />
      <Divider {...props} />
      <div className='h-full w-[40px] bg-color-negative' />
    </div>
  )
} satisfies Meta<typeof Divider>

export default meta

type Story = StoryObj<typeof meta>

export const Base: Story = {
  args: {}
}

export const Horizontal: Story = {
  args: {
    direction: 'horizontal'
  }
}

export const WithHexColor: Story = {
  args: {
    color: '#00ffff'
  }
}

export const WithRgbColor: Story = {
  args: {
    color: 'rgb(25, 31, 255)'
  }
}

export const WithRgbaColor: Story = {
  args: {
    color: 'rgba(0, 0, 0, 0.3)'
  }
}

export const WithCustomLength: Story = {
  args: {
    height: '50%'
  }
}

export const Bolder: Story = {
  args: {
    width: 2
  }
}
