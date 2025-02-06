import { type ReactElement } from 'react'
import { type VariantProps } from 'class-variance-authority'
import { type itemConfig } from './cva'

export type LongBannerConfig = VariantProps<typeof itemConfig>

export type Config = {
  intent?: 'twoItems' | 'fourItems'
  details: Details[]
}

export type Details = {
  title: string
  description: string
  popover?: Popover
}

export interface ButtonConfig {
  text: string | ReactElement
  onClick?: () => void
}

export type Popover = {
  enabled: boolean
  text?: string
}

export interface LongBannerClasses {
  root?: string
  container?: string
  title?: string
  contentContainer?: string
  imgContainer?: string
  textWithBtnContainer?: string
  image?: string
  button?: string
}

export interface TextItemProps extends LongBannerConfig {
  data: {
    title: string | ReactElement
    description: string | ReactElement
    popover?: Popover
  }
}
