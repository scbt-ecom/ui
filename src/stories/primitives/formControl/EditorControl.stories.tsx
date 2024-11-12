import { useFormContext } from 'react-hook-form'
import { type Meta, type StoryObj } from '@storybook/react'
import { mockDefaultValues, mockSchema, StorybookFormProvider } from '@/storybookHelpers'
import { EditorControl } from '$/shared/ui'

const meta = {
  title: 'CONTROLLED FORM UI/EditorControl',
  component: EditorControl,
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
    return <EditorControl {...args} {...methods} />
  }
} satisfies Meta<typeof EditorControl>

export default meta
type Story = StoryObj<typeof EditorControl>
export const Base: Story = {
  args: {}
}
