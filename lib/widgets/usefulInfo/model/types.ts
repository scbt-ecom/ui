import type { EntityDocumentsProps, EntityExpertsProps, EntityHtmlProps, EntityTableProps } from '../ui/subEntities'
import type { AccordionProps } from '$/shared/ui'

export type SubEntityDetailsConfig = {
  isAccordion: boolean
  accordionTitle: string
}

export type EntitiesAccordionsConfig = {
  htmlAccordion?: Partial<AccordionProps>
  documentAccordion?: Partial<AccordionProps>
  tableAccordion?: Partial<AccordionProps>
  expertsAccordion?: Partial<AccordionProps>
}

export type EntityVariant = 'HTML' | 'TABLE' | 'DOCUMENTS' | 'EXPERTS'

type EntityDetailsMap = {
  HTML: EntityHtmlProps[]
  TABLE: EntityTableProps[]
  DOCUMENTS: EntityDocumentsProps[]
  EXPERTS: EntityExpertsProps[]
}

export type Entity<Variant extends EntityVariant = EntityVariant> = {
  variant: Variant
  details: EntityDetailsMap[Variant]
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
