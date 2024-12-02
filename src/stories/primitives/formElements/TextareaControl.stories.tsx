import { useFormContext } from 'react-hook-form'
import type { Meta, StoryObj } from '@storybook/react'
import { mockDefaultValues, mockSchema, StorybookFormProvider } from '@/storybookHelpers'
import { TextareaControl } from '$/shared/ui'

const meta = {
  title: 'CONTROLLED FORM UI/TextareaControl',
  component: TextareaControl,
  parameters: {
    layout: 'centered'
  },
  decorators: [
    (Story) => (
      <StorybookFormProvider validationSchema={mockSchema} defaultValues={mockDefaultValues}>
        <Story />
      </StorybookFormProvider>
    )
  ],
  render: ({ ...args }) => {
    const { control } = useFormContext()
    const methods = { control }
    return <TextareaControl {...args} {...methods} />
  },
  tags: ['autodocs']
} satisfies Meta<typeof TextareaControl>

export default meta
type Story = StoryObj<typeof TextareaControl>

export const Base: Story = {
  args: {
    name: 'description',
    label: 'Описание к блоку',
    size: 'md'
  }
}

export const WithPlaceholder: Story = {
  args: {
    name: 'description',
    label: 'Описание к блоку',
    size: 'md',
    placeholder: 'Введите описание'
  }
}

export const Disabled: Story = {
  args: {
    name: 'description',
    label: 'Описание к блоку',
    size: 'md',
    placeholder: 'Введите описание',
    disabled: true
  }
}
