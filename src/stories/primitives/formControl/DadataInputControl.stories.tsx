import { useFormContext } from 'react-hook-form'
import type { Meta, StoryObj } from '@storybook/react'
import { mockDefaultValues, mockSchema, StorybookFormProvider } from '@/storybookHelpers'
import { DadataInputControl } from '$/shared/ui'

const meta = {
  title: 'CONTROLLED FORM UI/DadataInputControl',
  component: DadataInputControl,
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
    return <DadataInputControl {...args} {...methods} />
  },
  tags: ['autodocs']
} satisfies Meta<typeof DadataInputControl>

export default meta
type Story = StoryObj<typeof DadataInputControl>

export const DadataFio: Story = {
  args: {
    name: 'fio',
    label: 'ФИО',
    size: 'lg',
    dadataBaseUrl: 'cache',
    badge: '+25%'
  }
}

export const DadataAddress: Story = {
  args: {
    name: 'address',
    label: 'Адрес',
    size: 'lg',
    dadataType: 'address',
    dadataBaseUrl: 'cache'
  }
}

export const DadataCountry: Story = {
  args: {
    name: 'country',
    label: 'Страна',
    size: 'lg',
    dadataType: 'country',
    dadataBaseUrl: 'constants'
  }
}

export const DadataAuto: Story = {
  args: {
    name: 'auto',
    label: 'Авто',
    size: 'lg',
    dadataType: 'auto',
    dadataBaseUrl: 'constants'
  }
}

export const DadataOrganization: Story = {
  args: {
    name: 'organization',
    label: 'Организация',
    size: 'lg',
    dadataType: 'party',
    dadataBaseUrl: 'cache',
    badge: '+25%'
  }
}
