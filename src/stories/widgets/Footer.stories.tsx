import { type Meta, type StoryObj } from '@storybook/react'
import { Footer } from '$/widgets'

const meta = {
  title: 'WIDGETS/Footer',
  component: Footer,
  tags: ['autodocs']
} satisfies Meta<typeof Footer>

export default meta

type Story = StoryObj<typeof Footer>

export const Base: Story = {
  args: {
    renderBlocks: {
      withLigal: false,
      withNavLinks: false,
      withPhones: false,
      withSiteMap: false
    }
  }
}

export const WithPhone: Story = {
  args: {
    renderBlocks: {
      withLigal: false,
      withNavLinks: false,
      withPhones: true,
      withSiteMap: false
    },
    phones: [{ text: 'Звонок по России (бесплатно)', phone: '8 800 100-00-06' }]
  }
}

export const BaseWithLigal: Story = {
  args: {
    renderBlocks: {
      withNavLinks: false,
      withPhones: false,
      withSiteMap: false
    }
  }
}

export const Seo: Story = {
  args: {
    renderBlocks: {
      withLigal: false
    }
  }
}
