import { flexRender, type Table as TTable } from '@tanstack/react-table'
import type { DataTableProps } from './model'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui'
import { cn } from '$/shared/utils'

export const Desktop = <TData extends {}>({
  mode,
  enableHeaders,
  table,
  classes
}: Pick<DataTableProps<TData>, 'enableHeaders' | 'classes' | 'mode'> & { table: TTable<TData> }) => {
  return (
    <Table className={cn('w-full', classes?.table)}>
      {enableHeaders && (
        <TableHeader className='px-2'>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow
              key={headerGroup.id}
              className={cn(
                'w-full',
                {
                  'border-b border-b-[rgba(234,237,241,1)]': mode === 'solid'
                },
                classes?.tableHeader
              )}
            >
              {headerGroup.headers.map((header) => (
                <TableHead
                  key={header.id}
                  className={cn(
                    'py-3',
                    {
                      'px-2': mode === 'odd'
                    },
                    classes?.tableHead
                  )}
                >
                  {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
      )}
      <TableBody>
        {table.getRowModel().rows.length ? (
          table.getRowModel().rows.map((row) => (
            <TableRow
              key={row.id}
              className={cn(
                'w-full',
                {
                  '[&:not(:last-child)]:border-b [&:not(:last-child)]:border-b-[rgba(234,237,241,1)]': mode === 'solid',
                  '[&:nth-child(odd)]:bg-color-primary-light-default': mode === 'odd'
                },
                classes?.tableRow
              )}
            >
              {row.getVisibleCells().map((cell, cellIndex) => (
                <TableCell
                  key={cell.id}
                  className={cn(
                    'py-3',
                    {
                      'px-2': mode === 'odd',
                      'font-medium': cellIndex !== 0
                    },
                    classes?.tableCell
                  )}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={table.getRowCount()}>Not found</TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  )
}
