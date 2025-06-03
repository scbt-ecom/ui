import type { AllowedWidgets, WidgetsListDTO } from '../../widgets'

export const hasWidget = (searchableWidget: AllowedWidgets, widgetsList: WidgetsListDTO): boolean => {
  if (!widgetsList || !Array.isArray(widgetsList)) return false

  const targetWidget = widgetsList.find((widget) => {
    if (!widget || !Array.isArray(widget)) return false
    const [widgetName, props] = widget
    return widgetName === searchableWidget && Boolean(props) && Object.keys(props).length > 0
  })

  return Boolean(targetWidget)
}
