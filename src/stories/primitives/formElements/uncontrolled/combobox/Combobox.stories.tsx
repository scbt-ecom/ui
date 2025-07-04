'use docs'

import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Combobox, type ComboboxItemOption } from '$/shared/ui'

const options: ComboboxItemOption[] = [
  {
    value: 'value_1',
    label: 'Value 1',
    helperText: 'Helper text'
  },
  {
    value: 'value_2',
    label: 'Value 2',
    disabled: true
  },
  {
    value: 'value_3',
    label: 'Value 3',
    disabled: true
  },
  {
    value: 'value_4',
    label: 'Value 4'
  },
  {
    value: 'value_5',
    label: 'Value 5'
  },
  {
    value: 'value_6',
    label: 'Value 6'
  },
  {
    value: 'value_7',
    label: 'Value 7'
  },
  {
    value: 'value_8',
    label: 'Value 8'
  },
  {
    value: 'value_9',
    label: 'Value 9'
  },
  {
    value: 'value_10',
    label: 'Value 10'
  },
  {
    value: 'value_11',
    label: 'Value 11'
  }
]

const meta = {
  title: 'Form elements/uncontrolled/Combobox',
  component: Combobox,
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
    options,
    label: 'Select'
  }
} satisfies Meta<typeof Combobox>

export default meta

type Story<Multi extends boolean = false> = StoryObj<typeof Combobox<Multi>>

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
export const Controlled: Story = {
  args: {},
  render: (props) => {
    const [value, setValue] = useState<ComboboxItemOption | null>(null)

    return (
      <>
        <pre>{value && JSON.stringify(value, null, 2)}</pre>
        <Combobox {...props} multiple={false} value={value} onChange={setValue} />
      </>
    )
  }
}

export const Searchable: Story = {
  args: {
    ...Controlled.args,
    searchable: true
  },
  render: Controlled.render
}

export const Multiple: Story<true> = {
  args: {},
  render: (props) => {
    const [value, setValue] = useState<ComboboxItemOption[]>([])

    return (
      <>
        <pre>{value && JSON.stringify(value, null, 2)}</pre>
        <Combobox {...props} multiple value={value} onChange={setValue} />
      </>
    )
  }
}

export const Disabled: Story = {
  args: {
    ...Controlled.args,
    disabled: true
  },
  render: Controlled.render
}

export const ReadOnly: Story = {
  args: {
    ...Controlled.args,
    readOnly: true
  },
  render: Controlled.render
}

export const Invalid: Story = {
  args: {
    ...Controlled.args,
    invalid: true
  },
  render: Controlled.render
}
