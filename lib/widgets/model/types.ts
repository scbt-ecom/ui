import type { ComponentPropsWithoutRef } from 'react'
import { type WIDGET_LIST_MAP } from './helpers'

export type AllowedWidgets = keyof typeof WIDGET_LIST_MAP
export type WidgetExternalProps = {
  _id: string
  internalName: string
}

/**
 * Получить тип конкретного виджета из списка виджетов
 * @example
 * export type HeaderWidget = ReturnWidgetType['header']
 */
export type ReturnWidgetType = {
  [K in keyof typeof WIDGET_LIST_MAP]: ComponentPropsWithoutRef<(typeof WIDGET_LIST_MAP)[K]> & WidgetExternalProps
}

/**
 * Массив кортежей из виджетов
 * @example
 * [
 *   ['header', HeaderWidget],
 *   ['banner', BannerWidget],
 * ]
 */
export type WidgetsListDTO = {
  [K in keyof typeof WIDGET_LIST_MAP]: [K, ReturnWidgetType[K]]
}[keyof typeof WIDGET_LIST_MAP][]

/**
 * Массив кортежей из id виджетов или null (значение по умолчанию или сброс значения)
 * @example
 * [
 *   ['header', 'someStringId'],
 *   ['banner', null],
 * ]
 */
export type WidgetsListDTOIds = {
  [K in keyof typeof WIDGET_LIST_MAP]: [K, string | null]
}[keyof typeof WIDGET_LIST_MAP][]
