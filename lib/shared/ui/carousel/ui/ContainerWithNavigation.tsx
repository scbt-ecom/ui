import type { ReactNode } from 'react'
import type { NavigationMode } from '../model'
import { ArrowNavigationButton, type ArrowNavigationButtonClasses } from './ArrowNavigationButton'
import { cn } from '$/shared/utils'

export type ContainerWithNavigationClasses = {
  wrapper?: string
  arrowLeftClasses?: ArrowNavigationButtonClasses
  arrowRightClasses?: ArrowNavigationButtonClasses
}

export interface ContainerWithNavigationProps {
  children: ReactNode
  prevBtnDisabled: boolean
  nextBtnDisabled: boolean
  onClickNavigationButton: (mode: NavigationMode) => void
  classes?: ContainerWithNavigationClasses
}

export const ContainerWithNavigation = ({
  children,
  prevBtnDisabled,
  nextBtnDisabled,
  onClickNavigationButton,
  classes
}: ContainerWithNavigationProps) => {
  return (
    <div className={cn('relative flex items-center gap-1', classes?.wrapper)}>
      <ArrowNavigationButton
        mode='prev'
        onClick={onClickNavigationButton}
        disabled={prevBtnDisabled}
        classes={{
          button: cn('absolute -left-12 top-1/2 -transform-y-1/2', classes?.arrowLeftClasses?.button),
          icon: cn(classes?.arrowLeftClasses?.icon)
        }}
      />
      {children}
      <ArrowNavigationButton
        mode='next'
        onClick={onClickNavigationButton}
        disabled={nextBtnDisabled}
        classes={{
          button: cn('absolute -right-12 top-1/2 -transform-y-1/2', classes?.arrowRightClasses?.button),
          icon: cn(classes?.arrowRightClasses?.icon)
        }}
      />
    </div>
  )
}
