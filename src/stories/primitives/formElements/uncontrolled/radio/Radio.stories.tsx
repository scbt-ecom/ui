'use docs'

import { useState } from 'react'
import toast from 'react-hot-toast'
import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { RadioGroupBase, type RadioOption } from '$/shared/ui'

const options: RadioOption[] = [
  {
    id: 0,
    value: 'value_1',
    label: 'value 1'
  },
  {
    id: 1,
    value: 'value_2',
    label: 'value 2',
    disabled: true
  },
  {
    id: 2,
    value: 'value_3',
    label: 'value 3'
  },
  {
    id: 3,
    value: 'value_4',
    label: 'value 4'
  },
  {
    id: 4,
    value: 'value_5',
    label: 'value 5'
  },
  {
    id: 5,
    value: 'value_6',
    label: 'value 6'
  },
  {
    id: 6,
    value: 'value_7',
    label: 'value 7'
  }
]

const meta = {
  title: 'Form elements/uncontrolled/RadioGroupBase',
  component: RadioGroupBase,
  parameters: {
    layout: 'centered'
  },
  args: {
    options
  }
} satisfies Meta<typeof RadioGroupBase>

export default meta

type Story = StoryObj<typeof RadioGroupBase>

/**
 * Checkbox компонент для управления \`boolean\` значением\n
 *
 * | Props            | Description                                    | Type                                | Required  |
 * | ---------------- | ---------------------------------------------- | ----------------------------------- | --------- |
 * | \`options\`      | Список отображаемых опций                      | \`RadioOption[]\`                   | \`true\`  |
 * | \`displayValue\` | Функция для управления отображаемым значением  | \`(option: RadioOption) => string\` | \`false\` |
 * | \`returnValue\`  | Функция для управления возвращаемым значением  | \`(option: RadioOption) => string\` | \`false\` |
 * | \`invalid\`      | Свойство для отображения не валидного поля     | \`boolean\`                         | \`false\` |
 * | \`classes\`      | Дополнительные стили внутренних компонентов    | \`RadioGroupClasses\`               | \`false\` |
 *
 * Остальные свойства наследуются от [Radix](https://www.radix-ui.com/primitives/docs/components/radio-group#api-reference)
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
        <RadioGroupBase {...props} value={value} onValueChange={setValue} />
        <p>{value.length > 0 ? value : 'Выберите значение'}</p>
      </>
    )
  }
}

export const WithCustomReturnValue: Story = {
  args: {
    ...Base.args,
    returnValue: (option) => option.label
  },
  render: WithState.render
}

export const WithCustomDisplayValue: Story = {
  args: {
    ...Base.args,
    displayValue: (option) => option.value
  },
  render: WithState.render
}

export const DisabledValueSelected: Story = {
  args: {
    ...Base.args,
    value: 'value_2'
  }
}

export const WithExternalHandlers: Story = {
  args: {
    ...Base.args,
    externalHandlers: {
      onChange: (value) => {
        fn(() => toast(`handled external onChange ${value}`))
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
  render: WithState.render
}
