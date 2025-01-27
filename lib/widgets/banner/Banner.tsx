'use client'

import { type ReactElement } from 'react'
import { type AdvantageClasses, type AdvantagesProps } from '../advantages/Advantages.tsx'
import { type BannerClasses, type ButtonsConfig } from './model/types.ts'
import { BannerWithSeparateImg } from './ui/banners'
import { BannerImageFull } from './ui/banners'

interface AdvantagesConfig extends AdvantagesProps {}

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
  advantagesConfig?: AdvantagesConfig
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
