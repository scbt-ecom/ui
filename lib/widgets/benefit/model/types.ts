import { type ReactElement } from 'react'
import type { ButtonWithHandlersProps } from '../../buttonWithHandlers'
import { type allowedBannersBackgroundColors } from '$/shared/constants'
import { type backgroundBenefitColors, type BackgroundBenefitColorsValues } from '$/widgets/benefit/model/constants'

export type Colors = keyof typeof allowedBannersBackgroundColors

export type AllowedBannerBackgroundColor = `bg-banner-${Colors}`

export type Img = {
  url: string
  alt: string
}

export type Details = {
  button?: ButtonWithHandlersProps
  img?: ReactElement | Img
  title: string
  subtitle: string
  color?: BackgroundBenefitColorsValues
}

export type BenefitColors = keyof typeof backgroundBenefitColors
