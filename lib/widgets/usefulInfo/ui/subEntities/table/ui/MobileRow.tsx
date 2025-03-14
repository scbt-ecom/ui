import { cva } from 'class-variance-authority'
import type { EntityTableProps } from '../Table'
import { cn } from '$/shared/utils'

interface FormattedRow {
  cell: string
  heading?: string
}

export type MobileRowClasses = {
  row?: string
  wrapper?: string
  heading?: string
  cell?: string
}

export interface MobileRowProps {
  row: FormattedRow[]
  tableVariant: EntityTableProps['tableVariant']
  columnsVariant: EntityTableProps['columnsVariant']
  headingsExist: boolean
  classes?: MobileRowClasses
}

const mobileRowConfig = cva('flex flex-col gap-2', {
  variants: {
    tableVariant: {
      filled: 'px-4 py-4 odd:bg-color-primary-light-default',
      separator: 'py-4 border-t border-solid border-warm-grey-200 first:border-none'
    }
  }
})

export const MobileRow = ({ row, tableVariant, columnsVariant, headingsExist, classes }: MobileRowProps) => {
  return (
    <div className={cn(mobileRowConfig({ tableVariant }), classes?.row)}>
      {row?.map(({ cell, heading }, cellIndex) => (
        <div key={cellIndex} className={cn('grid grid-cols-2 gap-3', { 'grid-cols-1 gap-0': !headingsExist }, classes?.wrapper)}>
          {heading && <div className={cn('mob-body-regular-l text-color-secondary', classes?.heading)}>{heading}</div>}
          <div
            className={cn(
              'mob-body-regular-l text-color-dark',
              {
                'font-medium':
                  (cellIndex !== 0 && columnsVariant === 'twoCols') ||
                  columnsVariant === 'threeCols' ||
                  (columnsVariant === 'twoCols' && headingsExist)
              },
              classes?.cell
            )}
          >
            {cell}
          </div>
        </div>
      ))}
    </div>
  )
}
