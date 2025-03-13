import type { EntityDocumentsProps, EntityHtmlProps, EntityTableProps } from '../ui/subEntities'
import type { AccordionProps } from '$/shared/ui'

export type SubEntityDetailsConfig = {
  isAccordion: boolean
  accordionTitle: string
}

export type EntitiesAccordionsConfig = {
  htmlAccordion?: Partial<AccordionProps>
  documentAccordion?: Partial<AccordionProps>
  tableAccordion?: Partial<AccordionProps>
}

export type EntityVariant = 'HTML' | 'TABLE' | 'DOCUMENTS'

export type Entity<Variant extends EntityVariant = EntityVariant> = {
  variant: Variant
  details: Variant extends 'HTML' ? EntityHtmlProps[] : Variant extends 'TABLE' ? EntityTableProps[] : EntityDocumentsProps[]
}

export type Contents = {
  entity: Entity
  entityId: string
}

export type Tab = {
  tabName: string
  contents: Contents[]
  tabId: string
}
