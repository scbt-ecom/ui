import { useFormContext } from 'react-hook-form'
import { type Meta, type StoryObj } from '@storybook/react'
import { DADATA_BASE_CACHE_URL } from '@/configs/api'
import { mockDefaultValues, mockSchema, StorybookFormProvider } from '@/storybookHelpers'
import { DadataAddress } from '$/shared/ui'

const meta = {
  title: 'CONTROLLED FORM UI/DadataAddress',
  component: DadataAddress,
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
    return <DadataAddress {...args} {...methods} />
  },
  tags: ['autodocs']
} satisfies Meta<typeof DadataAddress>

export default meta
type Story = StoryObj<typeof DadataAddress>

export const Base: Story = {
  args: {
    name: 'fio',
    label: 'Выберите кредит',
    size: 'md',
    dadataBaseUrl: DADATA_BASE_CACHE_URL,
    badge: '+25%'
  }
}
