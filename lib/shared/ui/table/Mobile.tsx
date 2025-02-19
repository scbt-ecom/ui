import { flexRender, type Table } from '@tanstack/react-table'
import type { DataTableProps } from './model'
import { cn } from '$/shared/utils'

export const Mobile = <TData extends {}>({
  mode,
  enableHeaders,
  table,
  classes
}: Pick<DataTableProps<TData>, 'enableHeaders' | 'classes' | 'mode'> & { table: Table<TData> }) => {
  return (
    <div className={cn('w-full', classes?.table)}>
      {table.getRowModel().rows.length ? (
        table.getRowModel().rows.map((row) => (
          <div
            key={row.id}
            className={cn(
              {
                '[&:not(:last-child)]:border-b [&:not(:last-child)]:border-b-[rgba(234,237,241,1)]': mode === 'solid',
                '[&:nth-child(odd)]:bg-color-primary-light-default': mode === 'odd'
              },
              classes?.tableRow
            )}
          >
            {row.getVisibleCells().map((cell, index) => {
              const header = table.getHeaderGroups()[0].headers[index]

              return (
                <div
                  key={cell.id}
                  className={cn(
                    'grid grid-cols-2 p-2',
                    {
                      'px-2': mode === 'odd',
                      'font-medium': index !== 0
                    },
                    classes?.tableCell
                  )}
                >
                  {enableHeaders && (
                    <p className='font-bold'>{flexRender(header.column.columnDef.header, header.getContext())}</p>
                  )}
                  <p>{flexRender(cell.column.columnDef.cell, cell.getContext())}</p>
                </div>
              )
            })}
          </div>
        ))
      ) : (
        <div>Not found</div>
      )}
    </div>
  )
}
