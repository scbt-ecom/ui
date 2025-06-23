import { type AllowedIcons, Icon } from '../icon'
import { cn } from '$/shared/utils/cn'

type ChipsClasses = {
  root?: string
  icon?: string
}

export interface ChipsProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'className'> {
  icon?: AllowedIcons
  classes?: ChipsClasses
}

export const Chips = ({ icon, children, classes, ...props }: ChipsProps) => (
  <div
    {...props}
    className={cn(
      'desk-body-regular-l flex gap-x-1 rounded-sm bg-color-blue-grey-100 px-2 py-1 text-color-tetriary',
      classes?.root
    )}
  >
    {icon && <Icon name={icon} className={cn('size-6', classes?.icon)} />}
    {children}
  </div>
)
