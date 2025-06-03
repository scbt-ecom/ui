import type { ButtonWithHandlersProps } from '../../buttonWithHandlers'

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
    buttonContent: ButtonWithHandlersProps
    enabled: boolean
  }
  secondary?: {
    buttonContent: ButtonWithHandlersProps
    enabled: boolean
  }
}
