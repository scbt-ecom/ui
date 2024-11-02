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
  tags: ['autodocs']
} satisfies Meta<typeof InputCurrencyControl>

export default meta
type Story = StoryObj<typeof meta>

export const Rubles: Story = {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  args: {
    name: 'currency',
    label: 'Выберите валюту',
    size: 'md',
    defaultCurrency: 'rubles'
  }
}

export const Dollars: Story = {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  args: {
    name: 'currency',
    label: 'Выберите валюту',
    size: 'md',
    defaultCurrency: 'dollars'
  }
}

export const Euro: Story = {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  args: {
    name: 'currency',
    label: 'Выберите валюту',
    size: 'md',
    defaultCurrency: 'euro'
  }
}

export const Dirhams: Story = {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  args: {
    name: 'currency',
    label: 'Выберите валюту',
    size: 'md',
    defaultCurrency: 'dirhams'
  }
}

export const Yuan: Story = {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  args: {
    name: 'currency',
    label: 'Выберите валюту',
    size: 'md',
    defaultCurrency: 'yuan'
  }
}
