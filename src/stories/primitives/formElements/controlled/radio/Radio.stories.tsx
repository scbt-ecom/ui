'use docs'

import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import z from 'zod'
import { HookForm } from '../utils'
import { Controlled, type RadioOption } from '$/shared/ui'

const schema = z.object({
  test: z.string().nullable().refine(Boolean)
})

// TODO: заменить на пере используемую функцию
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

type Schema = z.TypeOf<typeof schema>
type RadioGroupControlProps = React.ComponentPropsWithoutRef<typeof Controlled.RadioGroupControl>

const meta = {
  title: 'CONTROLLED/RadioGroupControl',
  component: Controlled.RadioGroupControl,
  parameters: {
    layout: 'centered'
  },
  args: {
    options,
    label: 'Some label',
    name: 'test'
  },
  render: (props) => (
    <HookForm<RadioGroupControlProps, Schema>
      {...props}
      schema={schema}
      defaultValues={{
        test: null
      }}
      renderComponent={(componentProps: RadioGroupControlProps) => <Controlled.RadioGroupControl {...componentProps} />}
    />
  )
} satisfies Meta<typeof Controlled.RadioGroupControl>

export default meta

type Story = StoryObj<typeof Controlled.RadioGroupControl>

/**
 * \`RadioGroupControl\` компонент, управляемый библиотекой \`react-hook-form\`\n
 *
 * | Props        | Description                         | Type                        | Required  |
 * | ------------ | ----------------------------------- | --------------------------- | --------- |
 * | \`control\`  | Контрол объект для управления полем | \`Control\<TFieldValues\>\` | \`true\`  |
 * | \`label\`    | Отображаемый лейбл                  | \`Control\<TFieldValues\>\` | \`true\`  |
 * | \`name\`     | Имя поля                            | \`string\`                  | \`true\`  |
 * | \`options\`  | Список отображаемых опций           | \`RadioOption[]\`           | \`true\`  |
 * | \`classes\`  | Дополнительные стили компонента     | \`RadioControlClasses\`     | \`false\` |
 * | \`helperText\` | Дополнительный текст                | \`string\`                  | \`false\` |
 *
 * Остальные свойства наследуются от [RadioGroup](?path=/docs/base-radiogroupbase--docs)\n
 */
export const Base: Story = {}

export const Disabled: Story = {
  args: {
    disabled: true
  }
}

export const WithCustomReturnValue: Story = {
  args: {
    returnValue: (option) => option.label
  }
}

export const WithCustomDisplayValue: Story = {
  args: {
    displayValue: (option) => String(option.id)
  }
}

export const WithExternalHandlers: Story = {
  args: {
    ...Base.args,
    externalHandlers: {
      onChange: (value) => {
        fn(() => console.warn(`handled external onChange ${value}`))
      },
      onClick: fn(() => {
        console.warn('handled external onClick')
      }),
      onBlur: fn(() => {
        console.warn('handled external onBlur')
      }),
      onFocus: fn(() => {
        console.warn('handled external onFocus')
      })
    }
  }
}
