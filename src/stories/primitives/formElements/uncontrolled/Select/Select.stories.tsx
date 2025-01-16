'use docs'

import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Icon, type SelectItemOption, Uncontrolled } from '$/shared/ui'

const options: SelectItemOption[] = [
  {
    value: 'value_1',
    label: 'Value 1',
    helperText: 'Nexus',
    attachment: {
      left: {
        icon: <Icon name='general/check' className='size-4' />,
        classes: {
          fieldAttachmentRoot: 'm-0'
        }
      }
    }
  },
  {
    value: 'value_2',
    label: 'Value 2'
  },
  {
    value: 'value_3',
    label: 'Value 3',
    helperText: 'Nexus'
  },
  {
    value: 'value_4',
    label: 'Value 4'
  },
  {
    value: 'value_5',
    label: 'Value 5',
    disabled: true
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
  }
]

const meta = {
  title: 'BASE/SelectBase',
  component: Uncontrolled.SelectBase,
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
    label: 'Test selector',
    options
  }
} satisfies Meta<typeof Uncontrolled.SelectBase>

export default meta

type Story = StoryObj<typeof Uncontrolled.SelectBase>

/**
 * \`Select\` компонент для выбора значений из выпадающего списка\n
 *
 * | Props                    | Type                                                              | Description                                       | Required  |
 * | ------------------------ | ----------------------------------------------------------------- | ------------------------------------------------- | --------- |
 * | \`isSearchable\`         | \`boolean\`                                                       | Свойство управляющее поиском                      | \`false\` |
 * | \`label\`                | \`string\`                                                        | Отображаемый лейбл                                | \`true\`  |
 * | \`isMulti\`              | \`boolean\`                                                       | Поддержка множественного выбора                   | \`false\` |
 * | \`invalid\`              | \`boolean\`                                                       | Пометить поле как не валидное                     | \`false\` |
 * | \`displayValue\`         | \`(option: SelectItemOption) => string\`                          | Функция для управления отображаемым значением     | \`false\` |
 * | \`classes\`              | \`SelectClasses\`                                                 | Дополнительные стили каждого внутреннего элемента | \`false\` |
 * | \`options\`              | \`SelectItemOption[]\`                                            | Список отображаемых значений                      | \`true\`  |
 * | \`onChange\`             | \`(value: SelectItemOption | SelectItemOption[] | null) => void\` | Функция для изменения значения                    | \`false\` |
 * | \`attachmentProps\`      | \`DeepPartial<FieldAttachmentProps>\`                             | Свойства дополнительной иконки                    | \`false\` |
 * | \`externalHandlers\`     | \`ExternalHandlers\`                                              | Внешние handlers которые можно прокинуть из вне   | \`false\` |
 *
 * Остальные свойства наследуются от [Headless UI](https://headlessui.com/react/combobox#component-api)
 */
export const Base: Story = {
  args: {}
}

export const WithState: Story = {
  args: {},
  render: (props) => {
    const [value, setValue] = useState<SelectItemOption | null>(null)

    return (
      <>
        {value ? (props.displayValue ? props.displayValue(value) : value.label) : 'Выберите значение'}
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/* @ts-expect-error */}
        <Uncontrolled.SelectBase {...props} value={value} onChange={setValue} />
      </>
    )
  }
}

export const WithMulti: Story = {
  args: {
    isMulti: true
  }
}

export const WithSearchable: Story = {
  args: {
    isSearchable: true
  }
}

export const WithBadge: Story = {
  args: {
    attachmentProps: {
      badge: '+25%'
    }
  }
}

export const WithSearchState: Story = {
  args: {
    ...WithSearchable.args
  },
  render: (props) => {
    const [inputValue, setInputValue] = useState<string>('')

    return (
      <>
        <p>Custom value: {inputValue}</p>
        <Uncontrolled.SelectBase {...props} inputValue={inputValue} onInputChange={setInputValue} />
      </>
    )
  }
}

export const WithExternalHandler: Story = {
  args: {
    isSearchable: true,
    externalHandlers: {
      onFocus: (e) => {
        console.warn(e, 'event onFocus')
      },
      onBlur: (e) => {
        console.warn(e, 'event onBlur')
      },
      onChange: (e) => {
        console.warn(e, 'event onChange')
      },
      onClick: (e) => {
        console.warn(e, 'event onClick')
      },
      onInputChange: (e) => {
        console.warn(e, 'event onInputChange')
      }
    }
  },
  render: WithState.render
}
