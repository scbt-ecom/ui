'use docs'

import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { object, type TypeOf } from 'zod'
import { HookForm } from '../utils'
import { SelectControl, type SelectItemOption } from '$/shared/ui'
import { zodValidators } from '$/shared/validation'

const generateOptions = (length: number): SelectItemOption[] =>
  Array.from({ length }).map((_, index) => ({
    value: `value_${index + 1}`,
    label: `Value ${index + 1}`
  }))

const schema = object({
  test: zodValidators.base.getSelectSchema()
})

type SelectControlProps = React.ComponentPropsWithoutRef<typeof SelectControl>

const meta = {
  title: 'Form elements/controlled/SelectControl',
  component: SelectControl,
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
    <HookForm<SelectControlProps, TypeOf<typeof schema>>
      {...props}
      schema={schema}
      defaultValues={{ test: null }}
      renderComponent={(componentProps: SelectControlProps) => <SelectControl {...componentProps} />}
    />
  )
} satisfies Meta<typeof SelectControl>

export default meta

type Story = StoryObj<typeof SelectControl>

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

export const WithReset: Story = {
  args: {
    reset: 'Очистить'
  }
}

const multiSchema = object({
  test: zodValidators.base.getSelectSchema({
    multiple: true,
    minLength: 1
  })
})
export const WithMulti: Story = {
  args: {
    isMulti: true
  },
  render: (props) => (
    <HookForm<SelectControlProps, TypeOf<typeof multiSchema>>
      {...props}
      schema={multiSchema}
      defaultValues={{ test: [] }}
      renderComponent={(componentProps: SelectControlProps) => <SelectControl {...componentProps} />}
    />
  )
}

export const WithSearchable: Story = {
  args: {
    isSearchable: true
  }
}

export const Virtual: Story = {
  args: {
    virtual: true
  }
}
