import { useFormContext } from 'react-hook-form'
import type { Meta, StoryObj } from '@storybook/react'
import { mockDefaultValues, mockSchema, StorybookFormProvider } from '@/storybookHelpers'
import { InputControl } from '$/shared/ui'

const meta = {
  title: 'CONTROLLED FORM UI/InputControlPassword',
  component: InputControl,
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
    return <InputControl {...args} {...methods} />
  },
  tags: ['autodocs']
} satisfies Meta<typeof InputControl>

export default meta
type Story = StoryObj<typeof InputControl>

export const Base: Story = {
  args: {
    name: 'password',
    label: 'Пароль',
    size: 'md',
    helperText: 'Введите пароль',
    variant: 'password'
  }
}
