import { type WidgetsListDTO } from '$/widgets'

/**
 * Смена расположения виджетов по query параметрам в URL
 * @extends searchParams наследуется от URLSearchParams, но использует ReadonlyURLSearchParams от next.js !!!
 * @example order widgets
 * sovcombank.ru/apply/credit/some-page?order=3-4-1
 *
 * ['header', {}],
 * ['banner', {}],
 * ['calculator', {}],
 * ['personalForm', {}],
 * ['stepper', {}],
 * ---------------------
 * Вернется новый список
 * ---------------------
 * 0: ['personalForm', {}], (индекс 3)
 * 1: ['stepper', {}],      (индекс 4)
 * 2: ['banner', {}],       (индекс 1)
 * 3: ['header', {}],       (индекс 0)
 * 4: ['calculator', {}],   (индекс 2)
 * @returns WidgetsListDTO если в URL странице передан параметр order, возвращается новый список,
 * список выстраивается в приоритете переданных виджетов в query, в конец возвращает остальные виджеты
 */

export const orderWidgetWithQueryParams = <Params extends URLSearchParams>(widgetsList: WidgetsListDTO, searchParams: Params) => {
  const orderedParams = searchParams.get('order')

  if (!orderedParams) {
    return widgetsList
  }

  const sorted = [] as unknown as WidgetsListDTO
  const indexesToOrder = orderedParams.split('-').map((index) => parseInt(index, 10))

  // Собираем виджеты в указанном порядке индексов
  for (const index of indexesToOrder) {
    if (index >= 0 && index < widgetsList.length) {
      sorted.push(widgetsList[index])
    }
  }

  // Добавляем остальные виджеты, которые не были указаны в порядке
  const withoutSort = widgetsList.filter((_, index) => !indexesToOrder.includes(index))
  return [...sorted, ...withoutSort]
}
