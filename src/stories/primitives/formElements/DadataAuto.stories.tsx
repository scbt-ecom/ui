import { useFormContext } from 'react-hook-form'
import { type Meta, type StoryObj } from '@storybook/react'
import { DADATA_BASE_CONSTANTS_URL } from '@/configs/api'
import { mockDefaultValues, mockSchema, StorybookFormProvider } from '@/storybookHelpers'
import { DadataAuto } from '$/shared/ui'

const meta = {
  title: 'CONTROLLED FORM UI/DadataAuto',
  component: DadataAuto,
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
    return <DadataAuto {...args} {...methods} />
  },
  tags: ['autodocs']
} satisfies Meta<typeof DadataAuto>

export default meta
type Story = StoryObj<typeof DadataAuto>

export const Base: Story = {
  args: {
    name: 'fio',
    label: 'Выберите кредит',
    size: 'md',
    dadataBaseUrl: DADATA_BASE_CONSTANTS_URL,
    badge: '+25%'
  }
}
