import type { ComponentPropsWithoutRef } from 'react'
import { type AllowedWidgets, type WIDGET_LIST_MAP } from './helpers'

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
  [K in AllowedWidgets]: ComponentPropsWithoutRef<(typeof WIDGET_LIST_MAP)[K]> & WidgetExternalProps
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
  [K in AllowedWidgets]: [K, ReturnWidgetType[K]]
}[AllowedWidgets][]

/**
 * Массив кортежей из id виджетов или null (значение по умолчанию или сброс значения)
 * @example
 * [
 *   ['header', 'someStringId'],
 *   ['banner', null],
 * ]
 */
export type WidgetsListDTOIds = {
  [K in AllowedWidgets]: [K, string | null]
}[AllowedWidgets][]
