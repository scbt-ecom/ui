import { type allowedBannersBackgroundColors } from '$/shared/constants'

export type Colors = keyof typeof allowedBannersBackgroundColors

export type AllowedBannerBackgroundColor = `bg-banner-${Colors}`
