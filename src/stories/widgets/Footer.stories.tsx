import { type Meta, type StoryObj } from '@storybook/react'
import { Footer } from '$/widgets'

const meta = {
  title: 'WIDGETS/Footer',
  component: Footer,
  tags: ['autodocs'],
  decorators: [(Story) => <div className='flex min-h-screen min-w-full items-center justify-center'>{Story()}</div>]
} satisfies Meta<typeof Footer>

export default meta

type Story = StoryObj<typeof Footer>

export const Base: Story = {
  args: {
    withLigal: false,
    withNavLinks: false,
    withPhones: false,
    withSiteMap: false
  }
}

export const BaseWithLigal: Story = {
  args: {
    withNavLinks: false,
    withPhones: false,
    withSiteMap: false
  }
}

export const Seo: Story = {
  args: {
    withLigal: false
  }
}
