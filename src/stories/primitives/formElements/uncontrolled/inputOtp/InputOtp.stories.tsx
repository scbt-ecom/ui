'use docs'

import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { InputOtpBase } from '$/shared/ui'

const meta = {
  title: 'Form elements/uncontrolled/InputOtpBase',
  component: InputOtpBase,
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
} satisfies Meta<typeof InputOtpBase>

export default meta

type Story = StoryObj<typeof InputOtpBase>

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
        <InputOtpBase {...props} value={value} onChange={setValue} />
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
