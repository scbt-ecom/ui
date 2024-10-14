import type { Meta, StoryObj } from '@storybook/react'
import { Accordion } from '$/shared/ui'

const meta = {
  title: 'INTERACTIVE/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className='m-auto mt-8 max-w-[800px]'>
        <Story />
      </div>
    )
  ]
} satisfies Meta<typeof Accordion>

export default meta

type Story = StoryObj<typeof Accordion>

const mock_accordion_list = [
  {
    label: 'Заголовок аккордеон 1',
    content: 'Контент аккордеона 1'
  },
  {
    label: 'Заголовок аккордеон 2',
    content: 'Контент аккордеона 2'
  },
  {
    label: 'Заголовок аккордеон 3',
    content: 'Контент аккордеона 3'
  }
]

export const Base: Story = {
  args: {
    label: 'Заголовок аккордеон',
    children: 'Контент аккордеона'
  }
}

export const WithDefaultOpen: Story = {
  args: {
    defaultOpen: ['Заголовок аккордеон'],
    label: 'Заголовок аккордеон',
    children: 'Контент аккордеона'
  }
}

export const MappedWithDefaultOpen: Story = {
  render: (...args) => (
    <div className='flex flex-col gap-6'>
      {mock_accordion_list?.map(({ label, content }) => (
        <Accordion
          defaultOpen={['Заголовок аккордеон 1', 'Заголовок аккордеон 2']}
          key={label.toString()}
          label={label}
          {...args}
        >
          {content}
        </Accordion>
      ))}
    </div>
  )
}
