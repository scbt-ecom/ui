import { useFormContext } from 'react-hook-form'
import { type Meta, type StoryObj } from '@storybook/react'
import { mockDefaultValues, mockSchema, StorybookFormProvider } from '@/storybookHelpers'
import { SwitchControl } from '$/shared/ui'

const meta = {
  title: 'CONTROLLED FORM UI/SwitchControl',
  component: SwitchControl,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
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
    return <SwitchControl {...args} {...methods} />
  }
} satisfies Meta<typeof SwitchControl>

export default meta
type Story = StoryObj<typeof SwitchControl>

export const Base: Story = {
  args: {
    name: 'percent',
    label: 'Увеличенный процент'
  }
}

export const Disabled: Story = {
  args: {
    name: 'percent',
    label: 'Увеличенный процент',
    disabled: true
  }
}

export const WithHelperText: Story = {
  args: {
    name: 'percent',
    label: 'Увеличенный процент',
    helperText: 'На первые 30 дней'
  }
}
