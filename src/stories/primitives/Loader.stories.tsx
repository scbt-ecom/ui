import type { Meta, StoryObj } from '@storybook/react'
import { Loader } from '$/shared/ui'

const meta = {
  title: 'Base/Loader',
  component: Loader,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className='flex size-28 items-center justify-center rounded-md bg-color-blue-grey-500'>
        <Story />
      </div>
    )
  ]
} satisfies Meta<typeof Loader>

export default meta

type Story = StoryObj<typeof meta>

export const Base: Story = {
  args: {
    size: 'md',
    intent: 'secondary',
    position: 'static'
  }
}

export const WithText: Story = {
  args: {
    size: 'md',
    intent: 'secondary',
    position: 'static',
    text: 'Загрузка'
  }
}
