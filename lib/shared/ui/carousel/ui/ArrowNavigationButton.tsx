import type { ComponentPropsWithRef } from 'react'
import { Icon } from '../../icon'
import type { NavigationMode } from '../model'
import { cn } from '$/shared/utils'

export type ArrowNavigationButtonClasses = {
  button?: string
  icon?: string
}

interface ArrowNavigationButtonProps extends Omit<ComponentPropsWithRef<'button'>, 'onClick'> {
  mode: NavigationMode
  onClick: (mode: NavigationMode) => void
  classes?: ArrowNavigationButtonClasses
}

export const ArrowNavigationButton = ({ mode, onClick, children, classes, ...props }: ArrowNavigationButtonProps) => {
  return (
    <button
      className={cn('group flex size-8 cursor-pointer items-center justify-center p-1', classes?.button)}
      type='button'
      onClick={() => onClick(mode)}
      {...props}
    >
      <Icon
        name='arrows/arrowRight'
        className={cn(
          'h-full w-full text-icon-primary-default transition-colors group-disabled:text-icon-disabled',
          { 'rotate-180': mode === 'prev' },
          classes?.icon
        )}
      />
      {children}
    </button>
  )
}
