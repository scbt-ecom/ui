import type { Meta, StoryObj } from '@storybook/react'
import { type Breadcrumb, Breadcrumbs } from '$/widgets'

const meta = {
  title: 'Navigation/Breadcrumbs',
  component: Breadcrumbs,
  parameters: {
    layout: 'centered'
  },

  tags: ['autodocs']
} satisfies Meta<typeof Breadcrumbs>

export default meta

type Story = StoryObj<typeof meta>

const breadcrumbs: Breadcrumb[] = [
  { label: 'Главная', path: 'https://sovcombank.ru/' },
  { label: 'Займы', path: 'https://sovcombank.ru/apply/credit/zajm-online/' },
  { label: 'Главная' }
]

export const Base: Story = {
  args: {
    breadcrumbs
  }
}
