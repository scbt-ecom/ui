'use docs'

import type { Meta, StoryObj } from '@storybook/react'
import { FallbacksView } from '$/widgets'

const meta = {
  title: 'WIDGETS/FallbacksView',
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
    status: 'reject',
    navigationFn: () => {
      window.location.replace('https://long-app.sovcombank.ru/')
    }
  }
}

export const Repeated: Story = {
  args: {
    status: 'repeated',
    navigationFn: () => {
      window.location.replace('https://long-app.sovcombank.ru/')
    }
  }
}

export const Error: Story = {
  args: {
    status: 'error',
    navigationFn: () => {
      window.location.replace('https://long-app.sovcombank.ru/')
    }
  }
}
