import type { AllowedWidgets } from '../../index'

export type NavigateHandler = {
  handler: 'navigate'
  url: string
  target: '_blank' | '_self'
  rel: 'noreferrer noopener nofollow' | 'noreferrer noopener' | 'nofollow'
}

export type ScrollHandler = {
  handler: 'scroll'
  widgetId: AllowedWidgets
}

export type SubmitHandler = {
  handler: 'submit'
}

export type ButtonHandlerOptions = NavigateHandler | ScrollHandler | SubmitHandler
