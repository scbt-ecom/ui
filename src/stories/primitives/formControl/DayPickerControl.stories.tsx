import { type Meta, type StoryObj } from '@storybook/react'
import { mockDefaultValues, mockSchema, StorybookFormProvider } from '@/storybookHelpers'
import { Button, DayPickerControl, Icon } from '$/shared/ui'

const meta = {
  title: 'CONTROLLED FORM UI/DayPickerControl',
  component: DayPickerControl,
  parameters: {
    layout: 'centered'
  },
  args: {
    name: 'calendar',
    label: 'Дата рождения',
    helperText: 'Укажите дату рождения',
    icon: <Icon name='general/calendar' className='size-5 cursor-pointer text-icon-blue-grey-700' />,
    size: 'md',
    badge: '+25%',
    mode: 'single',
    renderFooter: () => (
      <>
        <Button>Test 1</Button>
        <Button>Test 2</Button>
      </>
    )
  },
  decorators: [
    (Story) => (
      <StorybookFormProvider validationSchema={mockSchema} defaultValues={mockDefaultValues}>
        <Story />
      </StorybookFormProvider>
    )
  ],
  render: (props) => {
    return <DayPickerControl {...props} />
  }
} satisfies Meta<typeof DayPickerControl>
export default meta

type Story = StoryObj<typeof DayPickerControl>

export const Base: Story = {
  args: {}
}
