'use docs'

import type { Meta, StoryObj } from '@storybook/react'
import z from 'zod'
import { HookForm } from '../utils'
import { Controlled } from '$/shared/ui'

const sliderSchema = z.object({
  slider: z.number().min(1)
})

type Schema = z.TypeOf<typeof sliderSchema>

type SliderControlProps = React.ComponentPropsWithoutRef<typeof Controlled.SliderControl>

const meta = {
  title: 'Form elements/controlled/SliderControl',
  component: Controlled.SliderControl,
  parameters: {
    layout: 'centered'
  },
  args: {
    name: 'slider'
  },
  render: (props) => (
    <HookForm<SliderControlProps, Schema>
      {...props}
      defaultValues={{
        slider: 1
      }}
      schema={sliderSchema}
      renderComponent={(componentProps) => <Controlled.SliderControl {...(componentProps as SliderControlProps)} />}
    />
  )
} satisfies Meta<typeof Controlled.SliderControl>

export default meta

type Story = StoryObj<typeof Controlled.SliderControl>

/**
 * \`SliderControl\` компонент, контролируемый библиотекой \`react-hook-form\`\n
 *
 * | Props          | Description                         | Type                         | Required  |
 * | -------------- | ----------------------------------- | ---------------------------- | --------- |
 * | \`control\`    | Контрол объект для управления полем | \`Control\<TFieldValues\>\`  | \`true\`  |
 * | \`name\`       | Имя поля                            | \`string\`                   | \`true\`  |
 * | \`classes\`    | Дополнительные стили компонента     | \`SliderClasses\`   | \`false\` |
 *
 * Остальные свойства наследуются от [SliderBase](?path=/docs/base-sliderbase--docs)\n
 */

export const Base: Story = {
  args: {
    componentType: 'algorithmic',
    min: 30_000,
    max: 5_000_000,
    suffix: 'currency',
    label: 'Slider'
  }
}

export const Term: Story = {
  args: {
    componentType: 'marks',
    marks: [1, 2, 3, 6, 12, 24, 36],
    suffix: 'year',
    label: 'Slider'
  }
}
