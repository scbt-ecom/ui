import type { Meta, StoryObj } from '@storybook/react'
import {
  mockLongBannerBase,
  mockLongBannerMulti,
  mockLongBannerMultiWithoutButton,
  mockLongBannerWithoutButton
} from '@/stories/widgets/LongBanner/model/mocks.tsx'
import { LongBanner } from '$/widgets/longBanner'

const meta = {
  title: 'WIDGETS/LongBanner',
  component: LongBanner,
  tags: ['autodocs']
} satisfies Meta<typeof LongBanner>

export default meta

type Story = StoryObj<typeof LongBanner>

export const Base: Story = {
  args: {
    ...mockLongBannerBase
  }
}

export const WithoutButton: Story = {
  args: {
    ...mockLongBannerWithoutButton
  }
}

export const Multi: Story = {
  args: {
    ...mockLongBannerMulti
  }
}

export const MultiWithoutButton: Story = {
  args: {
    ...mockLongBannerMultiWithoutButton
  }
}
