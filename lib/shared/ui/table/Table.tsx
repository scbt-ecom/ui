import { useState } from 'react'
import {
  type ColumnDef,
  type ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  type SortingState,
  useReactTable
} from '@tanstack/react-table'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/primitives'
import { cn } from '$/shared/utils'

type DataTableClasses = {
  /**
   * Стили таблицы
   */
  table?: string
  /**
   * Стили строки заголовков
   */
  tableHeader?: string
  /**
   * Стили ячейки заголовка
   */
  tableHead?: string
  /**
   * Стили строки
   */
  tableRow?: string
  /**
   * Стили ячейки
   */
  tableCell?: string
}

export type DataTableProps<TData extends {}> = {
  /**
   * Столбцы для построения таблицы
   */
  columns: ColumnDef<TData>[]
  /**
   * Список данных
   */
  data: TData[]
  /**
   * Включить рендеринг заголовков
   */
  enableHeaders?: boolean
  /**
   * Дополнительные стили компонентов
   */
  classes?: DataTableClasses
  /**
   * Режим отображения таблицы
   */
  mode?: 'solid' | 'odd'
}

export const DataTable = <TData extends {}>({
  columns,
  data,
  enableHeaders = true,
  mode = 'solid',
  classes
}: DataTableProps<TData>) => {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [sorting, setSorting] = useState<SortingState>([])

  const table = useReactTable({
    data,
    columns,
    state: { columnFilters, sorting },
    enableRowSelection: true,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    getPaginationRowModel: getPaginationRowModel()
  })

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
            <TableCell colSpan={columns.length}>Not found</TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  )
}
