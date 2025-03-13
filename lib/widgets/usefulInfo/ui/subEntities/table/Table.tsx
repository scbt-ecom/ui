import type { EntitiesAccordionsConfig, SubEntityDetailsConfig } from '../../../model'
import { tableConfig } from './model/utils'
import { TableBody, type TableBodyClasses } from './ui/TableBody'
import { Accordion, Heading } from '$/shared/ui'
import { cn } from '$/shared/utils'

export type EntityTableClasses = {
  wrapper?: string
  headline?: string
  description?: string
  tableBody?: TableBodyClasses
}

export type TableCell = {
  cell: string
  cellId: string
}

export type TableRow = {
  row: TableCell[]
  rowId: string
}

export type TableHeading = {
  heading: string
  headingId: string
}

export type EntityTableProps = {
  title?: string
  description?: string
  columnsVariant: 'twoCols' | 'threeCols'
  tableVariant: 'separator' | 'filled'
  headings?: TableHeading[]
  rows: TableRow[]
  config?: SubEntityDetailsConfig
  classes?: EntityTableClasses
  accordionConfig?: EntitiesAccordionsConfig['documentAccordion']
}

export const Table = ({
  tableVariant,
  description,
  columnsVariant,
  config,
  rows,
  title,
  headings,
  accordionConfig,
  classes
}: EntityTableProps) => {
  const content = (
    <div className={cn(tableConfig({ columnsVariant }), classes?.wrapper)}>
      {title && (
        <Heading as='h4' className={cn('mb-4 desktop:mb-6', classes?.headline)}>
          {title}
        </Heading>
      )}

      <TableBody tableVariant={tableVariant} rows={rows} headings={headings} columnsVariant={columnsVariant} />

      {description && (
        <div
          className={cn('mt-2 [&&]:desk-body-regular-m desktop:mt-2', classes?.description)}
          dangerouslySetInnerHTML={{ __html: description ?? '' }}
        />
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
