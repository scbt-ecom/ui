import type { Meta, StoryObj } from '@storybook/react'
import {
  mockBannerBase,
  mockBannerBaseFullImage,
  mockBannerBaseGradient,
  mockBannerBaseGradientAdvantages,
  mockBannerFullImageOnlyPrimaryButton,
  mockBannerFullImageWithAdvantages,
  mockBannerOnlyPrimaryButton,
  mockWithAdvantages
} from './model/mocks'
import { Banner, Header } from '$/widgets'

const meta = {
  title: 'WIDGETS/Banner',
  component: Banner,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className='h-screen'>
        <Story />
      </div>
    )
  ]
} satisfies Meta<typeof Banner>

export default meta

type Story = StoryObj<typeof Banner>

export const Base: Story = {
  render: () => (
    <>
      <Header
        config={{
          variant: 'withButton'
        }}
      />
      <Banner {...mockBannerBase} />
    </>
  )
}

export const OnlyPrimaryButton: Story = {
  render: () => (
    <>
      <Header
        config={{
          variant: 'withButton'
        }}
      />
      <Banner {...mockBannerOnlyPrimaryButton} />
    </>
  )
}

export const WithAdvantages: Story = {
  render: () => (
    <>
      <Header
        config={{
          variant: 'withButton'
        }}
      />
      <Banner {...mockWithAdvantages} />
    </>
  )
}

export const BaseFullImage: Story = {
  render: () => (
    <>
      <Header
        config={{
          variant: 'withButton'
        }}
      />
      <Banner {...mockBannerBaseFullImage} />
    </>
  )
}

export const FullImageOnlyPrimaryButton: Story = {
  render: () => (
    <>
      <Header
        config={{
          variant: 'withButton'
        }}
      />
      <Banner {...mockBannerFullImageOnlyPrimaryButton} />
    </>
  )
}

export const BaseFullImageWithAdvantages: Story = {
  render: () => (
    <>
      <Header
        config={{
          variant: 'withButton'
        }}
      />
      <Banner {...mockBannerFullImageWithAdvantages} />
    </>
  )
}

export const BaseGradient: Story = {
  render: () => (
    <>
      <Header
        config={{
          variant: 'withButton'
        }}
      />
      <Banner {...mockBannerBaseGradient} />
    </>
  )
}

export const BaseGradientWithAdvantages: Story = {
  render: () => (
    <>
      <Header
        config={{
          variant: 'withButton'
        }}
      />
      <Banner {...mockBannerBaseGradientAdvantages} />
    </>
  )
}
