import { type BuiltInSortingFn } from '@tanstack/react-table'

export type ColumnDefinition<Key extends string> = {
  title: Key
  visibleTitle?: string
  enableSorting: boolean
  sortingFn: BuiltInSortingFn
}

type OrientationEnabled = {
  type: 'true'
}
type OrientationDisabled = {
  type: 'false'
}
type OrientationCondition = {
  type: 'condition'
  condition: '<' | '<=' | '===' | '!==' | '>' | '>='
  operand: {
    left: string
    right: string
  }
}

export type OrientationOptions = OrientationEnabled | OrientationDisabled | OrientationCondition

export interface TableProps<Key extends string, TData extends Record<Key, unknown>> {
  title: string
  subtitle: string
  columns: ColumnDefinition<Key>[]
  data: TData[]
  enableHeaders: boolean
  helperText?: string
  horizontal: OrientationOptions
  mode: 'solid' | 'odd'
  pagination: boolean
  pageSize?: number
}
