import { type Meta, type StoryObj } from '@storybook/react'
import { mockDefaultValues, mockSchema, StorybookFormProvider } from '@/storybookHelpers'
import { ComboboxControlReactSelect } from '$/shared/ui/formControlElements/ComboboxControlReactSelect'

const meta = {
  title: 'CONTROLLED FORM UI/ComboboxControlReactSelect',
  component: ComboboxControlReactSelect,
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
} satisfies Meta<typeof ComboboxControlReactSelect>

export default meta
type Story = StoryObj<typeof meta>

export const Base: Story = {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  args: {
    name: 'credit',
    label: 'Выберите кредит',
    size: 'md',
    options: Array.from({ length: 20 }).map((_, i) => ({
      label: `Кредит ${i + 1}`,
      value: `Penis ${i + 1}`
    }))
  }
}
