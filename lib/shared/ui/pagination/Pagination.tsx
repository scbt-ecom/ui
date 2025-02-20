import { cn } from '../../utils'
import { Button } from '../button'
import { Icon } from '../icon'

type PaginationClasses = {
  root?: string
  button?: string
  ellipsis?: string
  active?: string
}

export type PaginationProps = {
  /**
   * активная страница
   */
  page?: number
  /**
   * количество элементов после сужения страниц пример 1 - (1...6 7 8...n)
   *                                                            ^   ^
   */
  between?: number
  /**
   * количество элементов на странице
   */
  totalPages: number
  /**
   * функция для переключения страницы
   */
  changePage: (page: number) => void
  /**
   * включить переход на следующую/предыдущую страницу
   */
  next?: boolean
  /**
   * количество страниц для сужения
   */
  ellipsis?: number
  /**
   * дополнительные стили
   */
  classes?: PaginationClasses
}

export const Pagination = ({
  page = 1,
  between = 3,
  totalPages,
  changePage,
  next = true,
  ellipsis = 0,
  classes
}: PaginationProps) => {
  // гарантирует что between никогда не будет меньше 1
  between = between < 1 ? 1 : between
  // ограничиваем текущую страницу от 1 до totalPages
  page = Math.min(Math.max(page, 1), totalPages)
  // ограничиваем количество сужаемых элементов от 0 до between - 2
  ellipsis = Math.min(Math.max(ellipsis, 0), between - 2)

  const positions = Array.from({ length: totalPages }, (_, index) => index)

  // количество отображаемых страниц (включая активную)
  const visiblePages = between * 2 + 1

  let range

  if (totalPages < visiblePages) {
    // если общее количество страниц меньше, чем нужно отобразить, то отображаем все страницы
    range = positions
  } else if (page - 1 <= between) {
    // если текущая страница близка к началу, то отображаем страницы с начала
    range = positions.slice(0, visiblePages - (ellipsis > 0 ? ellipsis + 1 : 0))
  } else if (page + between >= totalPages) {
    // если текущая страница близка к концу, то отображаем страницы с конца
    range = positions.slice(totalPages - visiblePages + (ellipsis > 0 ? ellipsis + 1 : 0), totalPages)
  } else {
    // иначе показываем страницы обрезая их слева и справа
    range = positions.slice(
      page - 1 - (between - (ellipsis > 0 ? ellipsis + 1 : 0)),
      page + (between - (ellipsis > 0 ? ellipsis + 1 : 0))
    )
  }

  return (
    <div className={cn('flex', classes?.root)}>
      {next && (
        <Button
          size='sm'
          intent='ghost'
          className={cn('mob-body-regular-l w-[40px] p-0 text-color-dark disabled:text-icon-disabled', classes?.button)}
          disabled={page <= 1}
          onClick={() => page > 1 && changePage(page - 2)}
        >
          <Icon name='arrows/arrowRight' className='rotate-180' />
        </Button>
      )}
      {totalPages > visiblePages &&
        ellipsis > 0 &&
        positions.slice(0, page - 1 <= between ? 0 : ellipsis).map((value) => (
          <Button
            key={value}
            size='sm'
            intent='ghost'
            className={cn('mob-body-regular-l w-[40px] p-0 text-color-dark', classes?.button)}
            onClick={() => value !== page - 1 && changePage(value)}
          >
            {value + 1}
          </Button>
        ))}
      {totalPages > visiblePages && ellipsis > 0 && page - 1 > between && (
        <Button
          size='sm'
          intent='ghost'
          className={cn('mob-body-regular-l pointer-events-none w-[40px] p-0 text-color-dark', classes?.ellipsis)}
        >
          ...
        </Button>
      )}
      {range.map((value) => {
        const active = value === page - 1

        return (
          <Button
            key={value}
            size='sm'
            className={cn(
              'mob-body-regular-l w-[40px] p-0 text-color-dark',
              {
                [`text-color-primary-default ${classes?.active}`]: active
              },
              classes?.button
            )}
            intent={active ? 'secondary' : 'ghost'}
            onClick={() => !active && changePage(value)}
          >
            {value + 1}
          </Button>
        )
      })}
      {totalPages > visiblePages && ellipsis > 0 && page < totalPages - between && (
        <Button
          size='sm'
          intent='ghost'
          className={cn('mob-body-regular-l pointer-events-none w-[40px] p-0 text-color-dark', classes?.ellipsis)}
        >
          ...
        </Button>
      )}
      {totalPages > visiblePages &&
        ellipsis > 0 &&
        positions.slice(page >= totalPages - between ? totalPages : totalPages - ellipsis, totalPages).map((value) => (
          <Button
            key={value}
            size='sm'
            className={cn('mob-body-regular-l w-[40px] p-0 text-color-dark', classes?.button)}
            intent='ghost'
            onClick={() => value !== page - 1 && changePage(value)}
          >
            {value + 1}
          </Button>
        ))}
      {next && (
        <Button
          size='sm'
          intent='ghost'
          className={cn('mob-body-regular-l w-[40px] p-0 text-color-dark disabled:text-icon-disabled', classes?.button)}
          disabled={page >= totalPages}
          onClick={() => page < totalPages && changePage(page)}
        >
          <Icon name='arrows/arrowRight' />
        </Button>
      )}
    </div>
  )
}
