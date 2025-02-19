import { cn } from '../../utils'
import { Button } from '../button'
import { Icon } from '../icon'

type PaginationClasses = {
  root?: string
  button?: string
  ellipsis?: string
}

export type PaginationProps = {
  /**
   * активная страница
   */
  page?: number
  /**
   * максимальное количество элементов слева и справа от активной страницы
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
   * количество элементов после сужения страниц пример 1 - (1...6 7 8...n)
   *                                                            ^   ^
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
  between = between < 1 ? 1 : between
  page = Math.min(Math.max(page, 1), totalPages)
  ellipsis = Math.min(Math.max(ellipsis, 0), between - 2)

  const positions = Array.from({ length: totalPages }, (_, index) => index)

  const qtdPages = between * 2 + 1

  let range

  if (totalPages < qtdPages) {
    range = positions
  } else if (page - 1 <= between) {
    range = positions.slice(0, qtdPages - (ellipsis > 0 ? ellipsis + 1 : 0))
  } else if (page + between >= totalPages) {
    range = positions.slice(totalPages - qtdPages + (ellipsis > 0 ? ellipsis + 1 : 0), totalPages)
  } else {
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
      {totalPages > between * 2 + 1 &&
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
      {totalPages > between * 2 + 1 && ellipsis > 0 && page - 1 > between && (
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
                'text-color-primary-default': active
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
      {totalPages > between * 2 + 1 && ellipsis > 0 && page < totalPages - between && (
        <Button
          size='sm'
          intent='ghost'
          className={cn('mob-body-regular-l pointer-events-none w-[40px] p-0 text-color-dark', classes?.ellipsis)}
        >
          ...
        </Button>
      )}
      {totalPages > between * 2 + 1 &&
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
