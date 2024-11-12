import { useFormContext } from 'react-hook-form'
import { type Meta, type StoryObj } from '@storybook/react'
import { mockDefaultValues, mockSchema, StorybookFormProvider } from '@/storybookHelpers'
import { InputCurrencyControl } from '$/shared/ui'

const meta = {
  title: 'CONTROLLED FORM UI/InputCurrencyControl',
  component: InputCurrencyControl,
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
    return <InputCurrencyControl {...args} {...methods} />
  },
  tags: ['autodocs']
} satisfies Meta<typeof InputCurrencyControl>

export default meta
type Story = StoryObj<typeof InputCurrencyControl>

export const Rubles: Story = {
  args: {
    name: 'currency',
    label: 'Выберите валюту',
    size: 'md',
    defaultCurrency: 'rubles'
  }
}

export const Dollars: Story = {
  args: {
    name: 'currency',
    label: 'Выберите валюту',
    size: 'md',
    defaultCurrency: 'dollars'
  }
}

export const Euro: Story = {
  args: {
    name: 'currency',
    label: 'Выберите валюту',
    size: 'md',
    defaultCurrency: 'euro'
  }
}

export const Dirhams: Story = {
  args: {
    name: 'currency',
    label: 'Выберите валюту',
    size: 'md',
    defaultCurrency: 'dirhams'
  }
}

export const Yuan: Story = {
  args: {
    name: 'currency',
    label: 'Выберите валюту',
    size: 'md',
    defaultCurrency: 'yuan'
  }
}
