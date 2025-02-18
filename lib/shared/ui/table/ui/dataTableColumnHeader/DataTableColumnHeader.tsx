import { type SortDirection } from '@tanstack/react-table'
import { Icon } from '$/shared/ui'
import { cn } from '$/shared/utils'

type DataTableColumnHeaderClasses = {
  root?: string
  content?: string
  icon?: string
}

type DataTableColumnHeaderProps = {
  title: string
  isSorted: boolean | SortDirection
  toggleSorting: (desc: boolean) => void
  nextSortingOrder: boolean | SortDirection
  canSort: boolean
  classes?: DataTableColumnHeaderClasses
}

export const DataTableColumnHeader = ({
  title,
  canSort,
  toggleSorting,
  nextSortingOrder,
  isSorted,
  classes
}: DataTableColumnHeaderProps) => {
  const { root, content, icon } = classes || {}

  return (
    <button
      type='button'
      className={cn('desk-body-regular-l flex items-center justify-center gap-x-2 text-color-secondary', root)}
      onClick={() => toggleSorting(!isSorted)}
      disabled={!canSort}
    >
      <span className={cn('', content)}>{title}</span>
      {canSort && (
        <Icon
          name='arrows/arrowRight'
          className={cn(
            'size-4 rotate-90 text-color-current duration-100',
            {
              '-rotate-90': !nextSortingOrder
            },
            icon
          )}
        />
      )}
    </button>
  )
}
