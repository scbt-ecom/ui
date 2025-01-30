import type { Meta, StoryObj } from '@storybook/react'
import { Icon, Notification } from '$/shared/ui'

const meta = {
  title: 'Base/Toast',
  component: Notification,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  }
} satisfies Meta<typeof Notification>
type Story = StoryObj<typeof Notification>

export default meta

export const WithIconTextLink: Story = {
  args: {
    text: 'Установите или обновите его до последней версии по одной из ссылок ниже или по QR-коду',
    intent: 'info',
    link: 'https://sovcombank.ru/',
    customIcon: <Icon name='general/check' className='size-5' />
  }
}
