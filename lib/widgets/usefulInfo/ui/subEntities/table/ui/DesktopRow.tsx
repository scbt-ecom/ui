import { cva } from 'class-variance-authority'
import type { EntityTableProps, TableRow } from '../Table'
import { cn } from '$/shared/utils'

export type DesktopRowClasses = {
  row?: string
  cell?: string
}

type DesktopRowProps = {
  row: TableRow['row']
  tableVariant: EntityTableProps['tableVariant']
  columnsVariant: EntityTableProps['columnsVariant']
  rowIndex: number
  classes?: DesktopRowClasses
}

const desktopRowConfig = cva('desktop:grid mobile:hidden items-center', {
  variants: {
    columnsVariant: {
      twoCols: 'grid-cols-2 gap-16',
      threeCols: 'grid-cols-3 gap-12'
    },
    tableVariant: {
      filled: 'px-4 py-3 even:bg-color-primary-light-default',
      separator: 'px-4 py-4 border-t border-solid border-warm-grey-200'
    }
  }
})

export const DesktopRow = ({ row, tableVariant, columnsVariant, rowIndex, classes }: DesktopRowProps) => {
  return (
    <div className={cn(desktopRowConfig({ columnsVariant, tableVariant }), { 'border-none': rowIndex === 0 }, classes?.row)}>
      {row?.map(({ cell }, cellIndex) => (
        <div
          key={cellIndex}
          className={cn('desk-body-regular-l text-color-dark', { 'font-medium': cellIndex !== 0 }, classes?.cell)}
        >
          {cell && cell}
        </div>
      ))}
    </div>
  )
}
