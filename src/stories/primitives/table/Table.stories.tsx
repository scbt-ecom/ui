import type { Meta, StoryObj } from '@storybook/react'
import { columns } from './columns'
import data from './data.json'
import { DataTable } from '$/shared/ui/table'
import { TablePagination } from '$/shared/ui/table/TablePagination'

const meta = {
  title: 'Base/DataTable',
  component: DataTable,
  parameters: {
    layout: 'centered'
  },
  decorators: [
    (Story) => (
      <div className='w-[600px]'>
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

export const BaseWithoutPagination: Story = {
  args: {
    pagination: false
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

export const WithOddWithoutPagination: Story = {
  args: {
    ...WithOdd.args,
    pagination: false
  }
}

export const PaginationAsRenderProp: Story = {
  args: {
    pagination: (props) => <TablePagination {...props} />
  }
}
