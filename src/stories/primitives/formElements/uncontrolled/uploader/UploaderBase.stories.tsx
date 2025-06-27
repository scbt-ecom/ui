'use docs'

import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { UploaderBase } from '$/shared/ui'

const meta = {
  title: 'Form elements/uncontrolled/UploaderBase',
  component: UploaderBase,
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
} satisfies Meta<typeof UploaderBase>

export default meta

type Story = StoryObj<typeof UploaderBase>

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
    const [files, setFiles] = useState<File[]>([])

    return (
      <UploaderBase
        {...props}
        value={files}
        onChange={(value) => {
          setFiles(value)
        }}
      />
    )
  }
}
