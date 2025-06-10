'use client'

import { type ReactElement } from 'react'
import { type AdvantageClasses, type AdvantagesProps } from '../advantages/Advantages'
import { type BannerClasses, type ButtonsConfig } from './model'
import { BannerImageFull, BannerWithSeparateImg } from './ui'
import type { BackgroundBannerColors } from '$/shared/constants'

export interface BannerProps {
  headTitle: string | ReactElement
  subtitle: string | ReactElement
  buttonsConfig: ButtonsConfig
  advantages?: AdvantagesProps
  variant?: 'separateImg' | 'fullImg'
  classes?: BannerClasses & {
    advantages?: AdvantageClasses
  }
  //TODO:
  // 1. Изменить тип картинок по примеру InfoBlockProps
  // 2. Изменить color на backgroundColor
  // 3. Изменить renderImage
  // 4. switchCase
  // 5. // eslint-disable-next-line import/no-default-export по возможности и желанию добавить исключения для папки виджетов для экспорта по дефолту
  imgMobile: {
    src: string
    base64?: string
  }
  imgDesktop: {
    src: string
    base64?: string
  }
  imgAlt?: string
  color?: BackgroundBannerColors
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
