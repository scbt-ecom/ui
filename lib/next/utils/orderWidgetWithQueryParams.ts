import type { WidgetsListDTO } from '../../widgets'

/**
 * Смена расположения виджетов по query параметрам в URL
 * @extends searchParams наследуется от URLSearchParams, но использует ReadonlyURLSearchParams от next.js !!!
 * @example order widgets
 * sovcombank.ru/apply/credit/some-page?order=calculator-personalForm-header
 *
 * ['header', {}],
 * ['banner', {}],
 * ['calculator', {}],
 * ['personalForm', {}],
 * ['stepper', {}],
 * ---------------------
 * Вернется новый список
 * ---------------------
 * ['calculator', {}],
 * ['personalForm', {}],
 * ['header', {}],
 * ['banner', {}],
 * ['stepper', {}],
 * @returns WidgetsListDTO если в URL странице передан параметр order, возвращается новый список,
 * список выстраивается в приоритете переданных виджетов в query, в конец возвращает остальные виджеты
 */

export const orderWidgetWithQueryParams = <Params extends URLSearchParams>(widgetsList: WidgetsListDTO, searchParams: Params) => {
  const orderedParams = searchParams.get('order')
  const sorted = [] as unknown as WidgetsListDTO

  if (orderedParams) {
    const widgetIdsToOrder = orderedParams.split('-')

    for (const searchableWidget of widgetIdsToOrder) {
      const orderedWidget = widgetsList.find(([name]) => searchableWidget === name)

      if (orderedWidget) {
        sorted.push(orderedWidget)
      }
    }

    const withoutSort = widgetsList.filter(([name]) => !orderedParams.includes(name))
    return [...sorted, ...withoutSort]
  } else {
    return widgetsList
  }
}
