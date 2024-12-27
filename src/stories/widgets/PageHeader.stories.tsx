import type { Meta, StoryObj } from '@storybook/react'
import { PageHeader } from '$/widgets'

const meta = {
  title: 'WIDGETS/PageHeader',
  component: PageHeader,
  tags: ['autodocs']
} satisfies Meta<typeof PageHeader>

export default meta

type Story = StoryObj<typeof PageHeader>

export const WithPhone: Story = {
  args: {
    variant: 'withPhone',
    phoneProps: {
      phone: '8 800 000-00-00',
      text: 'Бесплатно по России'
    }
  }
}

export const WithButton: Story = {
  args: {
    variant: 'withButton'
  }
}

export const Empty: Story = {
  args: {
    variant: 'empty'
  }
}

export const WithOtherLogo: Story = {
  args: {
    variant: 'withButton',
    logoType: 'business'
  }
}
