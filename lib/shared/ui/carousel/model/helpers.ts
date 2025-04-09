import type { ComponentType } from 'react'
import type { EmblaOptionsType } from 'embla-carousel'
import type { AutoplayOptionsType } from 'embla-carousel-autoplay'
import { SlideOnlyImage, SlideProductCard, type SlideProductCardProps } from '../ui'
import type { DotsOptions, NavArrowOptions, SlideVariants } from './types'

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

export const slideVariantsMap: Record<SlideVariants, ComponentType<SlideProductCardProps>> = {
  productCard: SlideProductCard,
  onlyImage: SlideOnlyImage
}
