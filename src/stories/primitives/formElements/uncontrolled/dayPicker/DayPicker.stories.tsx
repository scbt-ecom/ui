'use docs'

import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { formatDateToLocaleString, Uncontrolled } from '$/shared/ui'

const meta = {
  title: 'BASE/DayPickerBase',
  component: Uncontrolled.DayPickerBase,
  parameters: {
    layout: 'centered'
  },
  decorators: [
    (Story) => (
      <div className='h-[400px] w-[800px]'>
        <Story />
      </div>
    )
  ],
  args: {
    label: 'Pick the date'
  }
} satisfies Meta<typeof Uncontrolled.DayPickerBase>

export default meta

type Story = StoryObj<typeof Uncontrolled.DayPickerBase>

/**
 * \`DayPicker\` компонент для выбора даты\n
 *
 * | Props       | Description                                 | Type                        | Required  |
 * | ----------- | ------------------------------------------- | --------------------------- | --------- |
 * | \`defaultOpen\` | Указывает, открыт ли календарь по умолчанию | \`boolean\`                 | \`false\` |
 * | \`value\`       | Значение поля                               | \`string\`                  | \`false\` |
 * | \`onChange\`    | Функция изменения значения                  | \`(value: string) => void\` | \`false\` |
 *
 * Остальные свойства наследуются от [MaskInput](?path=/docs/base-maskinput--docs&globals=viewport:fullscreen)\n
 */
export const Base: Story = {
  args: {}
}

export const Disabled: Story = {
  args: {
    disabled: true
  }
}

export const Invalid: Story = {
  args: {
    invalid: true
  }
}

export const WithState: Story = {
  args: Base.args,
  render: (props) => {
    const [value, setValue] = useState<string>('')

    return (
      <>
        {value.length > 0 && <p>{formatDateToLocaleString(new Date(value))}</p>}
        <Uncontrolled.DayPickerBase {...props} value={value} onChange={setValue} />
      </>
    )
  }
}
