import { type HTMLAttributes, type ReactNode } from 'react'
import { type EmblaOptionsType } from 'embla-carousel'
import type { AutoplayOptionsType } from 'embla-carousel-autoplay'
import { useDevice } from '../../hooks'
import { Heading } from '../heading'
import {
  defaultAutoPlayOptions,
  defaultCarouselOptions,
  defaultDotsOptions,
  defaultNavArrowOptions,
  type DotsOptions,
  type NavArrowOptions,
  useArrowNavigation,
  useCarousel,
  useDotsNavigation
} from './model'
import { ArrowNavigationButton, type ArrowNavigationButtonClasses, CarouselContent, type CarouselContentClasses } from './ui'
import { ContainerWithNavigation, type ContainerWithNavigationClasses } from './ui/ContainerWithNavigation'
import { cn } from '$/shared/utils'

export type CarouselClasses = {
  root?: string
  header?: string
  heading?: string
  arrowsNavWrapper?: string
  arrowLeftClasses?: ArrowNavigationButtonClasses
  arrowRightClasses?: ArrowNavigationButtonClasses
  containerWithNavClasses?: ContainerWithNavigationClasses
  carouselContentClasses?: CarouselContentClasses
}

export interface CarouselBaseProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  heading?: string
  carouselOptions?: EmblaOptionsType
  dotsOptions?: DotsOptions
  navArrowOptions?: NavArrowOptions
  autoPlayOptions?: AutoplayOptionsType
  setVisibleIndex: (index: number) => void
  visibleIndex: number
  classes?: CarouselClasses
}

export const CarouselBase = ({
  dotsOptions = defaultDotsOptions,
  navArrowOptions = defaultNavArrowOptions,
  carouselOptions = defaultCarouselOptions,
  heading,
  autoPlayOptions,
  setVisibleIndex,
  visibleIndex,
  children,
  classes,
  ...props
}: CarouselBaseProps) => {
  const mergedCarouselOptions = { ...defaultCarouselOptions, ...carouselOptions }
  const mergedAutoPlayOptions = { ...defaultAutoPlayOptions, ...autoPlayOptions }
  const mergedNavArrowOptions = { ...defaultNavArrowOptions, ...navArrowOptions }
  const mergedDotsOptions = { ...defaultDotsOptions, ...dotsOptions }

  const { emblaApi, navigationHandler, emblaRef } = useCarousel({
    carouselOptions: mergedCarouselOptions,
    autoPlayOptions: mergedAutoPlayOptions
  })

  const dotsProps = useDotsNavigation({ emblaApi, navigationHandler, setVisibleIndex })
  const { prevBtnDisabled, nextBtnDisabled, onClickNavigationButton } = useArrowNavigation({
    emblaApi,
    navigationHandler
  })

  const { isMobile, isDesktop } = useDevice()
  const { deskVisible, mobVisible, position: navArrowPosition } = mergedNavArrowOptions ?? {}

  //Отображения стрелок если переданы и мобильное разрешение
  const withNavArrowsOnMob = mobVisible && isMobile
  //Отображения стрелок если переданы и полноэкранное разрешение
  const winNavArrowsOnDesk = deskVisible && isDesktop
  //Отображения стрелок если переданы
  const winNavArrows = winNavArrowsOnDesk || withNavArrowsOnMob

  const withHeadingAndArrowsTop = Boolean(heading) || (winNavArrows && navArrowPosition === 'top-right')

  return (
    <div className={cn('flex flex-col', classes?.root)} {...props}>
      {withHeadingAndArrowsTop && (
        <div className={cn('flex items-center justify-between gap-6', { 'mb-6': withHeadingAndArrowsTop }, classes?.header)}>
          {Boolean(heading) && (
            <Heading as='h2' className={cn(classes?.heading)}>
              Другие предложения
            </Heading>
          )}

          {winNavArrows && navArrowPosition === 'top-right' && (
            <div className={cn('ml-auto flex items-center gap-2', classes?.arrowsNavWrapper)}>
              <ArrowNavigationButton
                mode='prev'
                onClick={onClickNavigationButton}
                disabled={prevBtnDisabled}
                classes={classes?.arrowLeftClasses}
              />
              <ArrowNavigationButton
                mode='next'
                onClick={onClickNavigationButton}
                disabled={nextBtnDisabled}
                classes={classes?.arrowRightClasses}
              />
            </div>
          )}
        </div>
      )}

      {winNavArrows && navArrowPosition === 'center' ? (
        <ContainerWithNavigation
          onClickNavigationButton={onClickNavigationButton}
          prevBtnDisabled={prevBtnDisabled}
          nextBtnDisabled={nextBtnDisabled}
          classes={classes?.containerWithNavClasses}
        >
          <CarouselContent
            visibleIndex={visibleIndex}
            dotsOptions={mergedDotsOptions}
            ref={emblaRef}
            dotsProps={dotsProps}
            classes={classes?.carouselContentClasses}
          >
            {children}
          </CarouselContent>
        </ContainerWithNavigation>
      ) : (
        <CarouselContent
          visibleIndex={visibleIndex}
          dotsOptions={mergedDotsOptions}
          ref={emblaRef}
          dotsProps={dotsProps}
          classes={classes?.carouselContentClasses}
        >
          {children}
        </CarouselContent>
      )}
    </div>
  )
}
