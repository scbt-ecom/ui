import { type HeaderContext, type SortingFnOption } from '@tanstack/react-table'
import type { ColumnDefinition, OrientationOptions } from './types'
import { TypeGuards } from '$/shared/utils'

export const getHeaderAccessors = <Key extends string, TData extends Record<Key, unknown>>(columns: ColumnDefinition<Key>[]) => {
  const accessors = {} as Record<
    keyof TData,
    (key: keyof TData, headerContext: HeaderContext<TData, TData[keyof TData]>) => React.ReactNode
  >
  const sortingColumns: Key[] = []
  const sortingFn: Partial<Record<keyof TData, SortingFnOption<TData>>> = {}

  for (const column of columns) {
    accessors[column.title] = () =>
      column.visibleTitle && !TypeGuards.isStringEmpty(column.visibleTitle) ? column.visibleTitle : column.title
    sortingFn[column.title] = column.sortingFn

    if (column.enableSorting) sortingColumns.push(column.title)
  }

  return { accessors, sortingColumns, sortingFn }
}

export const isHorizontalTable = (orientation: OrientationOptions) => {
  if (orientation.type === 'true') return true
  if (orientation.type === 'false') return false

  const { condition, operand } = orientation

  switch (condition) {
    case '<':
      return operand.left < operand.right
    case '<=':
      return operand.left <= operand.right
    case '===':
      return operand.left === operand.right
    case '!==':
      return operand.left !== operand.right
    case '>':
      return operand.left > operand.right
    case '>=':
      return operand.left >= operand.right
  }
}
