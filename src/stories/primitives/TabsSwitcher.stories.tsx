import { useState } from 'react'
import { type Meta, type StoryObj } from '@storybook/react'
import { Button, type TabRenderContent, TabsSwitcher } from '$/shared/ui'

const meta = {
  title: 'Interactive/TabsSwitcher',
  component: TabsSwitcher,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof TabsSwitcher>

export default meta

type Story = StoryObj<typeof TabsSwitcher>

const TABS_MOCKS: TabRenderContent = {
  triggers: [
    { id: '1', label: 'Условия' },
    { id: '2', label: 'Вклады' },
    { id: '3', label: 'Депозиты' }
  ],
  contents: [
    { id: '1', body: <>Условия контент</>, accordion: { title: 'Обернут в аккордеон' } },
    { id: '2', body: <>Вклады контент</> },
    { id: '3', body: <>Депозиты контент</> }
  ]
}

export const Base: Story = {
  render: () => {
    const [activeTab, setTab] = useState('2')
    const changeTab = (tab: string) => setTab(tab)

    return (
      <div className='flex flex-col gap-6'>
        <Button size='sm' onClick={() => changeTab('3')}>
          Активный таб 3
        </Button>
        <TabsSwitcher value={activeTab} onChangeTab={changeTab} renderContent={TABS_MOCKS} />
      </div>
    )
  }
}
