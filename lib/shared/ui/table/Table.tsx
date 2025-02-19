import { useState } from 'react'
import {
  type ColumnFiltersState,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  type SortingState,
  useReactTable
} from '@tanstack/react-table'
import { Desktop } from './Desktop'
import { Mobile } from './Mobile'
import { type DataTableProps } from './model'
import { useDevice } from '$/shared/hooks'

export const DataTable = <TData extends {}>({
  columns,
  data,
  enableHeaders = true,
  mode = 'solid',
  classes,
  pagination = true
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

  const { isMobile } = useDevice()

  return isMobile ? (
    <Mobile table={table} enableHeaders={enableHeaders} mode={mode} classes={classes} />
  ) : (
    <Desktop table={table} enableHeaders={enableHeaders} mode={mode} pagination={pagination} classes={classes} />
  )
}
