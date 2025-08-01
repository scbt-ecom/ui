import { type EntitiesAccordionsConfig, type Entity, isDocuments, isExperts, isHtml, isTable } from '../model'
import {
  Documents,
  type EntityDocumentsClasses,
  type EntityExpertsClasses,
  type EntityHtmlClasses,
  type EntityTableClasses,
  Experts,
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
    experts?: EntityExpertsClasses
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

    case isExperts(entity):
      return entity.details?.map((expertsDetails, index) => (
        <Experts
          key={index}
          accordionConfig={accordionsConfig?.expertsAccordion}
          {...expertsDetails}
          classes={classes?.entities?.experts}
        />
      ))

    default:
      return null
  }
}

export const RenderEntity = ({ entity, classes, accordionsConfig }: RenderEntityProps) => {
  return (
    <div className={cn('flex flex-col gap-8', classes?.entityWrapper)}>{renderEntity({ entity, classes, accordionsConfig })}</div>
  )
}
