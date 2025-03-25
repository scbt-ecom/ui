import type { ReactElement } from 'react'
import type { ButtonHandlerOptions } from '../../buttonWithHandlers'
import { type ButtonProps } from '$/shared/ui'

export interface BannerClasses {
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
  group?: string
  primary?: string
  secondary?: string
}

export type ButtonsConfig = {
  primary: {
    buttonContent: ButtonProps & { handlerOptions: ButtonHandlerOptions }
    enabled: boolean
  }
  secondary?: {
    buttonContent: ButtonProps & { handlerOptions: ButtonHandlerOptions }
    enabled: boolean
  }
}

export type ImgBanner =
  | ReactElement
  | {
      url: string
      alt: string
    }
