import type { ComponentPropsWithRef } from 'react'
import { Icon } from '../../icon'
import type { NavigationMode } from '../model'
import { cn } from '$/shared/utils'

interface ArrowNavigationButtonProps extends Omit<ComponentPropsWithRef<'button'>, 'onClick'> {
  mode: NavigationMode
  onClick: (mode: NavigationMode) => void
}

export const ArrowNavigationButton = ({ mode, onClick, children, ...props }: ArrowNavigationButtonProps) => {
  return (
    <button
      className='group flex size-8 cursor-pointer items-center justify-center rounded-full border border-solid border-warm-grey-300 p-1 transition-colors hover:bg-color-dark disabled:bg-color-blue-grey-200'
      type='button'
      onClick={() => onClick(mode)}
      {...props}
    >
      <Icon
        name='arrows/arrowRight'
        className={cn('h-full w-full transition-colors group-hover:text-icon-white group-disabled:text-icon-disabled', {
          'rotate-180': mode === 'prev'
        })}
      />
      {children}
    </button>
  )
}
