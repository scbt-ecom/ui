'use docs'

import { useState } from 'react'
import toast from 'react-hot-toast'
import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { Icon, Uncontrolled } from '$/shared/ui'

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
  args: {
    label: 'Input'
  }
} satisfies Meta<typeof Uncontrolled.MaskInput>

export default meta

type Story = StoryObj<typeof Uncontrolled.MaskInput>

/**
 * Компонент маски очень умный, умеет обрабатывать специальные символы в том порядке, который определён маской\n
 *
 * | Props                       | Description                                             | Type                           | Required  |
 * | --------------------------- | ------------------------------------------------------- | ------------------------------ | --------- |
 * | \`mask\`                    | Маска, по которой будет определяться валидация символов | \`string | string[]\`          | \`true\`  |
 * | \`externalMaskDefinitions\` | Дополнительные валидаторы спец символов в маске         | \`Record<string, Definition>\` | \`false\` |
 *
 * Остальные свойства наследуются от [Input](?path=/docs/base-inputbase--docs)\n
 *
 * __Обрабатываемые символы__\n
 * | Symbol | Regexp                             | Description                                                                 |
 * | ------ | ---------------------------------- | --------------------------------------------------------------------------- |
 * | __#__  | \`/\\d/g\`                         | Любые числа                                                                 |
 * | __A__  | \`/[A-Za-zА-Яа-я]/g\`              | Любые буквы русского и английского алфавита                                 |
 * | __C__  | \`/([АВЕКМНОРСТУХавекмнорстух])/\` | Любые буквы, которые определены для использования в гос номерах автомобилей |
 */
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

export const Controlled: Story = {
  args: Base.args,
  render: (props) => {
    const [value, setValue] = useState<string>('')

    return <Uncontrolled.MaskInput {...props} value={value} onChange={(e) => setValue(e.target.value)} />
  }
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
  render: (props) => {
    const [value, setValue] = useState<string>('')

    return <Uncontrolled.MaskInput {...props} value={value} onChange={(e) => setValue(e.target.value)} />
  }
}

export const WithPassportMask: Story = {
  args: {
    ...Base.args,
    mask: '## ## ######'
  },
  render: (props) => {
    const [value, setValue] = useState<string>('')

    return <Uncontrolled.MaskInput {...props} value={value} onChange={(e) => setValue(e.target.value)} />
  }
}

export const WithPartitionCodeMask: Story = {
  args: {
    ...Base.args,
    mask: '###-###'
  },
  render: (props) => {
    const [value, setValue] = useState<string>('')

    return <Uncontrolled.MaskInput {...props} value={value} onChange={(e) => setValue(e.target.value)} />
  }
}

export const WithSnilsCodeMask: Story = {
  args: {
    ...Base.args,
    mask: '####-####-### ##'
  },
  render: (props) => {
    const [value, setValue] = useState<string>('')

    return <Uncontrolled.MaskInput {...props} value={value} onChange={(e) => setValue(e.target.value)} />
  }
}

export const WithCardMask: Story = {
  args: {
    ...Base.args,
    mask: '#### #### #### ####'
  },
  render: (props) => {
    const [value, setValue] = useState<string>('')

    return <Uncontrolled.MaskInput {...props} value={value} onChange={(e) => setValue(e.target.value)} />
  }
}

export const WithCarSignMask: Story = {
  args: Base.args,
  render: (props) => {
    const [value, setValue] = useState<string>('')

    return <Uncontrolled.MaskInput {...props} value={value} onChange={(e) => setValue(e.target.value)} />
  }
}

export const WithExternalHandlers: Story = {
  args: {
    ...Base.args,
    externalHandlers: {
      onClick: fn(() => {
        toast('handled external onClick')
      }),
      onChange: fn(() => {
        toast('handled external onChange')
      }),
      onBlur: fn(() => {
        toast('handled external onBlur')
      }),
      onFocus: fn(() => {
        toast('handled external onFocus')
      })
    }
  }
}
