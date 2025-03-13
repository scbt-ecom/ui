import { type EntitiesAccordionsConfig, type Entity, isDocuments, isHtml, isTable } from '../model'
import {
  Documents,
  type EntityDocumentsClasses,
  type EntityHtmlClasses,
  type EntityTableClasses,
  Html,
  Table
} from './subEntities'
import { cn } from '$/shared/utils'

export type EntityClasses = {
  entityWrapper?: string
  entities?: {
    html?: EntityHtmlClasses
    documents?: EntityDocumentsClasses
    table?: EntityTableClasses
  }
}

export interface RenderEntityProps {
  entity: Entity
  classes?: EntityClasses
  accordionsConfig?: EntitiesAccordionsConfig
}

const renderEntity = ({ entity, classes, accordionsConfig }: RenderEntityProps) => {
  switch (true) {
    case isHtml(entity):
      return entity.details?.map((htmlDetails, index) => (
        <Html key={index} {...htmlDetails} accordionConfig={accordionsConfig?.htmlAccordion} classes={classes?.entities?.html} />
      ))

    case isDocuments(entity):
      return entity.details?.map((documentsDetails, index) => (
        <Documents
          key={index}
          accordionConfig={accordionsConfig?.documentAccordion}
          {...documentsDetails}
          classes={classes?.entities?.documents}
        />
      ))

    case isTable(entity):
      return entity.details?.map((tableDetails, index) => (
        <Table
          key={index}
          accordionConfig={accordionsConfig?.tableAccordion}
          {...tableDetails}
          classes={classes?.entities?.table}
        />
      ))

    default:
      return null
  }
}

export const RenderEntity = ({ entity, classes, accordionsConfig }: RenderEntityProps) => {
  return (
    <div className={cn('flex flex-col gap-6', classes?.entityWrapper)}>{renderEntity({ entity, classes, accordionsConfig })}</div>
  )
}
