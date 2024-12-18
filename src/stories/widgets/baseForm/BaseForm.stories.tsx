import type { Meta, StoryObj } from '@storybook/react'
import { BaseForm } from '$/widgets'

const meta = {
  title: 'WIDGETS/BaseForm',
  component: BaseForm,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className='h-screen'>
        <Story />
      </div>
    )
  ]
} satisfies Meta<typeof BaseForm>

export default meta

type Story = StoryObj<typeof BaseForm>

export const Base: Story = {
  render: () => <BaseForm />
}
