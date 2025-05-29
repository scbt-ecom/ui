'use client'

import { type ReactElement } from 'react'
import { type AdvantageClasses, type AdvantagesProps } from '../advantages/Advantages'
import { type BackgroundBannerColorsValues } from './model/constants'
import { type BannerClasses, type ButtonsConfig } from './model/types'
import { BannerImageFull, BannerWithSeparateImg } from './ui'

export interface BannerProps {
  headTitle: string | ReactElement
  subtitle: string | ReactElement
  imgMobile: {
    src: string
    base64?: string
  }
  imgDesktop: {
    src: string
    base64?: string
  }
  imgAlt?: string
  buttonsConfig: ButtonsConfig
  advantages?: AdvantagesProps
  variant?: 'separateImg' | 'fullImg'
  color?: BackgroundBannerColorsValues
  classes?: BannerClasses & {
    advantages?: AdvantageClasses
  }
  /**
   *
   * @param props
   * React.ComponentProps<'img'>
   */
  renderImage?: (props: any) => ReactElement
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

// eslint-disable-next-line import/no-default-export
export default Banner
