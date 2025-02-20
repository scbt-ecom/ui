import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Pagination } from '$/shared/ui'

const meta = {
  title: 'Base/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  render: (props) => {
    const [page, setPage] = useState<number>(1)

    return <Pagination {...props} page={page + 1} changePage={setPage} />
  }
} satisfies Meta<typeof Pagination>
type Story = StoryObj<typeof Pagination>

export default meta

export const Base: Story = {
  args: {
    totalPages: 25,
    ellipsis: 1
  }
}

export const WithoutEllipsis: Story = {
  args: {
    ...Base.args,
    ellipsis: 0
  }
}

export const WithLargeBetweenElements: Story = {
  args: {
    ...Base.args,
    between: 10
  }
}

export const WithoutEllipsisAndLargeBetweenElements: Story = {
  args: {
    ...Base.args,
    ...WithLargeBetweenElements.args,
    ellipsis: 0
  }
}
