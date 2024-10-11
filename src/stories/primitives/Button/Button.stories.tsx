import toast from 'react-hot-toast'
import type { Meta, StoryObj } from '@storybook/react'
import { Button, Icon } from '$/shared/ui'

const meta = {
  title: 'BASE/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  }
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Base: Story = {
  args: {
    size: 'md',
    children: 'Button',
    intent: 'primary',
    textFormat: 'initial',
    isLoading: false,
    onClick: () => toast.success('Clicked')
  }
}

export const AllVariantsButtons: Story = {
  render: () => (
    <div className='flex flex-col gap-8'>
      <div className='flex flex-col gap-3'>
        <strong className='text-color-tetriary'># Primary</strong>
        <div className='flex items-center gap-5'>
          <Button intent='primary' size='lg'>
            Button
          </Button>
          <Button intent='primary' size='md'>
            Button
          </Button>
          <Button intent='primary' size='sm'>
            Button
          </Button>
          <Button intent='primary' size='sm' disabled>
            Button
          </Button>
          <Button intent='primary' size='sm' isLoading>
            Button
          </Button>
        </div>
      </div>

      <div className='flex flex-col gap-3'>
        <strong className='text-color-tetriary'># Secondary</strong>
        <div className='flex items-center gap-5'>
          <Button intent='secondary' size='lg'>
            Button
          </Button>
          <Button intent='secondary' size='md'>
            Button
          </Button>
          <Button intent='secondary' size='sm'>
            Button
          </Button>
          <Button intent='secondary' size='sm' disabled>
            Button
          </Button>
          <Button intent='secondary' size='sm' isLoading>
            Button
          </Button>
        </div>
      </div>

      <div className='flex flex-col gap-3'>
        <strong className='text-color-tetriary'># Ghost</strong>
        <div className='flex items-center gap-5'>
          <Button intent='ghost' size='lg'>
            Button
          </Button>
          <Button intent='ghost' size='md'>
            Button
          </Button>
          <Button intent='ghost' size='sm'>
            Button
          </Button>
          <Button intent='ghost' size='sm' disabled>
            Button
          </Button>
          <Button intent='ghost' size='sm' isLoading>
            Button
          </Button>
        </div>
      </div>

      <div className='flex flex-col gap-3'>
        <strong className='text-color-tetriary'># Negative</strong>
        <div className='flex items-center gap-5'>
          <Button intent='negative' size='lg'>
            Button
          </Button>
          <Button intent='negative' size='md'>
            Button
          </Button>
          <Button intent='negative' size='sm'>
            Button
          </Button>
          <Button intent='negative' size='sm' disabled>
            Button
          </Button>
          <Button intent='negative' size='sm' isLoading>
            Button
          </Button>
        </div>
      </div>

      <div className='flex flex-col gap-3'>
        <strong className='text-color-tetriary'># Text format</strong>
        <div className='flex items-center gap-5'>
          <Button intent='primary' size='lg' textFormat='capitalize'>
            capitalize
          </Button>
          <Button intent='primary' size='md' textFormat='uppercase'>
            uppercase
          </Button>
          <Button intent='primary' size='sm' textFormat='lowercase'>
            lowercase
          </Button>
          <Button intent='primary' size='sm' textFormat='initial'>
            initial
          </Button>
        </div>
      </div>

      <div className='flex flex-col gap-3'>
        <strong className='text-color-tetriary'># With icons</strong>
        <div className='flex items-center gap-5'>
          <Button iconLeft={<Icon name='general/check' />} intent='primary' size='lg'>
            Button
          </Button>
          <Button iconLeft={<Icon name='general/check' />} iconRight={<Icon name='general/check' />} intent='primary' size='md'>
            Button
          </Button>
          <Button iconRight={<Icon name='general/check' />} intent='primary' size='sm'>
            Button
          </Button>
        </div>
      </div>
    </div>
  )
}
