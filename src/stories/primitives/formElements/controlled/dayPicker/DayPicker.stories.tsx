'use docs'

import type { Meta, StoryObj } from '@storybook/react'
import z from 'zod'
import { HookForm } from '../utils'
import { Controlled } from '$/shared/ui'
import { ZodUtils, zodValidators } from '$/shared/validation'

const schema = z.object({
  from: zodValidators.base.getDateSchema(),
  to: zodValidators.base.getDateSchema({ iso: true, required: false })
})

type Schema = z.TypeOf<typeof schema>
type DayPickerControlProps = React.ComponentPropsWithoutRef<typeof Controlled.DayPickerControl>

const meta = {
  title: 'CONTROLLED/DayPickerControl',
  component: Controlled.DayPickerControl,
  parameters: {
    layout: 'centered'
  },
  args: {
    inputProps: {
      label: 'Input'
    }
  },
  render: (props) => (
    <HookForm<DayPickerControlProps, Schema>
      {...props}
      schema={schema}
      defaultValues={ZodUtils.getZodDefaults(schema)}
      renderComponent={(componentProps: DayPickerControlProps) => (
        <>
          <Controlled.DayPickerControl {...componentProps} name='from' inputProps={{ label: 'Pick the date' }} />
          <Controlled.DayPickerControl {...componentProps} name='to' inputProps={{ label: 'Pick the date' }} />
        </>
      )}
    />
  )
} satisfies Meta<typeof Controlled.DayPickerControl>

export default meta

type Story = StoryObj<typeof Controlled.DayPickerControl>

/**
 * \`DayPickerControl\` компонент, управляемый библиотекой \`react-hook-form\`\n
 *
 * | Props        | Description                         | Type                             | Required  |
 * | ------------ | ----------------------------------- | -------------------------------- | --------- |
 * | \`control\`  | Контрол объект для управления полем | \`Control\<TFieldValues\>\`      | \`true\`  |
 * | \`name\`     | Имя поля                            | \`string\`                       | \`true\`  |
 * | \`classes\`  | Дополнительные стили компонента     | \`DayPickerControlClasses\`      | \`false\` |
 * | \`helperText\` | Дополнительный текст              | \`string\`                       | \`false\` |
 *
 * Остальные свойства наследуются от [DayPicker](?path=/docs/base-daypickerbase--docs)\n
 */
export const Base: Story = {}

export const Disabled: Story = {
  args: {
    disabled: true
  }
}

export const WithExternalHandlers: Story = {
  args: {
    ...Base.args,
    externalHandlers: {
      onChange: (value) => console.warn('handled external onChange', value),
      onClick: () => console.warn('handled external onClick'),
      onFocus: () => console.warn('handled external onFocus'),
      onBlur: () => console.warn('handled external onBlur')
    }
  }
}
