import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { additionalContentSlides, fullScreenSlides, productsSlides, textSteps } from './mocks'
import { TextStepsList } from './ui'
import { CarouselBase, ResponsiveContainer } from '$/shared/ui'
import { CarouselSlide } from '$/shared/ui/carousel/ui'

const meta = {
  title: 'Interactive/Carousel',
  component: CarouselBase,
  tags: ['autodocs'],
  parameters: {
    layout: 'screen'
  },
  decorators: [(Story) => <div className='py-40'>{Story()}</div>]
} satisfies Meta<typeof CarouselBase>

export default meta
type Story = StoryObj<typeof CarouselBase>

export const WithAdditionalContent: Story = {
  render: () => {
    const [visibleIndex, setVisibleIndex] = useState(0)

    return (
      <ResponsiveContainer>
        <div className='flex items-start gap-6 bg-[#F7FBFF] px-3 py-6 mobile:flex-col desktop:px-6 desktop:py-12'>
          <TextStepsList heading='Как пользоваться Mir Pay' textSteps={textSteps} visibleIndex={visibleIndex} />
          <CarouselBase
            visibleIndex={visibleIndex}
            setVisibleIndex={setVisibleIndex}
            autoPlayOptions={{
              active: false
            }}
            navArrowOptions={{
              position: 'center'
            }}
            classes={{
              containerWithNavClasses: {
                wrapper: 'gap-4'
              },
              carouselContentClasses: {
                slidesOverlay: 'max-w-[240px]'
              }
            }}
          >
            {additionalContentSlides.map((slide, slideIndex) => (
              <CarouselSlide
                variant='onlyImage'
                key={slideIndex}
                classes={{
                  slide: 'mobile:w-[240px] desktop:w-[240px]'
                }}
                {...slide}
              />
            ))}
          </CarouselBase>
        </div>
      </ResponsiveContainer>
    )
  }
}

export const ProductCards: Story = {
  render: () => {
    const [visibleIndex, setVisibleIndex] = useState(0)
    return (
      <ResponsiveContainer>
        <CarouselBase
          heading='Другие предложения'
          visibleIndex={visibleIndex}
          setVisibleIndex={setVisibleIndex}
          autoPlayOptions={{
            active: true
          }}
          carouselOptions={{
            loop: true,
            breakpoints: {
              '(max-width: 1188px)': { slidesToScroll: 1 },
              '(min-width: 1188px)': { slidesToScroll: 4 }
            }
          }}
          classes={{
            carouselContentClasses: {
              slidesOverlay: 'max-w-[360px] desktop:max-w-[1140px]'
            }
          }}
        >
          {productsSlides.map((slide, slideIndex) => (
            <CarouselSlide
              variant='productCard'
              key={slideIndex}
              classes={{
                slide: 'mobile:w-[320px] desktop:w-[280px] h-[450px]'
              }}
              {...slide}
            />
          ))}
        </CarouselBase>
      </ResponsiveContainer>
    )
  }
}

export const FullScreen: Story = {
  render: () => {
    const [visibleIndex, setVisibleIndex] = useState(0)

    return (
      <ResponsiveContainer>
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
            carouselContentClasses: {
              slidesOverlay: 'max-w-full w-full'
            }
          }}
        >
          {fullScreenSlides.map((slide, slideIndex) => (
            <CarouselSlide
              key={slideIndex}
              variant='fullScreen'
              slideIndex={slideIndex}
              classes={{
                slide: 'mobile:w-[328px]  desktop:w-[1140px]'
              }}
              {...slide}
            />
          ))}
        </CarouselBase>
      </ResponsiveContainer>
    )
  }
}
