'use client'

import { type ReactElement } from 'react'
import type { RenderImage } from '../../shared/utils'
import { type BannerClasses, type ButtonsConfig } from './model'
import { BannerImageFull, BannerWithSeparateImg } from './ui'
import { type AdvantageClasses, type AdvantagesProps } from './ui/banners/ui'
import type { BackgroundBannerColors } from '$/shared/constants'

export interface BannerProps {
  headTitle: string | ReactElement
  subtitle: string | ReactElement
  buttonsConfig: ButtonsConfig
  advantages?: AdvantagesProps
  variant?: 'separateImg' | 'fullImg'
  imageDesktop: RenderImage['imgProps']
  imageMobile: RenderImage['imgProps']
  renderImageCb?: RenderImage['renderImageCb']
  backgroundColor?: BackgroundBannerColors
  classes?: BannerClasses & {
    advantages?: AdvantageClasses
  }
}

export const Banner = ({ variant, ...props }: BannerProps) => {
  switch (variant) {
    case 'fullImg':
      return <BannerImageFull {...props} />
    default:
      return <BannerWithSeparateImg {...props} />
  }
}

export default Banner
