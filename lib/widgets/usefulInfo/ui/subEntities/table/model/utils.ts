import { cva } from 'class-variance-authority'
import type { TableHeading, TableRow } from '../Table'

export const transformMobileRows = (rows: TableRow[], headings?: TableHeading[]) => {
  return {
    rows: rows?.map(({ row }) => ({
      row: row?.map((cell, index) => ({
        ...cell,
        heading: headings && headings[index]?.heading
      }))
    }))
  }
}

export const tableConfig = cva('flex flex-col', {
  variants: {
    columnsVariant: {
      twoCols: 'w-full max-w-[656px]',
      threeCols: 'w-full max-w-[768px]'
    }
  }
})
