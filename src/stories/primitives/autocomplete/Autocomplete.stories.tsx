import type { Meta, StoryObj } from '@storybook/react'
import { type Data, useMockQuery } from './mockQuery'
import { Autocomplete } from '$/shared/ui'

const meta = {
  title: 'BASE/Autocomplete',
  component: Autocomplete<Data>,
  parameters: {
    layout: 'centered'
  },

  tags: ['autodocs']
} satisfies Meta<typeof Autocomplete<Data>>

export default meta
type Story = StoryObj<typeof Autocomplete<Data>>

export const Base: Story = {
  args: {
    label: 'VSCode dalboeb',
    queryHook: useMockQuery,
    formatter: (data, index) => ({
      id: index,
      label: data.value,
      value: data.value
    })
  }
}
