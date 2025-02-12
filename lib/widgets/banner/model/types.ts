import { type ButtonProps } from '$/shared/ui'
import { type BannerButtonsGroupClasses } from '$/widgets/banner/ui/BannerButtonsGroup'

export interface BannerClasses extends BannerButtonsGroupClasses {
  root?: string
  container?: string
  wrapper?: string
  content?: string
  textBlock?: string
  title?: string
  subtitle?: string
  imageContainer?: string
  image?: string
  advantageContainer?: string
}

export type BannerImg = {
  url: string
}

export type ButtonsConfig = {
  primary: ButtonProps
  secondary?: ButtonProps
}
