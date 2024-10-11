import type { Meta, StoryObj } from '@storybook/react'
import { Banner, PageHeader } from '$/widgets'
import {
  mockBannerBase,
  mockBannerBaseFullImage,
  mockBannerOnlyPrimaryButton,
  mockWithAdvantages
} from '$/widgets/banner/model/helpers'

const meta = {
  title: 'WIDGETS/Banner',
  component: Banner,
  tags: ['autodocs']
} satisfies Meta<typeof Banner>

export default meta

type Story = StoryObj<typeof Banner>

export const Base: Story = {
  render: () => (
    <>
      <PageHeader variant='withButton' />
      <Banner {...mockBannerBase} />
    </>
  )
}

export const OnlyPrimaryButton: Story = {
  render: () => (
    <>
      <PageHeader variant='withButton' />
      <Banner {...mockBannerOnlyPrimaryButton} />
    </>
  )
}

export const WithAdvantages: Story = {
  render: () => (
    <>
      <PageHeader variant='withButton' />
      <Banner {...mockWithAdvantages} />
    </>
  )
}

export const BaseFullImage: Story = {
  render: () => (
    <>
      <PageHeader variant='withButton' />
      <Banner {...mockBannerBaseFullImage} />
    </>
  )
}
