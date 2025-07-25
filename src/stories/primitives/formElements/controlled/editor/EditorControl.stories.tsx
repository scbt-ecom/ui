'use docs'

import type { Meta, StoryObj } from '@storybook/react'
import z from 'zod'
import { HookForm } from '../utils'
import { EditorControl } from '$/shared/ui'
import { VALIDATION_MESSAGES } from '$/shared/validation'

const schema = z.object({
  test: z.string().min(1, { message: VALIDATION_MESSAGES.REQUIRED })
})

type Schema = z.TypeOf<typeof schema>
type EditorControlProps = React.ComponentPropsWithoutRef<typeof EditorControl>

const meta = {
  title: 'Form elements/controlled/EditorControl',
  component: EditorControl,
  parameters: {
    layout: 'centered'
  },
  args: {
    name: 'test',
    label: 'Введите HTML',
    helperText: 'Текст преобразуется в HTML'
  },
  decorators: [
    (Story) => (
      <div className='w-[clamp(360px,90vw,1200px)]'>
        <Story />
      </div>
    )
  ],
  render: (props) => (
    <HookForm<EditorControlProps, Schema>
      {...props}
      schema={schema}
      defaultValues={{
        test: ''
      }}
      renderComponent={(componentProps: EditorControlProps) => <EditorControl {...componentProps} />}
    />
  )
} satisfies Meta<typeof EditorControl>

export default meta

type Story = StoryObj<typeof EditorControl>

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
  args: {}
}

export const WithLimit: Story = {
  args: {
    limit: 1000
  }
}
