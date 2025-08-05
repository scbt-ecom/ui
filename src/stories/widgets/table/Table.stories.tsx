import { type Meta, type StoryObj } from '@storybook/react'
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
  args: {},
  render: (props) => <Table {...props} {...data} mode={data.mode as 'solid' | 'odd'} />
}
