import { isEmptyWidgetList } from './isEmptyWidgetList'
import type { WidgetsListDTO } from '$/widgets'

/**
 * Скрытие виджетов по query параметрам в URL
 * @extends searchParams наследуется от URLSearchParams, но использует ReadonlyURLSearchParams от next.js !!!
 * @example hidden widgets
 * sovcombank.ru/apply/credit/some-page?hide=0-2 (скрыть виджеты с индексами 0 и 2)
 * @returns WidgetsListDTO если в URL странице передан параметр hide, возвращается новый список исключающий скрытые виджеты, иначе исходный список
 */

export const hideWidgetsWithQueryParams = <Params extends URLSearchParams>(widgetsList: WidgetsListDTO, searchParams: Params) => {
  if (!widgetsList || isEmptyWidgetList(widgetsList)) return widgetsList

  let formattedWidgetList = [...widgetsList]

  const hideParam = searchParams.get('hide')
  if (hideParam) {
    const indexesToHide = hideParam.split('-').map((index) => parseInt(index, 10))

    formattedWidgetList = formattedWidgetList.filter((_, index) => {
      return !indexesToHide.includes(index)
    })
  }

  return formattedWidgetList
}
