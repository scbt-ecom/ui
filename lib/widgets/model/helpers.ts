import type { AllowedWidgets } from './types'

export const WIDGET_LIST = [
  'header',
  'footer',
  'interLinking',
  'stepper',
  'usefulInfo',
  'longBanner',
  'banner',
  'benefit',
  'form',
  'seoHeader'
] as const

export const widgetIds = WIDGET_LIST.reduce(
  (acc, widget) => {
    acc[widget] = widget
    return acc
  },
  {} as Record<AllowedWidgets, AllowedWidgets>
)
