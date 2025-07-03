'use docs'

import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { object, type TypeOf } from 'zod'
import { HookForm } from '../utils'
import { type ComboboxControlProps, type ComboboxItemOption, Controlled } from '$/shared/ui'
import { zodValidators } from '$/shared/validation'

const generateOptions = (length: number): ComboboxItemOption[] =>
  Array.from({ length }).map((_, index) => ({
    value: `value_${index + 1}`,
    label: `Value ${index + 1}`
  }))

const schema = object({
  test: zodValidators.base.getSelectSchema()
})

const meta = {
  title: 'Form elements/controlled/ComboboxControl',
  component: Controlled.ComboboxControl,
  parameters: {
    layout: 'centered'
  },
  decorators: [
    (Story, context) => {
      const { args } = context

      const [optionsCount, setOptionsCount] = useState<number>(10)

      return (
        <div className='flex flex-col gap-y-2'>
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
    label: 'Input',
    name: 'test'
  },
  render: (props) => (
    <HookForm<ComboboxControlProps, TypeOf<typeof schema>>
      {...props}
      schema={schema}
      defaultValues={{ test: null }}
      renderComponent={(componentProps: ComboboxControlProps) => <Controlled.ComboboxControl {...componentProps} />}
    />
  )
} satisfies Meta<typeof Controlled.ComboboxControl>

export default meta

type Story = StoryObj<typeof Controlled.ComboboxControl>

/**
 * \`SelectControl\` компонент, управляемый библиотекой \`react-hook-form\`\n
 *
 * | Props        | Description                         | Type                             | Required  |
 * | ------------ | ----------------------------------- | -------------------------------- | --------- |
 * | \`control\`  | Контрол объект для управления полем | \`Control\<TFieldValues\>\`      | \`true\`  |
 * | \`name\`     | Имя поля                            | \`string\`                       | \`true\`  |
 * | \`classes\`  | Дополнительные стили компонента     | \`SelectControlClasses\`         | \`false\` |
 * | \`helperText\` | Дополнительный текст                | \`string\`                       | \`false\` |
 *
 * Остальные свойства наследуются от [Select](?path=/docs/base-selectbase--docs)\n
 */
export const Base: Story = {
  args: {}
}

export const WithDisabled: Story = {
  args: {
    disabled: true
  }
}

export const WithSearchable: Story = {
  args: {
    searchable: true
  }
}

export const WithCustomReturnValue: Story = {
  args: {
    returnValue: (option) => option.label
  }
}
