import { type Meta, type StoryObj } from '@storybook/react'
import { Advantages, type IAdvantage } from '$/widgets/Advantages'

const meta = {
  title: 'WIDGETS/Advantages',
  component: Advantages,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  decorators: [
    (Story) => (
      <div className='flex min-h-screen min-w-full items-center justify-center bg-color-blue-grey-300 px-6'>
        <Story />
      </div>
    )
  ]
} satisfies Meta<typeof Advantages>

export default meta

type Story = StoryObj<typeof meta>

const mockThreeCards: IAdvantage[] = [
  { title: 'До 5 млн ₽', description: 'сумма кредита' },
  { title: 'До 5 лет', description: 'срок кредита' },
  { title: 'От 5 минут', description: 'быстрое одобрение' }
]

const mockFourCards: IAdvantage[] = [...mockThreeCards, { title: 'От 15 минут', description: 'сумма одобрение' }]

export const ThreeCards: Story = {
  args: {
    advantagesList: mockThreeCards
  }
}

export const FourCards: Story = {
  args: {
    advantagesList: mockFourCards
  }
}
