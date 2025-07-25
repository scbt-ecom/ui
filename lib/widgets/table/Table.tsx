import { type ReactElement } from 'react'
import { type DataTableProps, TableUtils } from '../../shared/ui/table/model'
import { cn } from '../../shared/utils'
import { DataTable, ResponsiveContainer } from '$/shared/ui'
import { type DataTableClasses } from '$/shared/ui/table/model/types'

export type TableClasses = {
  root?: string
  container?: string
  textContainer?: string
  title?: string
  subtitle?: string
  tableContainer?: string
  helperText?: string
  tableClasses?: DataTableClasses
}

export interface TableProps<TData extends {}> extends Omit<DataTableProps<TData>, 'classes'> {
  title: ReactElement | string
  subtitle: ReactElement | string
  helperText: ReactElement | string
  horizontal?: boolean
  classes?: TableClasses
}

export const Table = <TData extends {}>(props: TableProps<TData>) => {
  const { title, subtitle, helperText, pagination = false, classes, data, ...restTableProps } = props

  const cols = TableUtils.getColumns(data[0])

  return (
    <section className='w-full'>
      <ResponsiveContainer className={cn(classes?.container, 'flex flex-col gap-12 mobile:max-w-[360px]')}>
        <div className='flex flex-col gap-[16px]'>
          <div className='mob-headline-bold-s desktop:desk-headline-bold-m' dangerouslySetInnerHTML={{ __html: title }} />
          <div className='desktop:desk-body-regular-l' dangerouslySetInnerHTML={{ __html: subtitle }} />
        </div>

        <div className='flex flex-col gap-4'>
          <DataTable
            {...restTableProps}
            data={data}
            columns={cols}
            classes={classes?.tableClasses}
            mode='odd'
            pagination={pagination}
          />
          <div className='desk-body-regular-m text-color-tetriary' dangerouslySetInnerHTML={{ __html: helperText }} />
        </div>
      </ResponsiveContainer>
    </section>
  )
}
