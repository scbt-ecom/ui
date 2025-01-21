import type { Meta, StoryObj } from '@storybook/react'
import { Breadcrumbs } from '$/shared/ui'
import type { LinksList } from '$/shared/ui/breadcrumbs/Breadcrumbs'

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

const linksList: LinksList = [
  { label: 'Главная', path: 'https://sovcombank.ru/' },
  { label: 'Займы', path: 'https://sovcombank.ru/apply/credit/zajm-online/' },
  { label: 'Главная' }
]

export const Base: Story = {
  args: {
    linksList
  }
}
