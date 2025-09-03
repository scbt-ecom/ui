import type { WidgetsListDTO } from '$/widgets'

export const isEmptyWidgetList = (widgetsList: WidgetsListDTO): boolean => {
  return !widgetsList || widgetsList.every(([, props]) => !props)
}
