import { type ClassAttributes, type HTMLAttributes, type MouseEventHandler } from 'react'
import { Icon } from '$/shared/ui'
import { cn } from '$/shared/utils'

type NavigationProps = {
  nextMonth?: Date
  onNextClick?: MouseEventHandler<HTMLButtonElement>
  onPreviousClick?: MouseEventHandler<HTMLButtonElement>
  previousMonth?: Date
} & ClassAttributes<HTMLElement> &
  HTMLAttributes<HTMLElement>

export const Navigation = ({ onPreviousClick, onNextClick, className, ...props }: NavigationProps) => (
  <nav {...props} className={cn('flex h-fit gap-x-3', className)}>
    <button type='button' onClick={onPreviousClick}>
      <Icon name='arrows/arrowRight' className='rotate-180 text-icon-blue-grey-800' />
    </button>
    <button type='button' onClick={onNextClick}>
      <Icon name='arrows/arrowRight' className='text-icon-blue-grey-800' />
    </button>
  </nav>
)
