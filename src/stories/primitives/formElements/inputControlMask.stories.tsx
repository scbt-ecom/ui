import { useFormContext } from 'react-hook-form'
import type { Meta, StoryObj } from '@storybook/react'
import { mockDefaultValues, mockSchema, StorybookFormProvider } from '@/storybookHelpers'
import { Icon, InputControlMask } from '$/shared/ui'

const meta = {
  title: 'CONTROLLED FORM UI/InputControlMask',
  component: InputControlMask,
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
    return <InputControlMask {...args} {...methods} />
  },
  tags: ['autodocs']
} satisfies Meta<typeof InputControlMask>

export default meta
type Story = StoryObj<typeof InputControlMask>

export const Base: Story = {
  args: {
    name: 'phone',
    label: 'Номер телефона',
    size: 'md',
    format: '# (###) ###-##-##'
  }
}

export const WithIcon: Story = {
  args: {
    name: 'phone',
    label: 'Номер телефона',
    format: '# (###) ###-##-##',
    size: 'md',
    icon: <Icon name='general/check' className='text-icon-positive-default' />
  }
}

export const WithBadge: Story = {
  args: {
    name: 'phone',
    label: 'Номер телефона',
    format: '# (###) ###-##-##',
    size: 'md',
    badge: '+25%'
  }
}

export const WithHelperText: Story = {
  args: {
    name: 'phone',
    label: 'Номер телефона',
    size: 'md',
    format: '# (###) ###-##-##',
    helperText: 'Введите номер телефона'
  }
}
