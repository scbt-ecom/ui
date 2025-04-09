import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { productsSlidesMocks, slidesWithSteps, textSteps } from './mocks'
import { TextStepsList } from './ui'
import { CarouselBase, ResponsiveContainer } from '$/shared/ui'
import { CarouselSlide } from '$/shared/ui/carousel/ui'

const meta = {
  title: 'INTERACTIVE/Carousel',
  component: CarouselBase,
  tags: ['autodocs'],
  parameters: {
    layout: 'screen'
  },
  decorators: [(Story) => <div className='py-40'>{Story()}</div>]
} satisfies Meta<typeof CarouselBase>

export default meta
type Story = StoryObj<typeof CarouselBase>

export const WithStepsSlides: Story = {
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
            {slidesWithSteps.map((slide, slideIndex) => (
              <CarouselSlide
                variant='onlyImage'
                key={slideIndex}
                {...slide}
                classes={{
                  card: 'mobile:w-[240px] desktop:w-[240px]'
                }}
              />
            ))}
          </CarouselBase>
        </div>
      </ResponsiveContainer>
    )
  }
}

export const ProductCardsSlides: Story = {
  render: () => {
    const [visibleIndex, setVisibleIndex] = useState(0)
    return (
      <ResponsiveContainer>
        <CarouselBase
          heading='Другие предложения'
          visibleIndex={visibleIndex}
          setVisibleIndex={setVisibleIndex}
          autoPlayOptions={{
            active: false
          }}
          carouselOptions={{
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
          {productsSlidesMocks.map((slide, slideIndex) => (
            <CarouselSlide
              variant='productCard'
              key={slideIndex}
              {...slide}
              classes={{
                card: 'mobile:w-[320px] desktop:w-[280px] h-[450px]'
              }}
            />
          ))}
        </CarouselBase>
      </ResponsiveContainer>
    )
  }
}
