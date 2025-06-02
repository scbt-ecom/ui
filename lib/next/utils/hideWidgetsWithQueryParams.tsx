import type { WidgetsListDTO } from '../../widgets'
import { isEmptyWidgetList } from './isEmptyWidgetList'

/**
 * Скрытие виджетов по query параметрам в URL
 * @extends searchParams наследуется от URLSearchParams, но использует ReadonlyURLSearchParams от next.js !!!
 * @example hidden widgets
 * sovcombank.ru/apply/credit/some-page?hide=calc-form-header
 * @returns WidgetsListDTO если в URL странице передан параметр hide, возвращается новый список исключающий скрытые виджеты, иначе исходный список
 */

export const hideWidgetsWithQueryParams = <Params extends URLSearchParams>(widgetsList: WidgetsListDTO, searchParams: Params) => {
  if (!widgetsList || isEmptyWidgetList(widgetsList)) return widgetsList

  let formattedWidgetList = [...widgetsList]

  const hideParam = searchParams.get('hide')
  if (hideParam) {
    const widgetIdsToHide = hideParam.split('-')

    formattedWidgetList = formattedWidgetList.filter((widget) => {
      if (!widget) return false
      const [widgetName] = widget
      return !widgetIdsToHide.includes(widgetName)
    })
  }

  return formattedWidgetList
}
