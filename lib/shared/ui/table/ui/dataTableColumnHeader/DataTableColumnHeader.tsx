import { type SortDirection } from '@tanstack/react-table'
import { useDevice } from '$/shared/hooks'
import { Icon } from '$/shared/ui/icon'
import { cn } from '$/shared/utils'

type DataTableColumnHeaderClasses = {
  root?: string
  content?: string
  icon?: string
}

type DataTableColumnHeaderProps = {
  children: React.ReactNode
  isSorted: boolean | SortDirection
  toggleSorting: (desc: boolean) => void
  nextSortingOrder: boolean | SortDirection
  canSort: boolean
  classes?: DataTableColumnHeaderClasses
}

export const DataTableColumnHeader = ({
  children,
  canSort,
  toggleSorting,
  nextSortingOrder,
  isSorted,
  classes
}: DataTableColumnHeaderProps) => {
  const { root, content, icon } = classes || {}

  const { isDesktop } = useDevice()

  const isSortable = canSort && isDesktop

  return (
    <button
      type='button'
      className={cn('desk-body-regular-l flex items-center justify-center gap-x-2 text-color-secondary', root)}
      onClick={() => toggleSorting(!isSorted)}
      disabled={!isSortable}
    >
      <span className={cn('', content)}>{children}</span>
      {isSortable && (
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
