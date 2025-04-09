import { useCallback, useEffect, useState } from 'react'
import type { EmblaCarouselType } from 'embla-carousel'

type UseDotsNavigationProps = {
  emblaApi: EmblaCarouselType | undefined
  navigationHandler: (emblaApi: EmblaCarouselType) => void
  setVisibleIndex: (index: number) => void
}

export type UseDotsNavigationReturn = {
  scrollSnaps: number[]
  onClickDot: (index: number) => void
}

export const useDotsNavigation = ({ emblaApi, navigationHandler, setVisibleIndex }: UseDotsNavigationProps) => {
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const onClickDot = useCallback(
    (index: number) => {
      if (!emblaApi) return
      emblaApi.scrollTo(index)
      if (navigationHandler) {
        navigationHandler(emblaApi)
      }
    },
    [emblaApi, navigationHandler]
  )

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList())
  }, [])

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setVisibleIndex(emblaApi.selectedScrollSnap())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onInit(emblaApi)
    onSelect(emblaApi)
    emblaApi.on('reInit', onInit).on('reInit', onSelect).on('select', onSelect)
  }, [emblaApi, onInit, onSelect])

  return {
    scrollSnaps,
    onClickDot
  }
}
