import { useState } from 'react'
import { type SingleStepper } from '../model/types'
import { CarouselBase, CarouselSlide } from '$/shared/ui'

interface SingleStepMobileProps<Enabled extends boolean> {
  currentStepper: SingleStepper<Enabled>
}

export const StepperCarousel = <Enabled extends boolean>({ currentStepper }: SingleStepMobileProps<Enabled>) => {
  const [visibleIndex, setVisibleIndex] = useState(0)

  return (
    <CarouselBase
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
        }
      }}
    >
      {currentStepper.details.map((slide, slideIndex) => (
        <CarouselSlide
          key={slideIndex}
          variant='fullScreen'
          slideIndex={slideIndex}
          {...slide}
          classes={{
            slide: 'mobile:w-[328px]  desktop:w-[1140px]'
          }}
        />
      ))}
    </CarouselBase>
  )
}
