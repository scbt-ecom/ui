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
import { Mobile } from './Mobile'
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
  pageSize = 10,
  horizontal
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

  if (horizontal) {
    return (
      <Horizontal
        table={table}
        enableHeaders={enableHeaders}
        empty={empty}
        mode={mode}
        pagination={pagination}
        classes={classes}
      />
    )
  }

  return isMobile ? (
    <Mobile table={table} enableHeaders={enableHeaders} empty={empty} mode={mode} classes={classes} />
  ) : (
    <Desktop table={table} enableHeaders={enableHeaders} empty={empty} mode={mode} pagination={pagination} classes={classes} />
  )
}
