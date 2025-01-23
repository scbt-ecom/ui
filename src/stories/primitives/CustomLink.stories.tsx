import type { Meta, StoryObj } from '@storybook/react'
import { CustomLink } from '$/shared/ui'

const meta = {
  title: 'Navigation/CustomLink',
  component: CustomLink,
  parameters: {
    layout: 'centered'
  },
  decorators: [
    (Story) => (
      <div className='bg-color-blue-grey-300 flex items-center justify-center rounded-md p-12'>
        <Story />
      </div>
    )
  ],

  tags: ['autodocs']
} satisfies Meta<typeof CustomLink>

export default meta

type Story = StoryObj<typeof meta>

export const Base: Story = {
  args: {
    href: 'https://sovcombank.ru/',
    children: 'Совкомбанк',
    icon: 'arrows/arrowLink'
  }
}

export const WithIcon: Story = {
  args: {
    href: 'https://sovcombank.ru/',
    children: 'Совкомбанк',
    intent: 'white',
    icon: 'arrows/arrowLink'
  }
}

export const WithOtherIcon: Story = {
  args: {
    href: 'https://sovcombank.ru/',
    children: 'Совкомбанк',
    icon: 'general/close',
    intent: 'blue'
  }
}

export const NoIcon: Story = {
  args: {
    href: 'https://sovcombank.ru/',
    children: 'Совкомбанк',
    intent: 'blue'
  }
}

export const Disabled: Story = {
  args: {
    href: 'https://sovcombank.ru/',
    children: 'Совкомбанк',
    intent: 'blue',
    disabled: true
  }
}
