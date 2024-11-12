import { type Meta, type StoryObj } from '@storybook/react'
import { Stepper } from '$/widgets'

const meta = {
  title: 'WIDGETS/Stepper',
  component: Stepper,
  tags: ['autodocs'],
  decorators: [(Story) => <div className='flex min-h-screen min-w-full items-center justify-center'>{Story()}</div>]
} satisfies Meta<typeof Stepper>

export default meta

type Story = StoryObj<typeof Stepper>

export const Base: Story = {
  args: {
    heading: 'Как получить кредит',
    stepsList: [
      { title: 'Заполните онлайн-заявку', description: 'Это займет несколько минут' },
      { title: 'Дождитесь одобрения', description: 'Рассмотрим заявку за 5 минут' },
      { title: 'Заберите деньги', description: 'Или закажите бесплатную доставку' }
    ]
  }
}
