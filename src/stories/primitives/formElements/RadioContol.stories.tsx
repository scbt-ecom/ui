import { useFormContext } from 'react-hook-form'
import type { Meta, StoryObj } from '@storybook/react'
import { MOCK_RADIO_GROUP, mockDefaultValues, mockSchema, StorybookFormProvider } from '@/storybookHelpers'
import { RadioControl } from '$/shared/ui'

const meta = {
  title: 'CONTROLLED FORM UI/RadioControl',
  component: RadioControl,
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
    return <RadioControl {...args} {...methods} />
  }
} satisfies Meta<typeof RadioControl>

export default meta
type Story = StoryObj<typeof RadioControl>

export const Base: Story = {
  args: {
    name: 'sex',
    radioItemsGroup: MOCK_RADIO_GROUP
  }
}

export const WithGroupName: Story = {
  args: {
    name: 'sex',
    groupName: 'Выбери пол:',
    radioItemsGroup: MOCK_RADIO_GROUP
  }
}

export const WithHelperText: Story = {
  args: {
    name: 'sex',
    helperText: 'Укажите свой пол, как в паспорте ',
    radioItemsGroup: MOCK_RADIO_GROUP
  }
}

export const WithHorizontalOrientation: Story = {
  args: {
    name: 'sex',
    groupName: 'Выберите пол',
    helperText: 'Укажите свой пол, как в паспорте ',
    orientation: 'horizontal',
    radioItemsGroup: MOCK_RADIO_GROUP
  }
}
