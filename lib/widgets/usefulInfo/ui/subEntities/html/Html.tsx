import type { EntitiesAccordionsConfig, SubEntityDetailsConfig } from '../../../model'
import { Accordion } from '$/shared/ui'
import { cn } from '$/shared/utils'

export type EntityHtmlClasses = {
  html?: string
}

export type EntityHtmlProps = {
  html: string
  config?: SubEntityDetailsConfig
  classes?: EntityHtmlClasses
  accordionConfig?: EntitiesAccordionsConfig['htmlAccordion']
}

export const Html = ({ html, config, classes, accordionConfig }: EntityHtmlProps) => {
  const content = <div className={cn(classes?.html)} dangerouslySetInnerHTML={{ __html: html ?? '' }} />

  return (
    <>
      {config && config?.isAccordion && config?.accordionTitle ? (
        <Accordion label={config?.accordionTitle} {...accordionConfig}>
          {accordionConfig?.children ?? content}
        </Accordion>
      ) : (
        content
      )}
    </>
  )
}
