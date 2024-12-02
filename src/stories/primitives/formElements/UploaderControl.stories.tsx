import { useFormContext } from 'react-hook-form'
import type { Meta, StoryObj } from '@storybook/react'
import { mockDefaultValues, mockSchema, StorybookFormProvider } from '@/storybookHelpers'
import { UploaderControl } from '$/shared/ui'

const meta = {
  title: 'CONTROLLED FORM UI/UploaderControl',
  component: UploaderControl,
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
    return <UploaderControl {...args} {...methods} />
  },
  tags: ['autodocs']
} satisfies Meta<typeof UploaderControl>

export default meta
type Story = StoryObj<typeof UploaderControl>

export const Base: Story = {
  args: {
    name: 'files',
    label: 'Файлы',
    helperText: 'Фотография должна быть четкой',
    dropzoneOptions: {
      maxSize: 1024 * 1024 * 4,
      multiple: true,
      accept: {
        'image/jpeg': [],
        'image/png': []
      }
    }
  }
}
