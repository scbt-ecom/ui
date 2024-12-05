import type { Meta } from '@storybook/react'
import { mockDefaultValues, mockFields, mockSchema, StorybookFieldsMapper, StorybookFormProvider } from '@/storybookHelpers'
import { FormControl } from '$/shared/ui'

const meta = {
  title: 'CONTROLLED FORM UI/FormControlAllFields',
  component: FormControl,
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
} satisfies Meta<typeof FormControl>

export default meta

export const FormControlAllFields = () => {
  return <StorybookFieldsMapper fields={mockFields} defaultValues={mockDefaultValues} />
}
