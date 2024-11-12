import { useFormContext } from 'react-hook-form'
import { type Meta, type StoryObj } from '@storybook/react'
import { mockDefaultValues, mockSchema, StorybookFormProvider } from '@/storybookHelpers'
import { CalendarControl, Icon } from '$/shared/ui'

const meta = {
  title: 'CONTROLLED FORM UI/CalendarControl',
  component: CalendarControl,
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
  render: (args) => {
    const { watch, control, setValue } = useFormContext()
    const methods = { watch, control, setValue }

    return <CalendarControl {...args} {...methods} />
  }
} satisfies Meta<typeof CalendarControl>
export default meta

type Story = StoryObj<typeof CalendarControl>

export const Base: Story = {
  args: {
    name: 'calendar',
    label: 'Дата рождения',
    helperText: 'Укажите дату рождения',
    icon: <Icon name='general/calendar' className='size-5 cursor-pointer text-icon-blue-grey-700' />,
    size: 'md',
    badge: '+25%',
    swapPosition: true,
    classes: {
      attachmentWrapper: 'mr-2 gap-2',
      icon: 'size-10 rounded-full bg-color-transparent transition-colors flex items-center justify-center hover:bg-color-primary-tr-hover active:bg-color-primary-tr-pressed'
    }
  }
}
