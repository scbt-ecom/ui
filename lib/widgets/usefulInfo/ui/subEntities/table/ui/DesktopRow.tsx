import { cn } from '@scbt-ecom/ui/utils'
import { cva } from 'class-variance-authority'
import type { EntityTable, TableRow } from '../../../../model'

type DesktopRowProps = {
  row: TableRow['row']
  tableVariant: EntityTable['tableVariant']
  columnsVariant: EntityTable['columnsVariant']
  rowIndex: number
}

const desktopRowConfig = cva('grid items-center', {
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

export const DesktopRow = ({ row, tableVariant, columnsVariant, rowIndex }: DesktopRowProps) => {
  return (
    <div className={cn(desktopRowConfig({ columnsVariant, tableVariant }), { 'border-none': rowIndex === 0 })}>
      {row?.map(({ cell }, cellIndex) => (
        <div key={cellIndex} className={cn('desk-body-regular-l text-color-dark', { 'font-medium': cellIndex !== 0 })}>
          {cell && cell}
        </div>
      ))}
    </div>
  )
}
