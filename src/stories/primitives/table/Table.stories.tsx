import type { Meta, StoryObj } from '@storybook/react'
import { columns } from './columns'
import data from './data.json'
import { DataTable } from '$/shared/ui/table'

const meta = {
  title: 'Base/DataTable',
  component: DataTable,
  parameters: {
    layout: 'centered'
  },
  decorators: [
    (Story) => (
      <div className='w-[450px]'>
        <Story />
      </div>
    )
  ],
  render: (props) => <DataTable {...props} data={data} columns={columns} />
} satisfies Meta<typeof DataTable>
type Story = StoryObj<typeof DataTable>

export default meta

export const Base: Story = {
  args: {}
}

export const BaseWithoutHeaders: Story = {
  args: {
    enableHeaders: false
  }
}

export const WithOdd: Story = {
  args: {
    mode: 'odd'
  }
}

export const WithOddWithoutHeaders: Story = {
  args: {
    mode: 'odd',
    enableHeaders: false
  }
}
