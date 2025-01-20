'use docs'

import toast from 'react-hot-toast'
import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import type { TypeOf } from 'zod'
import { HookForm } from '../utils'
import { baseSchema, dateSchema, phoneSchema } from './schemas'
import { Controlled } from '$/shared/ui'

type MaskInputControlProps = React.ComponentPropsWithoutRef<typeof Controlled.MaskInputControl>

const meta = {
  title: 'CONTROLLED/MaskInputControl',
  component: Controlled.MaskInputControl,
  parameters: {
    layout: 'centered'
  },
  args: {
    label: 'Input',
    mask: '##.##.####',
    name: 'field'
  },
  render: (props) => (
    <HookForm<MaskInputControlProps, TypeOf<typeof baseSchema>>
      {...props}
      schema={baseSchema}
      defaultValues={{
        field: ''
      }}
      renderComponent={(componentProps: MaskInputControlProps) => <Controlled.MaskInputControl {...componentProps} />}
    />
  )
} satisfies Meta<typeof Controlled.MaskInputControl>

export default meta

type Story = StoryObj<typeof Controlled.MaskInputControl>

/**
 * \`MaskInputControl\` компонент, управляемый библиотекой \`react-hook-form\`\n
 *
 * | Props        | Description                         | Type                         | Required  |
 * | ------------ | ----------------------------------- | ---------------------------- | --------- |
 * | \`control\`  | Контрол объект для управления полем | \`Control\<TFieldValues\>\`  | \`true\`  |
 * | \`name\`     | Имя поля                            | \`string\`                   | \`true\`  |
 * | \`classes\`  | Дополнительные стили компонента     | \`MaskInputClasses\`         | \`false\` |
 * | \`helperText\` | Дополнительный текст                | \`string\`                   | \`false\` |
 *
 * Остальные свойства наследуются от [MaskInput](?path=/docs/base-maskinput--docs)\n
 */
export const Base: Story = {}

export const WithPhoneMask: Story = {
  args: {
    ...Base.args,
    mask: '+7 (###)-###-##-##'
  },
  render: (props) => (
    <HookForm<MaskInputControlProps, TypeOf<typeof phoneSchema>>
      {...props}
      schema={phoneSchema}
      defaultValues={{
        field: ''
      }}
      renderComponent={(componentProps: MaskInputControlProps) => <Controlled.MaskInputControl {...componentProps} />}
    />
  )
}

export const WithDateMask: Story = {
  args: {
    ...Base.args,
    mask: '##.##.####'
  },
  render: (props) => (
    <HookForm<MaskInputControlProps, TypeOf<typeof dateSchema>>
      {...props}
      schema={dateSchema}
      defaultValues={{
        field: ''
      }}
      renderComponent={(componentProps: MaskInputControlProps) => <Controlled.MaskInputControl {...componentProps} />}
    />
  )
}

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
