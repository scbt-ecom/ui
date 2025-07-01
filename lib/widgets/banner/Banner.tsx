'use client'

import { type ReactElement } from 'react'
import { type BannerClasses, type ButtonsConfig } from './model'
import { type Images } from './model/types'
import { BannerImageFull, BannerWithSeparateImg } from './ui'
import { type AdvantageClasses, type AdvantagesProps } from './ui/banners/ui'
import type { BackgroundBannerColors } from '$/shared/constants'

export interface BannerProps {
  headTitle: string | ReactElement
  subtitle: string | ReactElement
  buttonsConfig: ButtonsConfig
  advantages?: AdvantagesProps
  variant?: 'separateImg' | 'fullImg'
  images: Images
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
