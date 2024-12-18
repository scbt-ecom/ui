import { useFormContext } from 'react-hook-form'
import type { Meta, StoryObj } from '@storybook/react'
import { mockDefaultValues, mockSchema, StorybookFormProvider } from '@/storybookHelpers'
import { CheckboxControl } from '$/shared/ui'

const meta = {
  title: 'CONTROLLED FORM UI/CheckboxControl',
  component: CheckboxControl,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  render: ({ ...args }) => {
    const { control } = useFormContext()
    const methods = { control }
    return <CheckboxControl {...args} {...methods} />
  },
  decorators: [
    (Story) => (
      <StorybookFormProvider validationSchema={mockSchema} defaultValues={mockDefaultValues}>
        <Story />
      </StorybookFormProvider>
    )
  ]
} satisfies Meta<typeof CheckboxControl>

export default meta
type Story = StoryObj<typeof CheckboxControl>

const checkboxLabel = (
  <>
    <a href='https://sovcombank.ru/' target='_blank' rel='noreferrer' className='text-color-primary-default'>
      Выражаю согласие
    </a>{' '}
    на обработку персональных данных и подтверждаю, что ознакомлен с{' '}
    <a href='https://sovcombank.ru/' target='_blank' rel='noreferrer' className='text-color-primary-default'>
      Политикой
    </a>{' '}
    обработки персональных данных
  </>
)

export const Base: Story = {
  args: {
    label: checkboxLabel,
    name: 'condition'
  }
}

export const WithHelperText: Story = {
  args: {
    label: checkboxLabel,
    name: 'condition',
    helperText: 'Утвердите согласие'
  }
}

export const Disabled: Story = {
  args: {
    label: checkboxLabel,
    name: 'condition',
    disabled: true
  }
}
