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
      <div className='flex items-center justify-center rounded-md bg-color-blue-grey-300 p-12'>
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
    Component: 'a',
    href: 'https://sovcombank.ru/',
    children: 'Совкомбанк',
    withIcon: false
  }
}

export const WithIcon: Story = {
  args: {
    Component: 'a',
    href: 'https://sovcombank.ru/',
    children: 'Совкомбанк',
    withIcon: true,
    intent: 'white'
  }
}

export const WithOtherIcon: Story = {
  args: {
    Component: 'a',
    href: 'https://sovcombank.ru/',
    children: 'Совкомбанк',
    withIcon: true,
    icon: 'general/close',
    intent: 'blue'
  }
}

export const Disabled: Story = {
  args: {
    Component: 'a',
    href: 'https://sovcombank.ru/',
    children: 'Совкомбанк',
    withIcon: true,
    intent: 'blue',
    disabled: true
  }
}
