import type { EntitiesAccordionsConfig, SubEntityDetailsConfig } from '../../../model'
import { Document, type DocumentClasses } from './ui/document'
import { Accordion, Heading } from '$/shared/ui'
import { cn } from '$/shared/utils'

export type EntityDocumentsClasses = {
  wrapper?: string
  headline?: string
  documentsWrapper?: string
  description?: string
  singleDocument?: DocumentClasses
}

export type EntityDocumentsProps = {
  iconType: 'documentOutline' | 'documentFilled'
  title?: string
  description?: string
  docs: {
    url: string
    size: string
    label: string
  }[]
  config?: SubEntityDetailsConfig
  classes?: EntityDocumentsClasses
  accordionConfig?: EntitiesAccordionsConfig['documentAccordion']
}

export const Documents = ({ docs, config, title, iconType, description, classes, accordionConfig }: EntityDocumentsProps) => {
  const content = (
    <div className={cn('flex max-w-[680px] flex-col', classes?.wrapper)}>
      {title && (
        <Heading as='h4' className='mb-4'>
          {title}
        </Heading>
      )}
      <div className={cn('flex flex-col gap-4', classes?.documentsWrapper)}>
        {docs?.map((doc) => <Document iconType={iconType} key={doc.label} {...doc} classes={classes?.singleDocument} />)}
      </div>

      {description && (
        <div className={cn('mt-4', classes?.description)} dangerouslySetInnerHTML={{ __html: description ?? '' }} />
      )}
    </div>
  )

  return (
    <>
      {config && config?.isAccordion && config?.accordionTitle ? (
        <Accordion label={config?.accordionTitle} {...accordionConfig}>
          {accordionConfig?.children || content}
        </Accordion>
      ) : (
        content
      )}
    </>
  )
}
