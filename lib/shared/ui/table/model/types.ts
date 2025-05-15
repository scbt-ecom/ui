import type { ColumnDef } from '@tanstack/react-table'
import { type TablePaginationProps } from '../TablePagination'

type DataTableClasses = {
  /**
   * Стили родителя
   */
  root?: string
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
  /**
   * Стили пагинации
   */
  pagination?: TablePaginationProps['classes']
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
  /**
   * пагинация
   */
  pagination: ((props: TablePaginationProps) => React.JSX.Element) | boolean
  /**
   * количество элементов на странице
   */
  pageSize?: number
}
