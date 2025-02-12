'use client'

import { type ReactElement, type ReactNode } from 'react'
import { type AdvantageClasses, type AdvantagesProps } from '../advantages/Advantages'
import { type BannerClasses, type ButtonsConfig } from './model/types'
import { BannerImageFull, BannerWithSeparateImg } from './ui'

export interface BannerProps {
  headTitle: string | ReactElement
  subtitle: string | ReactElement
  imgDesktop: ReactNode
  imgMobile: ReactNode
  buttonsConfig: ButtonsConfig
  advantages?: AdvantagesProps
  classes?: BannerClasses & {
    advantages?: AdvantageClasses
  }
  withAdvantages?: boolean
  variant?: 'separateImg' | 'fullImg'
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
