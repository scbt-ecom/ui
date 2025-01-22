'use docs'

import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Uncontrolled } from '$/shared/ui'

const meta = {
  title: 'BASE/InputOtpBase',
  component: Uncontrolled.InputOtpBase,
  parameters: {
    layout: 'centered'
  },
  decorators: [
    (Story) => {
      return (
        <div className='w-full'>
          <Story />
        </div>
      )
    }
  ],
  args: {}
} satisfies Meta<typeof Uncontrolled.InputOtpBase>

export default meta

type Story = StoryObj<typeof Uncontrolled.InputOtpBase>

export const Base: Story = {
  args: {}
}

export const Invalid: Story = {
  args: {
    invalid: true
  }
}

export const WithState: Story = {
  args: {},
  render: (props) => {
    const [value, setValue] = useState<string>('')

    return (
      <>
        <Uncontrolled.InputOtpBase {...props} value={value} onChange={setValue} />
      </>
    )
  }
}

export const WithExternalHandler: Story = {
  args: {
    externalHandlers: {
      onFocus: (e) => {
        console.warn(e, 'event onFocus')
      },
      onBlur: (e) => {
        console.warn(e, 'event onBlur')
      },
      onChange: (e) => {
        console.warn(e, 'event onChange')
      },
      onClick: (e) => {
        console.warn(e, 'event onClick')
      }
    }
  },
  render: WithState.render
}
