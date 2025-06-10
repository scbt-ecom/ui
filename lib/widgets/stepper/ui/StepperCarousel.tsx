import { useState } from 'react'
import { type SingleStepper } from '../model/types'
import { CarouselBase, type CarouselClasses, CarouselSlide, type CarouselSlideClasses } from '$/shared/ui'

export type StepperCarouselClasses = {
  carouselClasses?: CarouselClasses
  carouselSlideClasses?: CarouselSlideClasses
}

interface SingleStepMobileProps<Enabled extends boolean> {
  currentStepper: SingleStepper<Enabled>
  classes?: StepperCarouselClasses
}

export const StepperCarousel = <Enabled extends boolean>({ currentStepper, classes }: SingleStepMobileProps<Enabled>) => {
  const [visibleIndex, setVisibleIndex] = useState(0)

  const { carouselClasses, carouselSlideClasses } = classes || {}

  return (
    <CarouselBase
      carouselOptions={{
        dragFree: false
      }}
      visibleIndex={visibleIndex}
      setVisibleIndex={setVisibleIndex}
      autoPlayOptions={{
        active: false
      }}
      classes={{
        containerWithNavClasses: {
          wrapper: 'gap-4'
        },
        root: 'desktop:hidden',
        carouselContentClasses: {
          slidesOverlay: 'max-w-full w-full'
        },
        ...carouselClasses
      }}
    >
      {currentStepper.details.map((slide, slideIndex) => (
        <CarouselSlide
          key={slideIndex}
          variant='fullScreen'
          slideIndex={slideIndex}
          {...slide}
          classes={{
            slide: 'mobile:w-[328px]  desktop:w-[1140px]',
            ...carouselSlideClasses
          }}
        />
      ))}
    </CarouselBase>
  )
}
