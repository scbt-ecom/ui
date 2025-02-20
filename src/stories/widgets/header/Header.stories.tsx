import type { Meta, StoryObj } from '@storybook/react'
import { Header } from '$/widgets'

const meta = {
  title: 'WIDGETS/PageHeader',
  component: Header,
  tags: ['autodocs']
} satisfies Meta<typeof Header>

export default meta

type Story = StoryObj<typeof Header>

export const WithPhone: Story = {
  args: {
    config: {
      variant: 'withPhone',
      details: {
        phone: '88000000000',
        text: 'Бесплатно по России'
      }
    }
  }
}

export const WithButton: Story = {
  args: {
    config: {
      variant: 'withButton'
    }
  }
}

export const Empty: Story = {
  args: {
    config: {
      variant: 'empty',
      details: {}
    }
  }
}

export const WithOtherLogo: Story = {
  args: {
    logoType: 'business',
    config: {
      variant: 'withButton'
    }
  }
}
