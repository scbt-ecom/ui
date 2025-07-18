import { flexRender, type Header, type Table as TTable } from '@tanstack/react-table'
import type { DataTableProps } from './model'
import { TablePagination } from './TablePagination'
import { Table, TableBody, TableCell, TableHead, TableRow } from './ui'
import { cn } from '$/shared/utils'

type DesktopTableProps<TData extends {}> = Pick<
  DataTableProps<TData>,
  'enableHeaders' | 'classes' | 'mode' | 'pagination' | 'empty'
> & {
  table: TTable<TData>
}

export const Horizontal = <TData extends {}>({
  mode,
  enableHeaders,
  table,
  classes,
  pagination,
  empty = 'Not found'
}: DesktopTableProps<TData>) => {
  const paginationEnabled = pagination !== false && table.getPageCount() > 1

  const paginationProps = {
    pageCount: table.getPageCount(),
    rowsCount: table.getCoreRowModel().rows.length,
    pageSize: table.getState().pagination.pageSize,
    page: table.getState().pagination.pageIndex + 1,
    onPageIndexChange: table.setPageIndex,
    classes: classes?.pagination
  }

  const rows = table.getRowModel().rows
  const columns = table.getAllLeafColumns()

  // карта column.id -> header
  const headersMap = new Map<string, Header<TData, unknown>>()
  table.getHeaderGroups().forEach((group) => {
    group.headers.forEach((header) => {
      headersMap.set(header.column.id, header)
    })
  })

  return (
    <div className={cn('flex w-full flex-col gap-y-4', classes?.root)}>
      <div className='overflow-x-auto'>
        <Table className={cn('min-w-full', classes?.table)}>
          <TableBody>
            {columns.length && rows.length ? (
              columns.map((column, index) => {
                const header = headersMap.get(column.id)

                return (
                  <TableRow
                    key={column.id}
                    className={cn(
                      'w-full',
                      {
                        '[&:not(:last-child)]:border-b [&:not(:last-child)]:border-b-[rgba(234,237,241,1)]': mode === 'solid',
                        'bg-color-primary-light-default': mode === 'odd' && index % 2 === 0
                      },
                      classes?.tableRow
                    )}
                  >
                    {enableHeaders && (
                      <TableHead
                        className={cn(
                          'py-3 text-left text-color-tetriary desktop:whitespace-nowrap',
                          {
                            'px-2': mode === 'odd'
                          },
                          classes?.tableHead
                        )}
                      >
                        {header && flexRender(header.column.columnDef.header, header.getContext())}
                      </TableHead>
                    )}

                    {rows.map((row, rowIndex) => {
                      const cell = row.getVisibleCells().find((c) => c.column.id === column.id)
                      if (!cell) return null

                      return (
                        <TableCell
                          key={cell.id}
                          className={cn(
                            'whitespace-nowrap py-3',
                            {
                              'px-2': mode === 'odd'
                            },
                            classes?.tableCell
                          )}
                        >
                          {flexRender(cell.column.columnDef.cell, {
                            ...cell.getContext(),
                            rowIndex
                          })}
                        </TableCell>
                      )
                    })}
                  </TableRow>
                )
              })
            ) : (
              <TableRow>
                <TableCell className='py-4 text-center' colSpan={columns.length + 1}>
                  {empty}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {paginationEnabled ? (
        typeof pagination === 'function' ? (
          pagination(paginationProps)
        ) : (
          <TablePagination {...paginationProps} />
        )
      ) : null}
    </div>
  )
}
