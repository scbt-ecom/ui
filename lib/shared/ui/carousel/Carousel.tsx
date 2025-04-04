import { useCallback } from 'react'
import type { EmblaCarouselType, EmblaOptionsType } from 'embla-carousel'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import { Heading } from '../heading'
import { ResponsiveContainer } from '../responsiveContainer'
import { type CarouselSlideProps, defaultCarouselOptions, defaultSlides, useArrowNavigation, useDotsNavigation } from './model'
import { ArrowNavigationButton, CarouselSlide, DotsNavigations } from './ui'

interface CarouselProps {
  slides: CarouselSlideProps[]
  options?: EmblaOptionsType
}

export const Carousel = ({ slides = defaultSlides, options = defaultCarouselOptions }: CarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()])

  const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const autoplay = emblaApi?.plugins()?.autoplay
    if (!autoplay) return

    const resetOrStop = autoplay.options.stopOnInteraction === false ? autoplay.reset : autoplay.stop

    resetOrStop()
  }, [])

  const { prevBtnDisabled, nextBtnDisabled, onClickNavigationButton } = useArrowNavigation({
    emblaApi,
    onNavButtonClick
  })

  const dotsProps = useDotsNavigation({ emblaApi, onNavButtonClick })

  console.log(emblaApi?.slidesInView(), '@scc')

  return (
    <ResponsiveContainer>
      <div className='mb-6 flex items-center justify-between gap-6'>
        <Heading as='h2'>Другие предложения</Heading>
        <div className='flex items-center gap-2'>
          <ArrowNavigationButton mode='prev' onClick={onClickNavigationButton} disabled={prevBtnDisabled} />
          <ArrowNavigationButton mode='next' onClick={onClickNavigationButton} disabled={nextBtnDisabled} />
        </div>
      </div>
      <div className='m-auto overflow-hidden' ref={emblaRef}>
        <div className='flex touch-pan-y gap-6'>
          {slides.map((slide) => (
            <CarouselSlide key={slide.title} {...slide} />
          ))}
        </div>

        <DotsNavigations {...dotsProps} />
      </div>
    </ResponsiveContainer>
  )
}
