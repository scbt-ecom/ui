import { useFormContext } from 'react-hook-form'
import { type Meta, type StoryObj } from '@storybook/react'
import { MOCK_SELECT_OPTIONS_REACT_SELECT, mockDefaultValues, mockSchema, StorybookFormProvider } from '@/storybookHelpers'
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
  render: ({ ...args }) => {
    const { control } = useFormContext()
    const methods = { control }
    return <ComboboxControl {...args} {...methods} />
  },
  tags: ['autodocs']
} satisfies Meta<typeof ComboboxControl>

export default meta
type Story = StoryObj<typeof ComboboxControl>

export const Base: Story = {
  args: {
    name: 'credit',
    label: 'Выберите кредит',
    size: 'md',
    options: MOCK_SELECT_OPTIONS_REACT_SELECT
  }
}

export const Disabled: Story = {
  args: {
    name: 'credit',
    label: 'Выберите кредит',
    size: 'md',
    disabled: true,
    options: [...MOCK_SELECT_OPTIONS_REACT_SELECT]
  }
}

export const IsNotSearchable: Story = {
  args: {
    name: 'credit',
    label: 'Выберите кредит',
    size: 'md',
    options: [...MOCK_SELECT_OPTIONS_REACT_SELECT],
    isSearchable: false
  }
}

export const Multi: Story = {
  args: {
    name: 'credit',
    label: 'Выберите кредит',
    size: 'md',
    isMulti: true,
    options: [...MOCK_SELECT_OPTIONS_REACT_SELECT]
  }
}
