import { useCallback } from 'react'
import type { EmblaCarouselType, EmblaOptionsType } from 'embla-carousel'
import Autoplay, { type AutoplayOptionsType } from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'

type UseCarouselProps = {
  carouselOptions: EmblaOptionsType
  autoPlayOptions?: AutoplayOptionsType
}

export const useCarousel = ({ carouselOptions, autoPlayOptions }: UseCarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(carouselOptions, [Autoplay(autoPlayOptions)])

  const navigationHandler = useCallback((emblaApi: EmblaCarouselType) => {
    const autoplay = emblaApi?.plugins()?.autoplay
    if (!autoplay) return

    const resetOrStop = autoplay.options.stopOnInteraction === false ? autoplay.reset : autoplay.stop

    resetOrStop()
  }, [])

  return { emblaRef, emblaApi, navigationHandler }
}
