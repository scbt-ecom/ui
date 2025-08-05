import { type HeaderContext } from '@tanstack/react-table'
import type { ColumnDefinition } from './types'
import { TypeGuards } from '$/shared/utils'

export const getHeaderAccessors = <Key extends string, TData extends Record<Key, unknown>>(columns: ColumnDefinition<Key>[]) => {
  const accessors = {} as Record<
    keyof TData,
    (key: keyof TData, headerContext: HeaderContext<TData, TData[keyof TData]>) => React.ReactNode
  >
  const sortingColumns: Key[] = []

  for (const column of columns) {
    accessors[column.title] = () =>
      column.visibleTitle && !TypeGuards.isStringEmpty(column.visibleTitle) ? column.visibleTitle : column.title

    if (column.enableSorting) sortingColumns.push(column.title)
  }

  return { accessors, sortingColumns }
}
