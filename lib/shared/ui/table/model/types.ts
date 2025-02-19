import type { ColumnDef } from '@tanstack/react-table'

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
