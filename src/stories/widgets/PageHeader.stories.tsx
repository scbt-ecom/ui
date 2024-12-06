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
    phone: '8 800 000-00-00',
    phoneText: 'Бесплатно по России'
  }
}

export const WithButton: Story = {
  args: {
    variant: 'withButton'
  }
}

export const WithOtherLogo: Story = {
  args: {
    variant: 'withButton',
    logoType: 'business'
  }
}
