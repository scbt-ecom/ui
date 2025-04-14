import { useCallback, useEffect, useState } from 'react'
import type { EmblaCarouselType } from 'embla-carousel'
import type { NavigationMode } from '../types'

type UseArrowNavigationProps = {
  emblaApi: EmblaCarouselType | undefined
  navigationHandler?: (emblaApi: EmblaCarouselType) => void
}

export const useArrowNavigation = ({ emblaApi, navigationHandler }: UseArrowNavigationProps) => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)

  const onClickNavigationButton = useCallback(
    (mode: NavigationMode) => {
      if (!emblaApi) return
      switch (mode) {
        case 'prev':
          emblaApi.scrollPrev()
          break
        case 'next':
          emblaApi.scrollNext()
          break
      }

      if (navigationHandler) {
        navigationHandler(emblaApi)
      }
    },
    [emblaApi, navigationHandler]
  )

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onSelect(emblaApi)
    emblaApi.on('reInit', onSelect).on('select', onSelect)
  }, [emblaApi, onSelect])

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onClickNavigationButton
  }
}
