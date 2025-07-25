import { useState } from 'react'
import {
  type ColumnFiltersState,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  type PaginationState,
  type SortingState,
  useReactTable
} from '@tanstack/react-table'
import { Desktop } from './Desktop'
import { Horizontal } from './Horizontal'
import { type DataTableProps } from './model'
import { useDevice } from '$/shared/hooks'

export const DataTable = <TData extends {}>({
  columns,
  data,
  enableHeaders = true,
  mode = 'solid',
  classes,
  pagination = true,
  empty,
  pageSize = 10
}: DataTableProps<TData>) => {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [sorting, setSorting] = useState<SortingState>([])
  const [paginationState, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize
  })

  const table = useReactTable({
    data,
    columns,
    state: { columnFilters, sorting, pagination: paginationState },
    enableRowSelection: true,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    getPaginationRowModel: getPaginationRowModel()
  })

  const { isMobile } = useDevice()

  if (columns.length > 3 && isMobile) {
    return (
      <Horizontal
        table={table}
        enableHeaders={enableHeaders}
        pagination={pagination}
        empty={empty}
        mode={mode}
        classes={classes}
      />
    )
  }

  return isMobile ? (
    <Desktop table={table} enableHeaders={enableHeaders} empty={empty} pagination={pagination} mode={mode} classes={classes} />
  ) : (
    <Horizontal table={table} enableHeaders={enableHeaders} empty={empty} mode={mode} pagination={pagination} classes={classes} />
  )
}
