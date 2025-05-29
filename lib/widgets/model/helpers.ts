import { lazy } from 'react'
const Banner = lazy(() => import('../banner/Banner'))
const Calculator = lazy(() => import('../calculator/Calculator'))
const DynamicForm = lazy(() => import('../dynamicForm/DynamicForm'))
const DynamicFormDialog = lazy(() => import('../dynamicFormDialog/DynamicFormDialog'))
const Footer = lazy(() => import('../footer/Footer'))
const Header = lazy(() => import('../header/Header'))
const InterLinking = lazy(() => import('../interLinking/InterLinking'))
const LongBanner = lazy(() => import('../longBanner/LongBanner'))
const SeoHeader = lazy(() => import('../seoHeader/SeoHeader'))
const Stepper = lazy(() => import('../stepper/Stepper'))
const UsefulInfo = lazy(() => import('../usefulInfo/UsefulInfo'))
const Benefit = lazy(() => import('../benefit/Benefit'))

export type AllowedWidgets = keyof typeof WIDGET_LIST_MAP

export const WIDGET_LIST_MAP = {
  header: Header,
  seoHeader: SeoHeader,
  banner: Banner,
  calculator: Calculator,
  form: DynamicForm,
  formDialog: DynamicFormDialog,
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
