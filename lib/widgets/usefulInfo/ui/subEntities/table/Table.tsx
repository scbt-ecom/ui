import type { EntityTable } from '../../../model'
import { tableConfig } from './model/helpers'
import { TableBody } from './ui/TableBody'
import { Accordion, Heading } from '$/shared/ui'
import { cn } from '$/shared/utils'

export const Table = ({ tableVariant, description, columnsVariant, config, rows, title, headings }: EntityTable) => {
  const content = (
    <div className={cn(tableConfig({ columnsVariant }))}>
      {title && (
        <Heading as='h4' className='mb-4 desktop:mb-6'>
          {title}
        </Heading>
      )}

      <TableBody tableVariant={tableVariant} rows={rows} headings={headings} columnsVariant={columnsVariant} />
      {description && (
        <div className='mt-2 [&&]:desk-body-regular-m desktop:mt-2' dangerouslySetInnerHTML={{ __html: description ?? '' }} />
      )}
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
