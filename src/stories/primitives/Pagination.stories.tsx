import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Pagination, usePagination } from '$/shared/ui'

const meta = {
  title: 'Navigation/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  render: (props) => {
    const [totalPages, setTotalPages] = useState<number>(props.totalPages)
    const [cursorIndex, setCursorIndex] = useState<number>(0)

    const { page, setPage, setLast, setFirst } = usePagination({
      totalPages
    })

    return (
      <div className='flex flex-col gap-2'>
        <p>Total pages: {totalPages}</p>
        <button onClick={() => setTotalPages((prev) => prev + 1)}>Append</button>
        <button
          onClick={() => {
            setTotalPages((prev) => prev + 1)
            setLast()
          }}
        >
          Append and move last
        </button>
        <button onClick={() => setTotalPages((prev) => prev - 1)}>Remove</button>
        <button
          onClick={() => {
            setTotalPages((prev) => prev - 1)
            setFirst()
          }}
        >
          Remove and move start
        </button>
        <button onClick={() => setTotalPages((prev) => prev - 1)}>Remove at</button>
        <button onClick={() => setPage(cursorIndex)}>Move at</button>
        <input
          className='border'
          type='number'
          value={cursorIndex}
          onChange={(event) => setCursorIndex(event.target.valueAsNumber)}
        />
        <Pagination {...props} totalPages={totalPages} page={page + 1} changePage={setPage} />
      </div>
    )
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
