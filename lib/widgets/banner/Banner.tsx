'use client'

import { type ReactElement } from 'react'
import type { ButtonProps } from '../../shared/ui'
import { type AdvantageClasses, type AdvantagesProps } from '../advantages/Advantages'
import type { ButtonHandlerOptions } from '../buttonWithHandlers'
import { type BackgroundBannerColorsValues } from './model/constants'
import { type BannerClasses, type ImgBanner } from './model/types'
import { BannerImageFull, BannerWithSeparateImg } from './ui'

export interface BannerProps {
  headTitle: string | ReactElement
  subtitle: string | ReactElement
  imgDesktop: ImgBanner
  imgMobile: ImgBanner
  buttonsConfig: {
    primary: {
      buttonContent: ButtonProps & { handlerOptions: ButtonHandlerOptions }
      enabled: boolean
    }
    secondary?: {
      buttonContent: ButtonProps & { handlerOptions: ButtonHandlerOptions }
      enabled: boolean
    }
  }
  advantages?: AdvantagesProps
  classes?: BannerClasses & {
    advantages?: AdvantageClasses
  }
  variant?: 'separateImg' | 'fullImg'
  color?: BackgroundBannerColorsValues
}

export const Banner = ({ variant, ...props }: BannerProps) => {
  switch (variant) {
    case 'separateImg':
      return <BannerWithSeparateImg {...props} />
    case 'fullImg':
      return <BannerImageFull {...props} />
    default:
      return <BannerWithSeparateImg {...props} />
  }
}
