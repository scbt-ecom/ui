export type ColumnDefinition<Key extends string> = {
  title: Key
  visibleTitle?: string
  enableSorting: boolean
}

export interface TableProps<Key extends string, TData extends Record<Key, unknown>> {
  title: string
  subtitle: string
  columns: ColumnDefinition<Key>[]
  data: TData[]
  enableHeaders: boolean
  helperText?: string
  horizontal: boolean
  mode: 'solid' | 'odd'
  pagination: boolean
  pageSize?: number
}
