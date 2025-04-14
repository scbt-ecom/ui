import type { CarouselSlideProps, SlideFullScreenProps, SlideOnlyImageProps, SlideProductCardProps } from '../ui'

export type DotsOptions = {
  position?: 'bot-left' | 'center' | 'bot-right'
  deskVisible?: boolean
  mobVisible?: boolean
}

export type NavArrowOptions = {
  position?: 'center' | 'top-right'
  deskVisible?: boolean
  mobVisible?: boolean
}

export type NavigationMode = 'next' | 'prev'

export type ImageProps = {
  src: string
  alt: string
}

interface SlideFullScreen extends SlideFullScreenProps, CarouselSlideProps {
  variant: 'fullScreen'
}

interface SlideOnlyImage extends SlideOnlyImageProps, CarouselSlideProps {
  variant: 'onlyImage'
}

interface SlideProductCard extends SlideProductCardProps, CarouselSlideProps {
  variant: 'productCard'
}

export type CarouselSlideVariant = SlideFullScreen | SlideOnlyImage | SlideProductCard
