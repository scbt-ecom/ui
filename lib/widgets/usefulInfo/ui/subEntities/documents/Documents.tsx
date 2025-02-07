import type { EntityDocuments } from '../../../model'
import { Document } from './ui/document'
import { Accordion, Heading } from '$/shared/ui'

//TODO: ОПРЕДЕЛИТЬСЯ С РАЗМЕРОМ ЗАГОЛОВКА И КАКОЙ ИЗ НИХ ОСТАВЛЯТЬ

export const Documents = ({ docs, config, title, iconType, description }: EntityDocuments) => {
  const content = (
    <div className='flex max-w-[680px] flex-col'>
      {title && (
        <Heading as='h3' className='mb-4'>
          {title}
        </Heading>
      )}
      <div className='gap- flex flex-col gap-4'>
        {docs?.map((doc) => <Document iconType={iconType} key={doc.label} {...doc} />)}
      </div>

      {description && <div className='mt-4' dangerouslySetInnerHTML={{ __html: description ?? '' }} />}
    </div>
  )

  return (
    <>
      {config && config?.isAccordion && config?.accordionTitle ? (
        <Accordion label={config?.accordionTitle}>{content}</Accordion>
      ) : (
        content
      )}
    </>
  )
}
