import type { allowedBannersBackgroundColors } from './colors'

export type BackgroundBannerColors = (typeof allowedBannersBackgroundColors)[keyof typeof allowedBannersBackgroundColors]
