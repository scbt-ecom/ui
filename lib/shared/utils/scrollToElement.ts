import type { AllowedWidgets } from '$/widgets'

type ScrollConfig = {
  behavior?: ScrollBehavior
  block?: ScrollLogicalPosition
}

type ScrollElement = {
  widgetId: AllowedWidgets
  config?: ScrollConfig
}

const DEFAULT_SCROLL_CONFIG: Required<ScrollConfig> = {
  behavior: 'smooth',
  block: 'center'
}

export const scrollToElement = ({ widgetId, config = {} }: ScrollElement) => {
  const { behavior, block } = { ...DEFAULT_SCROLL_CONFIG, ...config }

  const element = document.getElementById(widgetId)
  if (!element) {
    console.error('Такого элемента в DOM не существует', widgetId)
    return
  }

  element.scrollIntoView({ behavior, block })
}
