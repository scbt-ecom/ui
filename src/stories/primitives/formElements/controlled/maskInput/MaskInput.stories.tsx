'use docs'

import toast from 'react-hot-toast'
import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import type { TypeOf } from 'zod'
import { HookForm } from '../utils'
import {
  baseDefaultValues,
  baseSchema,
  dateDefaultValues,
  dateSchema,
  passportDefaultValues,
  passportSchema,
  phoneDefaultValues,
  phoneSchema
} from './schemas'
import { MaskInputControl } from '$/shared/ui'

type MaskInputControlProps = React.ComponentPropsWithoutRef<typeof MaskInputControl>

const meta = {
  title: 'Form elements/controlled/MaskInputControl',
  component: MaskInputControl,
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
      defaultValues={baseDefaultValues}
      renderComponent={(componentProps: MaskInputControlProps) => <MaskInputControl {...componentProps} />}
    />
  )
} satisfies Meta<typeof MaskInputControl>

export default meta

type Story = StoryObj<typeof MaskInputControl>

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
      defaultValues={phoneDefaultValues}
      renderComponent={(componentProps: MaskInputControlProps) => <MaskInputControl {...componentProps} />}
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
      defaultValues={dateDefaultValues}
      renderComponent={(componentProps: MaskInputControlProps) => <MaskInputControl {...componentProps} />}
    />
  )
}

export const WithPassportMask: Story = {
  args: {
    ...Base.args,
    mask: '#### ######'
  },
  render: (props) => (
    <HookForm<MaskInputControlProps, TypeOf<typeof passportSchema>>
      {...props}
      schema={passportSchema}
      defaultValues={passportDefaultValues}
      renderComponent={(componentProps: MaskInputControlProps) => <MaskInputControl {...componentProps} />}
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
