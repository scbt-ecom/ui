import { useFormContext } from 'react-hook-form'
import type { Meta, StoryObj } from '@storybook/react'
import { mockDefaultValues, mockSchema, StorybookFormProvider } from '@/storybookHelpers'
import { Icon, InputSliderControl } from '$/shared/ui'

const meta = {
  title: 'CONTROLLED FORM UI/InputSliderControl',
  component: InputSliderControl,
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
    return <InputSliderControl {...args} {...methods} />
  },
  tags: ['autodocs']
} satisfies Meta<typeof InputSliderControl>

export default meta
type Story = StoryObj<typeof InputSliderControl>

export const Base: Story = {
  args: {
    name: 'term',
    label: 'Сумма кредита',
    size: 'md',
    min: 30_000,
    max: 5_000_000,
    variant: 'credit'
  }
}

export const WithYears: Story = {
  args: {
    name: 'term',
    label: 'Срок кредита',
    size: 'md',
    min: 1,
    max: 12,
    variant: 'years'
  }
}

export const WithIconSlider: Story = {
  args: {
    name: 'term',
    label: 'Город',
    icon: <Icon name='general/edit' className='size-[19px] text-icon-blue-grey-600 focus:text-icon-blue-grey-800' />,
    size: 'md',
    min: 1,
    max: 12,
    variant: 'years'
  }
}
