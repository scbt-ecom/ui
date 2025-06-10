import type { Meta, StoryObj } from '@storybook/react'
import { fullMocks, withoutButtons, withoutButtonsAndItemList, withoutItemList } from './mocks'
import { InfoBlock } from '$/widgets'

const meta = {
  title: 'WIDGETS/InfoBlock',
  component: InfoBlock,
  tags: ['autodocs']
} satisfies Meta<typeof InfoBlock>

export default meta

type Story = StoryObj<typeof InfoBlock>

export const Base: Story = {
  args: fullMocks
}

export const WithoutButtons: Story = {
  args: withoutButtons
}

export const WithoutItemList: Story = {
  args: withoutItemList
}

export const WithoutButtonsAndItemList: Story = {
  args: withoutButtonsAndItemList
}
