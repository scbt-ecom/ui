'use docs'

import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { type SelectItemOption, Uncontrolled } from '$/shared/ui'

const generateOptions = (length: number): SelectItemOption[] =>
  Array.from({ length }).map((_, index) => ({
    value: `value_${index + 1}`,
    label: `Value ${index + 1}`
  }))

const meta = {
  title: 'BASE/SelectBase',
  component: Uncontrolled.SelectBase,
  parameters: {
    layout: 'centered'
  },
  decorators: [
    (Story, context) => {
      const { args } = context

      const [optionsCount, setOptionsCount] = useState<number>(10)

      return (
        <div className='mt-[100px] flex w-[600px] flex-col gap-y-2'>
          <label>
            Количество элементов
            <select
              className='ml-1 rounded-sm border'
              value={optionsCount}
              onChange={({ target }) => setOptionsCount(Number(target.value))}
            >
              <option value={10}>10</option>
              <option value={100}>100</option>
              <option value={250}>250</option>
              <option value={500}>500</option>
              <option value={1000}>1000</option>
              <option value={10000}>10000</option>
            </select>
          </label>
          <Story
            {...context}
            args={{
              ...args,
              options: generateOptions(optionsCount)
            }}
          />
        </div>
      )
    }
  ],
  args: {
    label: 'Test selector',
    options: generateOptions(10)
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
 * | \`emptyList\`            | \`(query?: string) => React.ReactNode\`                           | Кастомизация отображения текста при пустом списке | \`false\` |
 *
 * Остальные свойства наследуются от [Headless UI](https://headlessui.com/react/combobox#component-api)
 */
export const Base: Story = {
  args: {}
}

export const WithState: Story = {
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

export const WithReset: Story = {
  args: {
    reset: 'Очистить'
  },
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
  },
  render: (props) => {
    const [value, setValue] = useState<SelectItemOption | SelectItemOption[] | null>(null)

    return (
      <>
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/* @ts-expect-error */}
        <Uncontrolled.SelectBase {...props} options={generateOptions(10)} value={value} onChange={setValue} />
      </>
    )
  }
}

export const WithSearchable: Story = {
  args: {
    isSearchable: true
  },
  render: WithState.render
}

export const WithBadge: Story = {
  args: {
    attachmentProps: {
      badge: '+25%'
    }
  },
  render: WithState.render
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

export const Virtual: Story = {
  args: {
    virtual: true
  },
  render: WithState.render
}

export const WithCustomEmptyList: Story = {
  args: {
    ...WithSearchState.args,
    emptyList: (query) => (query?.length ? null : <p className='py-4 text-center align-middle'>Я Лупа, а ты Пупа</p>)
  },
  render: WithSearchState.render
}
