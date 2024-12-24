import { type Meta, type StoryObj } from '@storybook/react'
import { ProgressBar } from '$/shared/ui/progressBar/ProgressBar'

const meta = {
  title: 'INTERACTIVE/ProgressBar',
  component: ProgressBar,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof ProgressBar>

export default meta

type Story = StoryObj<typeof meta>

const topContent = (
  <>
    <div className='desk-body-regular-l text-color-dark'>Заполните контактные данные</div>
    <div className='desk-body-regular-l text-color-dark'>+35% к одобрению</div>
  </>
)

const bottomContent = (
  <>
    <div className='desk-body-regular-l text-color-dark'>
      Шаг 1 <span className='text-color-tetriary'>из 6</span>
    </div>
    <div className='desk-body-regular-l text-color-tetriary'>+10% за следующий шаг</div>
  </>
)

export const Base: Story = {
  args: {
    progress: 40
  }
}

export const TopContent: Story = {
  args: {
    topContent,
    progress: 40
  }
}

export const BottomContent: Story = {
  args: {
    bottomContent,
    progress: 40
  }
}

export const FullContent: Story = {
  args: {
    topContent,
    bottomContent,
    progress: 40
  }
}

export const WithMaxPercent: Story = {
  args: {
    topContent,
    bottomContent,
    progress: 40,
    maxPercent: 70
  }
}
