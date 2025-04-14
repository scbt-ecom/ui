import type { EmblaOptionsType } from 'embla-carousel'
import type { AutoplayOptionsType } from 'embla-carousel-autoplay'
import { SlideFullScreen, SlideOnlyImage, SlideProductCard } from '../ui'
import type { CarouselSlideVariant, DotsOptions, NavArrowOptions } from './types'
import type { DiscriminatedUnion } from '$/shared/types'

export const defaultCarouselOptions: EmblaOptionsType = {
  dragFree: true,
  loop: false,
  align: 'start',
  slidesToScroll: 1
}

export const defaultDotsOptions: DotsOptions = {
  position: 'center',
  deskVisible: true,
  mobVisible: true
}

export const defaultNavArrowOptions: NavArrowOptions = {
  position: 'top-right',
  deskVisible: true,
  mobVisible: false
}

export const defaultAutoPlayOptions: AutoplayOptionsType = {
  active: true
}

export const renderSlideVariant = (props: DiscriminatedUnion<'variant', CarouselSlideVariant>) => {
  switch (props.variant) {
    case 'productCard':
      return <SlideProductCard {...props} />
    case 'onlyImage':
      return <SlideOnlyImage {...props} />
    case 'fullScreen':
      return <SlideFullScreen {...props} />
  }
}
