/**
 * @param {string} id - для триггера и для контента должен совпадать
 */
import type { TabContentClasses } from '../ui/TabContent'

export type TabsClasses = {
  root?: string
  list?: string
  trigger?: string
  tabContent?: TabContentClasses
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

export interface TabRenderContent {
  triggers: ITabTrigger[]
  contents: ITabContent[]
}
