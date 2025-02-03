'use docs'

import { useState } from 'react'
import toast from 'react-hot-toast'
import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { Icon, Uncontrolled } from '$/shared/ui'

const meta = {
  title: 'BASE/InputBase',
  component: Uncontrolled.InputBase,
  parameters: {
    layout: 'centered'
  },
  decorators: [
    (Story) => (
      <div className='mx-auto w-[600px]'>
        <Story />
      </div>
    )
  ],
  args: {
    label: 'Input'
  }
} satisfies Meta<typeof Uncontrolled.InputBase>

export default meta

type Story = StoryObj<typeof Uncontrolled.InputBase>

/**
 * \`Input\` компонент для ввода информации\n
 *
 * | Props               | Description                                          | Type                                  | Required  |
 * | ------------------- | ---------------------------------------------------- | ------------------------------------- | --------- |
 * | \`label\`           | Отображаемый placeholder                             | \`string\`                            | \`true\`  |
 * | \`invalid\`         | Отображение не валидного поля                        | \`boolean\`                           | \`false\` |
 * | \`renderValues\`    | Рендер дополнительных значений вместо базового ввода | \`() => React.JSX.Element | null\`    | \`false\` |
 * | \`attachmentProps\` | Свойства дополнительной иконки                       | \`DeepPartial<FieldAttachmentProps>\` | \`false\` |
 * | \`classes\`         | Дополнительные стили внутренних компонентов          | \`InputBaseClasses\`                  | \`false\` |
 *
 * Остальные свойства наследуются от [HTMLInputElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement)\n
 */
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

export const Controlled: Story = {
  args: Base.args,
  render: (props) => {
    const [value, setValue] = useState<string>('')

    return <Uncontrolled.InputBase {...props} value={value} onChange={(e) => setValue(e.target.value)} />
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
  },
  render: Controlled.render
}

export const WithTypeNumber: Story = {
  args: {
    ...Base.args,
    type: 'number'
  },
  render: (props) => {
    const [value, setValue] = useState<number>()

    return <Uncontrolled.InputBase {...props} value={value} onChange={(e) => setValue(Number(e.target.value))} />
  }
}
