import { useFormContext } from 'react-hook-form'
import type { Meta, StoryObj } from '@storybook/react'
import { mockDefaultValues, mockSchema, StorybookFormProvider } from '@/storybookHelpers'
import { EditorControl } from '$/shared/ui'

const meta = {
  title: 'CONTROLLED FORM UI/EditorControl',
  component: EditorControl,
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

    return <EditorControl {...args} {...methods} />
  },
  tags: ['autodocs']
} satisfies Meta<typeof EditorControl>

export default meta
type Story = StoryObj<typeof EditorControl>

export const Base: Story = {
  args: {
    name: 'html',
    label: 'Введите HTML',
    helperText: 'Текст преобразуется в HTML'
  }
}
