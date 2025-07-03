'use docs'

import toast from 'react-hot-toast'
import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import z from 'zod'
import { HookForm } from '../utils'
import { InputCurrencyControl } from '$/shared/ui'

const schema = z.object({
  test: z.string().min(3, 'Name error')
})

type Schema = z.TypeOf<typeof schema>
type InputCurrencyControlProps = React.ComponentPropsWithoutRef<typeof InputCurrencyControl>

const meta = {
  title: 'Form elements/controlled/InputCurrencyControl',
  component: InputCurrencyControl,
  parameters: {
    layout: 'centered'
  },
  args: {
    label: 'Input',
    name: 'test'
  },
  render: (props) => (
    <HookForm<InputCurrencyControlProps, Schema>
      {...props}
      schema={schema}
      defaultValues={{
        test: ''
      }}
      renderComponent={(componentProps: InputCurrencyControlProps) => <InputCurrencyControl {...componentProps} />}
    />
  )
} satisfies Meta<typeof InputCurrencyControl>

export default meta

type Story = StoryObj<typeof InputCurrencyControl>

/**
 * \`InputCurrencyControl\` компонент, контролируемый библиотекой \`react-hook-form\`\n
 *
 * | Props        | Description                         | Type                         | Required  |
 * | ------------ | ----------------------------------- | ---------------------------- | --------- |
 * | \`control\`  | Контрол объект для управления полем | \`Control\<TFieldValues\>\`  | \`true\`  |
 * | \`name\`     | Имя поля                            | \`string\`                   | \`true\`  |
 * | \`classes\`  | Дополнительные стили компонента     | \`InputCurrencyControlClasses\`      | \`false\` |
 * | \`helperText\` | Дополнительный текст                | \`string\`                   | \`false\` |
 *
 * Остальные свойства наследуются от [Input](?path=/docs/base-inputbase--docs)\n
 */
export const Base: Story = {}

export const Disabled: Story = {
  args: {
    disabled: true
  }
}

export const ReadOnly: Story = {
  args: {
    readOnly: true
  }
}

export const WithExternalHandlers: Story = {
  args: {
    ...Base.args,
    externalHandlers: {
      onClick: fn(() => {
        toast('handled external onClick')
      }),
      onChange: fn(() => {
        toast('handled external onChange')
      }),
      onBlur: fn(() => {
        toast('handled external onBlur')
      }),
      onFocus: fn(() => {
        toast('handled external onFocus')
      })
    }
  }
}

export const Rubles: Story = {
  args: {
    name: 'currency',
    label: 'Выберите валюту',
    defaultCurrency: 'rubles'
  }
}

export const Dollars: Story = {
  args: {
    name: 'currency',
    label: 'Выберите валюту',
    defaultCurrency: 'dollars'
  }
}

export const Euro: Story = {
  args: {
    name: 'currency',
    label: 'Выберите валюту',
    defaultCurrency: 'euro'
  }
}

export const Dirhams: Story = {
  args: {
    name: 'currency',
    label: 'Выберите валюту',
    defaultCurrency: 'dirhams'
  }
}

export const Yuan: Story = {
  args: {
    name: 'currency',
    label: 'Выберите валюту',
    defaultCurrency: 'yuan'
  }
}
