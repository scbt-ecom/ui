'use docs'

import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Uncontrolled } from '$/shared/ui'

const meta = {
  title: 'BASE/UploaderBase',
  component: Uncontrolled.UploaderBase,
  parameters: {
    layout: 'centered'
  },
  decorators: [
    (Story) => (
      <div className='w-full'>
        <Story />
      </div>
    )
  ],
  args: {}
} satisfies Meta<typeof Uncontrolled.UploaderBase>

export default meta

type Story = StoryObj<typeof Uncontrolled.UploaderBase>

export const Base: Story = {
  args: {
    value: []
  }
}

export const Invalid: Story = {
  args: {
    ...Base.args,
    invalid: true
  }
}

export const WithCustomClasses: Story = {
  args: {
    ...Base.args,
    classes: {
      input: {
        root: 'bg-inherit !bg-none'
      }
    }
  }
}

export const Controlled: Story = {
  args: Base.args,
  render: (props) => {
    const [value, setValue] = useState<File[]>([])

    return (
      <Uncontrolled.UploaderBase
        {...props}
        value={value}
        onChange={(value) => {
          setValue(value)
        }}
      />
    )
  }
}
