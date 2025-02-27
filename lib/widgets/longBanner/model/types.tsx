import { type ReactElement } from 'react'
import { type VariantProps } from 'class-variance-authority'
import { type itemConfig } from './cva'

export type LongBannerConfig = VariantProps<typeof itemConfig>

export type Details<Enabled extends boolean> = {
  title: string
  description: string
  popover?: Popover<Enabled>
}

export interface ButtonConfig {
  text: string | ReactElement
  onClick?: () => void
}

type PopoverEnabled = {
  enabled: true
  text?: string
}

type PopoverDisabled = {
  enabled: false
}

export type Popover<Enabled extends boolean> = Enabled extends true ? PopoverEnabled : PopoverDisabled

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

export interface TextItemProps<Enabled extends boolean> extends LongBannerConfig {
  data: {
    title: string | ReactElement
    description: string | ReactElement
    popover?: Popover<Enabled>
  }
}
