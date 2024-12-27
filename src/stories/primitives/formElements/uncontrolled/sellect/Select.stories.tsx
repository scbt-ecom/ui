// 'use docs'

import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Icon } from '$/shared/ui'
import { SelectBase, type SelectItemOption } from '$/shared/ui/formElements/uncontrolled/sellect'

const options: SelectItemOption[] = [
  {
    value: 'value_1',
    label: 'Value 1',
    helperText: 'Nexus',
    attachment: {
      left: {
        icon: <Icon name='general/check' className='size-6' />,
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
  title: 'BASE/SellectBase',
  component: SelectBase,
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
} satisfies Meta<typeof SelectBase>

export default meta

type Story = StoryObj<typeof SelectBase>

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
    const [value, setValue] = useState<string | null>('value_2')

    return (
      <>
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/* @ts-expect-error */}
        <SelectBase {...props} value={value} onValueChange={setValue} />
        {value || 'Выберите значение'}
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

export const WithCustomDisplayValue: Story = {
  args: {
    displayValue: (option) => option.value
  }
}
