import { type Meta, type StoryObj } from '@storybook/react'
import { mockDefaultValues, mockSchema, StorybookFormProvider } from '@/storybookHelpers'
import { ComboboxControl } from '$/shared/ui'

const meta = {
  title: 'CONTROLLED FORM UI/ComboboxControl',
  component: ComboboxControl,
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
} satisfies Meta<typeof ComboboxControl>

export default meta
type Story = StoryObj<typeof meta>

export const Base: Story = {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  args: {
    name: 'credit',
    label: 'Выберите кредит',
    size: 'lg',
    badge: '+25%'
  }
}

// const selectedValues: IOptions[] = Array.isArray(controlledValue) ? controlledValue : []
// const displayValues = multiple ? selectedValues : controlledValue

// const filteredPeople =
//   controlledValue === ''
//     ? suggestionsOptions
//     : suggestionsOptions.filter(({ value }) => {
//         return value?.toLowerCase().includes(displayValues?.toLowerCase())
//       })
