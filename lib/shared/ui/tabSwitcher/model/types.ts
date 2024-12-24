/**
 * @param {string} id - для триггера и для контента должен совпадать
 */
import type { TTabContentClasses } from '../ui/TabContent'

export type TTabsClasses = {
  root?: string
  list?: string
  trigger?: string
  tabContent?: TTabContentClasses
}

export interface ITabContent {
  id: string
  body: React.ReactElement | string
  accordion?: {
    title: string | React.ReactElement
  }
}

interface ITabTrigger {
  id: string
  label: string
}

export interface ITabRenderContent {
  triggers: ITabTrigger[]
  contents: ITabContent[]
}
