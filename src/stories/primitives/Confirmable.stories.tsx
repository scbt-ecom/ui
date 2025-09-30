import toast from 'react-hot-toast'
import type { Meta, StoryObj } from '@storybook/react'
import { Button, Confirmable, Icon } from '$/shared/ui'

const meta = {
  title: 'BASE/Confirmable',
  component: Confirmable,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  args: {
    children: (
      <Button className='h-6 w-6 p-0' intent='ghost'>
        <Icon name='general/close' className='size-4 text-color-negative' />
      </Button>
    ),
    approve: () => (
      <Button className='h-6 w-6 p-0' intent='ghost' onClick={() => toast.success('Удалено')}>
        <Icon className='size-4' name='general/check' />
      </Button>
    ),
    reject: () => (
      <Button className='h-6 w-6 p-0' intent='ghost' onClick={() => toast.success('Отменено')}>
        <Icon className='size-4' name='general/close' />
      </Button>
    )
  }
} satisfies Meta<typeof Confirmable>

export default meta
type Story = StoryObj<typeof meta>

export const Base: Story = {}

export const TopsidePopover: Story = {
  args: {
    side: 'top'
  }
}
