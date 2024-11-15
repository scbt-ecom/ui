import { type VariantProps } from 'class-variance-authority'
import { type itemConfig } from './cva'

export type TLongBannerConfig = VariantProps<typeof itemConfig>

export interface ITextContent {
  title: string
  description: string
  popoverText?: string
}

export interface IButtonConfig {
  text: string
  onClick: () => void
}

export interface ILongBannerClasses {
  section: string
  mainContainer: string
  title: string
  contentContainer: string
  imgContainer: string
  textWithBtnContainer: string
  image: string
  button: string
}

export interface ITextItem extends TLongBannerConfig {
  data: {
    title: string
    description: string
    popoverText?: string
  }
}
