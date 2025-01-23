'use docs'

import type { Meta, StoryObj } from '@storybook/react'
import z from 'zod'
import { HookForm } from '../utils'
import { Controlled } from '$/shared/ui'
import { VALIDATION_MESSAGES } from '$/shared/validation'

const schema = z.object({
  test: z.string().min(1, { message: VALIDATION_MESSAGES.REQUIRED })
})

type Schema = z.TypeOf<typeof schema>
type EditorControlProps = React.ComponentPropsWithoutRef<typeof Controlled.EditorControl>

const meta = {
  title: 'CONTROLLED/EditorControl',
  component: Controlled.EditorControl,
  parameters: {
    layout: 'centered'
  },
  args: {
    label: 'Editor',
    name: 'test'
  },
  render: (props) => (
    <HookForm<EditorControlProps, Schema>
      {...props}
      schema={schema}
      defaultValues={{
        test: ''
      }}
      renderComponent={(componentProps: EditorControlProps) => <Controlled.EditorControl {...componentProps} />}
    />
  )
} satisfies Meta<typeof Controlled.EditorControl>

export default meta

type Story = StoryObj<typeof Controlled.EditorControl>

/**
 * \`EditorControl\` компонент, контролируемый библиотекой \`react-hook-form\`\n
 *
 * | Props        | Description                         | Type                         | Required  |
 * | ------------ | ----------------------------------- | ---------------------------- | --------- |
 * | \`control\`  | Контрол объект для управления полем | \`Control\<TFieldValues\>\`  | \`true\`  |
 * | \`name\`     | Имя поля                            | \`string\`                   | \`true\`  |
 * | \`classes\`  | Дополнительные стили компонента     | \`EditorControlClasses\`      | \`false\` |
 * | \`helperText\` | Дополнительный текст                | \`string\`                   | \`false\` |
 *
 */

export const Base: Story = {
  args: {
    name: 'html',
    label: 'Введите HTML',
    helperText: 'Текст преобразуется в HTML'
  }
}
