import { type Meta, type StoryObj } from '@storybook/react'
import bigData from './bigData.json'
import { columns } from './columns'
import data from './data.json'
import { Table } from '$/widgets'

const meta = {
  title: 'WIDGETS/Table',
  component: Table,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className='flex min-h-screen min-w-full items-center justify-center'>
        <Story />
      </div>
    )
  ]
} satisfies Meta<typeof Table>

export default meta

type Story = StoryObj<typeof Table>

export const Base: Story = {
  args: {
    title: '<h1>Процентная ставка</h1>',
    subtitle: '<p>Для вкладов в рублях. Без возможности досрочного расторжения с сохранением процентов</p>',
    helperText: '<p>*Какой-то текст сноска про что-то очень важное</p>'
  },
  render: (props) => <Table {...props} data={data} columns={columns} />
}

export const BigData: Story = {
  args: {
    title: '<h1>Процентная ставка</h1>',
    subtitle: '<p>Для вкладов в рублях. Без возможности досрочного расторжения с сохранением процентов</p>',
    helperText: '<p>*Какой-то текст сноска про что-то очень важное</p>'
  },
  render: (props) => <Table {...props} data={bigData} columns={columns} />
}
