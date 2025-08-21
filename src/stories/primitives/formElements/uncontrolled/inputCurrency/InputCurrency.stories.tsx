'use docs'

import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { defaultCurrencyOptions } from './constants'
import { type CurrencyValue, InputCurrencyBase } from '$/shared/ui'

const meta = {
  title: 'Form elements/uncontrolled/InputCurrencyBase',
  component: InputCurrencyBase,
  parameters: {
    layout: 'centered'
  },
  args: {
    label: 'Input',
    currencies: defaultCurrencyOptions
  }
} satisfies Meta<typeof InputCurrencyBase>

export default meta

type Story = StoryObj<typeof InputCurrencyBase>

/**
 * \`Input\` компонент для ввода информации\n
 *
 * | Props               | Description                                          | Type                                  | Required  |
 * | ------------------- | ---------------------------------------------------- | ------------------------------------- | --------- |
 * | \`label\`           | Отображаемый placeholder                             | \`string\`                            | \`true\`  |
 * | \`invalid\`         | Отображение не валидного поля                        | \`boolean\`                           | \`false\` |
 * | \`renderValues\`    | Рендер дополнительных значений вместо базового ввода | \`() => React.JSX.Element | null\`    | \`false\` |
 * | \`attachmentProps\` | Свойства дополнительной иконки                       | \`DeepPartial<FieldAttachmentProps>\` | \`false\` |
 * | \`classes\`         | Дополнительные стили внутренних компонентов          | \`InputCurrencyBaseClasses\`                  | \`false\` |
 *
 * Остальные свойства наследуются от [HTMLInputElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement)\n
 */
export const Controlled: Story = {
  render: (props) => {
    const [value, setValue] = useState<CurrencyValue>({ value: '', currency: null })

    return (
      <>
        <InputCurrencyBase {...props} value={value} onChange={setValue} />
        <button onClick={() => console.log(value)}>Submit</button>
      </>
    )
  }
}
