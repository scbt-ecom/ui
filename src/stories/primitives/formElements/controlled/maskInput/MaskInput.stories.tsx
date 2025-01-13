'use docs'

import type { Meta, StoryObj } from '@storybook/react'
import z from 'zod'
import { HookForm } from '@/stories/primitives/formElements/controlled/utils.tsx'
import { Controlled } from '$/shared/ui'

const schema = z.object({
  test: z.string().min(3, 'Name error')
})

type Schema = z.TypeOf<typeof schema>
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
    name: 'test'
  },
  render: (props) => (
    <HookForm<MaskInputControlProps, Schema>
      {...props}
      schema={schema}
      defaultValues={{
        test: ''
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
