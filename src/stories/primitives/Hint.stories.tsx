import type { Meta, StoryObj } from '@storybook/react'
import { setTextWithElementSB } from '@/storybookHelpers'
import { Hint } from '$/shared/ui'

const meta = {
  title: 'Interactive/Hint',
  component: Hint,
  parameters: {
    layout: 'centered'
  },

  tags: ['autodocs']
} satisfies Meta<typeof Hint>

export default meta

type Story = StoryObj<typeof Hint>

const hintContent = 'Небольшая подсказка для пользователя'

export const Base: Story = {
  args: {
    triggerElement: setTextWithElementSB('Подробнее'),
    children: hintContent,
    side: 'top',
    align: 'center',
    defaultOpen: false
  }
}

export const DifferentAlign: Story = {
  render: () => (
    <div className='grid grid-cols-3 gap-24'>
      <Hint triggerElement={setTextWithElementSB('В начале')} align='start'>
        {hintContent}
      </Hint>
      <Hint triggerElement={setTextWithElementSB('По центру')} align='center'>
        {hintContent}
      </Hint>
      <Hint triggerElement={setTextWithElementSB('В конце')} align='end'>
        {hintContent}
      </Hint>
    </div>
  )
}

export const DifferentPositions: Story = {
  render: () => (
    <div className='grid grid-cols-2 gap-24'>
      <Hint triggerElement={setTextWithElementSB('Слева')} side='left'>
        {hintContent}
      </Hint>
      <Hint triggerElement={setTextWithElementSB('Справа')} side='right'>
        {hintContent}
      </Hint>
      <Hint triggerElement={setTextWithElementSB('Сверху')} side='top'>
        {hintContent}
      </Hint>
      <Hint triggerElement={setTextWithElementSB('Снизу')} side='bottom'>
        {hintContent}
      </Hint>
    </div>
  )
}

export const OtherConfiguration: Story = {
  render: () => (
    <div className='grid grid-cols-3 gap-24'>
      <Hint triggerElement={setTextWithElementSB('Кастомный отступ от подсказки')} sideOffset={30}>
        {hintContent}
      </Hint>

      <Hint triggerElement={setTextWithElementSB('По умолчанию открыт')} defaultOpen>
        {hintContent}
      </Hint>

      <Hint triggerElement={setTextWithElementSB('Кастомная задержка открытия')} delayDuration={500}>
        {hintContent}
      </Hint>
    </div>
  )
}
