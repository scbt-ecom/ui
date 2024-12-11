import { type allowedBannersBackgroundColors } from '$/shared/constants'

export type TColors = keyof typeof allowedBannersBackgroundColors

export type AllowedBannerBackgroundColor = `bg-banner-${TColors}`
