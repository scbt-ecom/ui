import {
  type CellContext,
  type ColumnDef,
  type ColumnHelper,
  createColumnHelper,
  type HeaderContext,
  type SortingFnOption
} from '@tanstack/react-table'
import { DataTableColumnHeader } from '../ui'
import { TypeGuards } from '$/shared/utils'

type SizeOptions = {
  size?: number
  minSize?: number
  maxSize?: number
}

type ColumnDefOptions<TData, TValue> = {
  enableSorting?: (keyof TData)[] | boolean
  sortingFn?: SortingFnOption<TData> | Partial<Record<keyof TData, SortingFnOption<TData>>>
  enableColumnFilter?: (keyof TData)[] | boolean
  size?: Partial<Record<keyof TData, SizeOptions>>
  helper?: ColumnHelper<TData>
  cellAccessor?: Partial<Record<keyof TData, (cellContext: CellContext<TData, TValue>) => React.ReactNode>>
  headerAccessor?: Partial<
    Record<keyof TData, (key: keyof TData, headerContext: HeaderContext<TData, TValue>) => React.ReactNode>
  >
}

export class TableUtils {
  static getColumnHelper<TData extends {}>(): ColumnHelper<TData> {
    return createColumnHelper<TData>()
  }

  static getColumns<TData extends {}, TValue = TData[keyof TData]>(
    template: TData,
    options?: ColumnDefOptions<TData, TValue>
  ): ColumnDef<TData>[] {
    const {
      helper = this.getColumnHelper<TData>(),
      enableColumnFilter = false,
      enableSorting = false,
      cellAccessor,
      headerAccessor,
      sortingFn,
      size
    } = options || {}

    const keys = Object.keys(template) as (keyof TData)[]

    return keys.map((key) => {
      return helper.accessor<any, TValue>(key, {
        header: (header) => {
          const { column } = header
          const accessor = headerAccessor ? headerAccessor[key] : null

          return (
            <DataTableColumnHeader
              isSorted={column.getIsSorted() === 'desc'}
              nextSortingOrder={column.getNextSortingOrder()}
              toggleSorting={column.toggleSorting}
              canSort={column.getCanSort()}
            >
              {accessor ? accessor(key, header) : (key as string)}
            </DataTableColumnHeader>
          )
        },
        cell: (cell) => {
          const accessor = cellAccessor ? cellAccessor[key] : null

          return accessor ? accessor(cell) : cell.getValue()
        },
        enableColumnFilter: TypeGuards.isBoolean(enableColumnFilter) ? enableColumnFilter : enableColumnFilter.includes(key),
        enableSorting: TypeGuards.isBoolean(enableSorting) ? enableSorting : enableSorting.includes(key),
        sortingFn: typeof sortingFn === 'object' ? sortingFn[key] : sortingFn,
        ...size?.[key]
      })
    }) as ColumnDef<TData>[]
  }
}
