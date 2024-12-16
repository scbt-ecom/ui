import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { Icon, type MaskInputProps, Uncontrolled } from '$/shared/ui'

const meta = {
  title: 'BASE/MaskInput',
  component: Uncontrolled.MaskInput,
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
} satisfies Meta<typeof Uncontrolled.MaskInput>

export default meta

type Story = StoryObj<typeof Uncontrolled.MaskInput>

export const Base: Story = {
  args: {
    mask: ['C###CC ##', 'C###CC ###']
  }
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
    value: 'А123АА116'
  }
}

const InputWithState = (props: MaskInputProps) => {
  const [value, setValue] = useState<string>('')

  return <Uncontrolled.MaskInput {...props} value={value} onChange={(e) => setValue(e.target.value)} />
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

export const WithPhoneMask: Story = {
  args: {
    ...Base.args,
    mask: '+7 (###) ###-##-##'
  },
  render: (props) => <InputWithState {...props} />
}

export const WithPassportMask: Story = {
  args: {
    ...Base.args,
    mask: '## ## ######'
  },
  render: (props) => <InputWithState {...props} />
}

export const WithPartitionCodeMask: Story = {
  args: {
    ...Base.args,
    mask: '###-###'
  },
  render: (props) => <InputWithState {...props} />
}

export const WithSnilsCodeMask: Story = {
  args: {
    ...Base.args,
    mask: '####-####-### ##'
  },
  render: (props) => <InputWithState {...props} />
}

export const WithCardMask: Story = {
  args: {
    ...Base.args,
    mask: '#### #### #### ####'
  },
  render: (props) => <InputWithState {...props} />
}

export const WithCarSignMask: Story = {
  args: Base.args,
  render: (props) => <InputWithState {...props} />
}
