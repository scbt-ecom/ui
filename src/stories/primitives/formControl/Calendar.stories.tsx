import type { Meta, StoryObj } from '@storybook/react'
import { mockDefaultValues, mockSchema, StorybookFormProvider } from '@/storybookHelpers'
import { Icon } from '$/shared/ui'
import { Calendar } from '$/shared/ui/calendar'

const meta = {
  title: 'CONTROLLED FORM UI/Calendar',
  component: Calendar,
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
  ]
} satisfies Meta<typeof Calendar>

export default meta
type Story = StoryObj<typeof meta>
export const Base: Story = {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  args: {
    mode: 'single',
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

export const Range: Story = {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  args: {
    maskFormat: '##.##.#### - ##.##.####',
    mode: 'range',
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
