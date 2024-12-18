import { useFormContext } from 'react-hook-form'
import type { Meta, StoryObj } from '@storybook/react'
import { mockDefaultValues, mockSchema, StorybookFormProvider } from '@/storybookHelpers'
import { InputOtpControl } from '$/shared/ui'

const meta = {
  title: 'CONTROLLED FORM UI/InputOtpControl',
  component: InputOtpControl,
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
  render: (args) => {
    const { control } = useFormContext()
    const methods = { control }

    return <InputOtpControl {...args} {...methods} />
  },
  tags: ['autodocs']
} satisfies Meta<typeof InputOtpControl>

export default meta
type Story = StoryObj<typeof InputOtpControl>

export const Base: Story = {
  args: {
    name: 'code'
  }
}
