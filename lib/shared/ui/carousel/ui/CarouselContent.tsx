import { forwardRef, type ReactNode } from 'react'
import type { DotsOptions, UseDotsNavigationReturn } from '../model'
import { DotsNavigations, type DotsNavigationsClasses } from './DotsNavigations'
import { useDevice } from '$/shared/hooks'
import { cn } from '$/shared/utils'

export type CarouselContentClasses = {
  dotsClasses?: DotsNavigationsClasses
  slidesOverlay?: string
  slidesWrapper?: string
}

export interface CarouselContentProps {
  classes?: CarouselContentClasses
  children: ReactNode
  dotsProps: UseDotsNavigationReturn
  dotsOptions: DotsOptions
  visibleIndex: number
}

export const CarouselContent = forwardRef<HTMLDivElement, CarouselContentProps>(
  ({ visibleIndex, classes, children, dotsProps, dotsOptions }, ref) => {
    const { isMobile, isDesktop } = useDevice()
    const { mobVisible, deskVisible, ...dotsRestOptions } = dotsOptions ?? {}

    //Отображения точек если переданы и мобильное разрешение
    const withDotsOnMob = mobVisible && isMobile
    //Отображения точек если переданы и полноэкранное разрешение
    const withDotsOnDesk = deskVisible && isDesktop

    const dotsFullProps = {
      visibleIndex,
      ...dotsProps
    }

    return (
      <div className={cn('mx-auto overflow-hidden', classes?.slidesOverlay)} ref={ref}>
        <div className={cn('flex touch-pan-y gap-6', classes?.slidesWrapper)}>{children}</div>
        {(withDotsOnDesk || withDotsOnMob) && <DotsNavigations {...dotsFullProps} {...dotsRestOptions} />}
      </div>
    )
  }
)
