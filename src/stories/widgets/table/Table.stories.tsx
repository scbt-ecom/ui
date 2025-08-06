import { type Meta, type StoryObj } from '@storybook/react'
import data from './data.json'
import { Table, type TableProps } from '$/widgets/table'

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
    ...(data as TableProps<keyof (typeof data.data)[0], (typeof data.data)[0]>)
  },
  render: (props) => <Table {...props} mode={data.mode as 'solid' | 'odd'} />
}
