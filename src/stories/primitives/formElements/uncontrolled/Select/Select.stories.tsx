'use docs'

import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Icon, type SelectItemOption, Uncontrolled } from '$/shared/ui'

const options: SelectItemOption[] = [
  {
    id: 0,
    value: 'value_1',
    label: 'Value 1',
    additionalText: 'Nexus',
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
    id: 1,
    value: 'value_2',
    label: 'Value 2'
  },
  {
    id: 2,
    value: 'value_3',
    label: 'Value 3',
    additionalText: 'Nexus'
  },
  {
    id: 3,
    value: 'value_4',
    label: 'Value 4'
  },
  {
    id: 4,
    value: 'value_5',
    label: 'Value 5',
    disabled: true
  },
  {
    id: 5,
    value: 'value_6',
    label: 'Value 6'
  },
  {
    id: 6,
    value: 'value_7',
    label: 'Value 7'
  },
  {
    id: 7,
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

// TODO: Попробовать сделать авто генерацию таблицы пропсов
/**
 * \`Select\` компонент для выбора значений из выпадающего списка\n
 *
 * | Props                    | Type                                     | Description                                            | Required  |
 * | ------------------------ | ---------------------------------------- | ------------------------------------------------------ | --------- |
 * | \`isSearchable\`         | \`boolean\`                              | Свойство управляющее поиском                           | \`false\` |
 * | \`isMulti\`              | \`boolean\`                              | Поддержка множественного выбора                        | \`false\` |
 * | \`invalid\`              | \`boolean\`                              | Пометить поле как не валидное                          | \`false\` |
 * | \`returnValue\`          | \`(option: SelectItemOption) => string\` | Функция для управления возвращаемым значением          | \`false\` |
 * | \`displayValue\`         | \`(option: SelectItemOption) => string\` | Функция для управления отображаемым значением          | \`false\` |
 * | \`classes\`              | \`SelectClasses\`                        | Дополнительные стили каждого внутреннего элемента      | \`false\` |
 * | \`options\`              | \`SelectItemOption[]\`                   | Список отображаемых значений                           | \`true\`  |
 * | \`filterOptionDisabled\` | \`boolean\`                              | Свойство для выключения фильтрации элементов по поиску | \`false\` |
 *
 * Остальные свойства наследуются от [React Select](https://react-select.com/props)
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
