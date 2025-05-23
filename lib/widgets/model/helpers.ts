import { Banner } from '../banner'
import { Benefit } from '../benefit'
import { Calculator } from '../calculator'
import { DynamicForm } from '../dynamicForm'
import { Footer } from '../footer'
import { Header } from '../header'
import { InterLinking } from '../interLinking'
import { LongBanner } from '../longBanner'
import { SeoHeader } from '../seoHeader'
import { Stepper } from '../stepper'
import { UsefulInfo } from '../usefulInfo'
import type { AllowedWidgets } from './types'

export const WIDGET_LIST_MAP = {
  header: Header,
  seoHeader: SeoHeader,
  banner: Banner,
  calculator: Calculator,
  form: DynamicForm,
  stepper: Stepper,
  benefit: Benefit,
  longBanner: LongBanner,
  usefulInfo: UsefulInfo,
  interLinking: InterLinking,
  footer: Footer
} as const

export const KEYS_OF_WIDGET_LIST = Object.keys(WIDGET_LIST_MAP) as readonly AllowedWidgets[]

export const widgetIds = KEYS_OF_WIDGET_LIST.reduce(
  (acc, widget) => {
    acc[widget] = widget
    return acc
  },
  {} as Record<AllowedWidgets, AllowedWidgets>
)
