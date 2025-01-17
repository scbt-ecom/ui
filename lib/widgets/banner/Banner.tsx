'use client'

import { type ReactElement } from 'react'
import { type Advantage, type AdvantageClasses } from '../advantages/Advantages.tsx'
import { type BannerButtonsGroupClasses } from './ui/BannerButtonsGroup'
import { BannerWithSeparateImg } from './ui/banners'
import { BannerImageFull } from './ui/banners'
import { type ButtonProps } from '$/shared/ui'

interface BannerClasses extends BannerButtonsGroupClasses {
  section: string
  container: string
  wrapper: string
  content: string
  textBlock: string
  title: string
  subtitle: string
  imageContainer: string
  image: string
  advantageContainer: string
}

export type ButtonsConfig = {
  primary: ButtonProps
  secondary?: ButtonProps
}

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
  advantagesList?: Advantage[]
  classes?: Partial<BannerClasses> & Partial<AdvantageClasses>
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
