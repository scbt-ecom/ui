'use client'

import { type ReactElement } from 'react'
import { type AdvantageClasses } from '../advantages/Advantages.tsx'
import { type AdvantageItem } from '../advantages/model/types.ts'
import { type BannerClasses, type ButtonsConfig } from './model/types.ts'
import { BannerWithSeparateImg } from './ui/banners'
import { BannerImageFull } from './ui/banners'

export interface BannerProps {
  headTitle: string | ReactElement
  subtitle: string | ReactElement
  img?: string
  imgSets?: {
    large: string
    mob: string
    type?: string
  }
  buttonsConfig: ButtonsConfig
  advantagesList?: AdvantageItem[]
  classes?: BannerClasses & {
    advantages?: AdvantageClasses
  }
  bannerVariant?: 'separateImg' | 'fullImg'
}

export const Banner = ({ bannerVariant, ...props }: BannerProps) => {
  switch (bannerVariant) {
    case 'separateImg':
      return <BannerWithSeparateImg {...props} />
    case 'fullImg':
      return <BannerImageFull {...props} />
    default:
      return <BannerWithSeparateImg {...props} />
  }
}
