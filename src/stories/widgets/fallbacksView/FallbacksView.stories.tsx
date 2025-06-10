'use docs'

import type { Meta, StoryObj } from '@storybook/react'
import { FallbacksView } from '$/widgets'

const meta = {
  title: 'Pages/FallbacksView',
  component: FallbacksView,
  parameters: {
    layout: 'centered'
  }
} satisfies Meta<typeof FallbacksView>

export default meta

type Story = StoryObj<typeof FallbacksView>

export const Base: Story = {
  args: {
    status: 'approve',
    navigationFn: () => {
      window.location.replace('https://long-app.sovcombank.ru/')
    }
  }
}

export const Reject: Story = {
  args: {
    ...Base.args,
    status: 'reject'
  }
}

export const Repeated: Story = {
  args: {
    ...Base.args,
    status: 'repeated'
  }
}

export const Error: Story = {
  args: {
    ...Base.args,
    status: 'error'
  }
}
