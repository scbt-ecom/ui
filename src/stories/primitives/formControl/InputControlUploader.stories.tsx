import type { Meta, StoryObj } from '@storybook/react'
import { mockDefaultValues, mockSchema, StorybookFormProvider } from '@/storybookHelpers'
import { InputControlUploader } from '$/shared/ui/formControlElements/InputControlUploader/InputControlUploader'

const meta = {
  title: 'CONTROLLED FORM UI/InputControlUploader',
  component: InputControlUploader,
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
  tags: ['autodocs']
} satisfies Meta<typeof InputControlUploader>

export default meta
type Story = StoryObj<typeof meta>

export const Base: Story = {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
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
