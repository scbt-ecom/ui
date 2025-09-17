import { type Meta, type StoryObj } from '@storybook/react'
import data from './data.json'
import { InfoTable, type TableProps } from '$/widgets/table'

const meta = {
  title: 'WIDGETS/Table',
  component: InfoTable,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className='flex min-h-screen min-w-full items-center justify-center'>
        <Story />
      </div>
    )
  ]
} satisfies Meta<typeof InfoTable>

export default meta

type Story = StoryObj<typeof InfoTable>

export const Base: Story = {
  args: {
    ...(data as TableProps<keyof (typeof data.data)[0], (typeof data.data)[0]>)
  },
  render: (props) => <InfoTable {...props} mode={data.mode as 'solid' | 'odd'} />
}
