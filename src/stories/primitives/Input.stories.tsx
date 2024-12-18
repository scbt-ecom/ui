import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { Icon, InputBase, type InputBaseProps } from '$/shared/ui'

const meta = {
  title: 'BASE/InputBase',
  component: InputBase,
  parameters: {
    layout: 'centered'
  },
  decorators: [
    (Story) => (
      <div className='w-[800px]'>
        <Story />
      </div>
    )
  ],
  tags: ['autodocs'],
  args: {
    label: 'Input'
  }
} satisfies Meta<typeof InputBase>

export default meta

type Story = StoryObj<typeof InputBase>

export const Base: Story = {
  args: {}
}

export const Invalid: Story = {
  args: {
    ...Base.args,
    invalid: true
  }
}

export const WithValue: Story = {
  args: {
    ...Base.args,
    value: 'Some value'
  }
}

const InputWithState = (props: InputBaseProps) => {
  const [value, setValue] = useState<string>('')

  return <InputBase {...props} value={value} onChange={(e) => setValue(e.target.value)} />
}

export const Controlled: Story = {
  args: Base.args,
  render: (props) => <InputWithState {...props} />
}

export const WithExternalStyles: Story = {
  args: {
    ...Base.args,
    classes: {
      label: 'text-color-negative'
    }
  }
}

export const Disabled: Story = {
  args: {
    ...Base.args,
    disabled: true
  }
}

export const WithAttachmentIcon: Story = {
  args: {
    ...Base.args,
    attachmentProps: {
      icon: <Icon name='general/calendar' className='text-icon-blue-grey-600' />,
      onClickIcon: fn()
    }
  }
}
