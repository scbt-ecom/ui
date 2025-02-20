import { cn } from '../../utils'
import { Pagination, type PaginationProps } from '../pagination'

type TablePaginationClasses = {
  root?: string
  displayShown?: string
  pagination?: PaginationProps['classes']
}

export type TablePaginationProps = {
  pageSize: number
  page: number
  rowsCount: number
  pageCount: number
  onPageIndexChange: (page: number) => void
  classes?: TablePaginationClasses
}

export const TablePagination = ({ page, pageCount, pageSize, onPageIndexChange, rowsCount, classes }: TablePaginationProps) => {
  const prevRows = pageSize * page
  const rowsLeft = prevRows > rowsCount ? rowsCount : prevRows

  return (
    <div className={cn('flex w-full items-center justify-between', classes?.root)}>
      <span className={cn('desk-body-regular-m text-color-tetriary', classes?.displayShown)}>
        Показано {rowsLeft} из {rowsCount}
      </span>
      <Pagination
        totalPages={pageCount}
        changePage={(pageIndex) => onPageIndexChange(pageIndex)}
        page={page}
        ellipsis={1}
        classes={classes?.pagination}
      />
    </div>
  )
}
