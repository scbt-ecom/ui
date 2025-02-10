import { cva } from 'class-variance-authority'
import type { EntityTable } from '../../../../model'
import { cn } from '$/shared/utils'

interface IFormattedRow {
  cell: string
  heading?: string
}

export interface MobileRowProps {
  row: IFormattedRow[]
  tableVariant: EntityTable['tableVariant']
  columnsVariant: EntityTable['columnsVariant']
  headingsExist: boolean
}

const mobileRowConfig = cva('flex flex-col gap-2', {
  variants: {
    tableVariant: {
      filled: 'px-4 py-4 odd:bg-color-primary-light-default',
      separator: 'py-4 border-t border-solid border-warm-grey-200 first:border-none'
    }
  }
})

export const MobileRow = ({ row, tableVariant, columnsVariant, headingsExist }: MobileRowProps) => {
  return (
    <div className={cn(mobileRowConfig({ tableVariant }))}>
      {row?.map(({ cell, heading }, cellIndex) => (
        <div key={cellIndex} className={cn('grid grid-cols-2 gap-3', { 'grid-cols-1 gap-0': !headingsExist })}>
          {heading && <div className='mob-body-regular-l text-color-secondary'>{heading}</div>}
          <div
            className={cn('mob-body-regular-l text-color-dark', {
              'font-medium':
                (cellIndex !== 0 && columnsVariant === 'twoCols') ||
                columnsVariant === 'threeCols' ||
                (columnsVariant === 'twoCols' && headingsExist)
            })}
          >
            {cell}
          </div>
        </div>
      ))}
    </div>
  )
}
