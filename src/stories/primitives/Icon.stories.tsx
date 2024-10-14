import type { Meta, StoryObj } from '@storybook/react'
import { Icon } from '$/shared/ui'

const meta = {
  title: 'Icons/Icon',
  component: Icon,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  }
} satisfies Meta<typeof Icon>
type Story = StoryObj<typeof Icon>

export default meta

export const Common: Story = {
  render: () => (
    <div className='flex gap-4'>
      <Icon name='general/check' className='text-icon-positive-default' />
      <Icon name='general/close' className='text-icon-negative-default' />
    </div>
  )
}

export const SovcombankLogos: Story = {
  render: () => (
    <div className='grid grid-cols-2 gap-16 rounded-md bg-color-blue-grey-300 p-6'>
      <Icon name='brandLogos/logoBlack' className='h-[32px] w-[192px]' />
      <Icon name='brandLogos/logoGray' className='h-[32px] w-[192px]' />
      <Icon name='brandLogos/logoWhite' className='h-[32px] w-[192px]' />
      <Icon name='brandLogos/logoBusiness' className='h-[32px] w-[192px]' />
      <Icon name='brandLogos/logoInsurance' className='h-[32px] w-[192px]' />
      <Icon name='brandLogos/logoBusiness' className='h-[32px] w-[192px]' />
    </div>
  )
}
