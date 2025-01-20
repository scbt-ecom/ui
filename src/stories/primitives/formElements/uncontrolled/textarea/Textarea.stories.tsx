'use docs'

import { useState } from 'react'
import toast from 'react-hot-toast'
import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { Icon, Uncontrolled } from '$/shared/ui'

const meta = {
  title: 'BASE/TextareaBase',
  component: Uncontrolled.TextareaBase,
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
    label: 'Some label',
    placeholder: 'Placeholder'
  }
} satisfies Meta<typeof Uncontrolled.TextareaBase>

export default meta

type Story = StoryObj<typeof Uncontrolled.TextareaBase>

/**
 * \`Textarea\` компонент для ввода информации\n
 *
 * | Props               | Description                                          | Type                                  | Required  |
 * | ------------------- | ---------------------------------------------------- | ------------------------------------- | --------- |
 * | \`label\`           | Отображаемый placeholder                             | \`string\`                            | \`true\`  |
 * | \`invalid\`         | Отображение не валидного поля                        | \`boolean\`                           | \`false\` |
 * | \`attachmentProps\` | Свойства дополнительной иконки                       | \`DeepPartial<FieldAttachmentProps>\` | \`false\` |
 * | \`classes\`         | Дополнительные стили внутренних компонентов          | \`TextareaBaseClasses\`               | \`false\` |
 *
 * Остальные свойства наследуются от [HTMLTextAreaElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTextAreaElement)\n
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

    return <Uncontrolled.TextareaBase {...props} value={value} onChange={(e) => setValue(e.target.value)} />
  }
}

export const WithExternalStyles: Story = {
  args: {
    ...Base.args,
    classes: {
      label: 'text-color-negative'
    }
  },
  render: Controlled.render
}

export const Disabled: Story = {
  args: {
    ...Base.args,
    disabled: true
  },
  render: Controlled.render
}

export const WithAttachmentIcon: Story = {
  args: {
    ...Base.args,
    attachmentProps: {
      icon: <Icon name='general/calendar' className='text-icon-blue-grey-600' />,
      onClickIcon: fn()
    }
  },
  render: Controlled.render
}

export const WithBadge: Story = {
  args: {
    ...Base.args,
    attachmentProps: {
      badge: '+25%'
    }
  },
  render: Controlled.render
}

export const WithExternalHandlers: Story = {
  args: {
    ...Base.args,
    externalHandlers: {
      onChange: (event) => {
        fn(() => toast(`handled external onChange ${event}`))
      },
      onClick: fn(() => {
        toast('handled external onClick')
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
