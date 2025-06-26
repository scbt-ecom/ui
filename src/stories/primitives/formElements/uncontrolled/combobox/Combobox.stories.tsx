'use docs'

import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { type ComboboxItemOption, Uncontrolled } from '$/shared/ui'

const meta = {
  title: 'Form elements/uncontrolled/Combobox',
  component: Uncontrolled.Combobox,
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
    multiple: false
  }
} satisfies Meta<typeof Uncontrolled.Combobox>

export default meta

type Story = StoryObj<typeof Uncontrolled.Combobox>

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
  args: {
    options,
    searchable: false,
    label: 'Select'
  },
  render: (props) => {
    const [value, setValue] = useState<ComboboxItemOption[]>([])

    return (
      <>
        <pre>{value && JSON.stringify(value, null, 2)}</pre>
        <Uncontrolled.Combobox {...props} multiple value={value} onChange={setValue} />
      </>
    )
  }
}
