import { TableUtils } from '../../shared/ui/table/model'
import { cn } from '../../shared/utils'
import { getHeaderAccessors, type TableProps } from './model'
import { DataTable, ResponsiveContainer } from '$/shared/ui'

export const Table = <Key extends string, TData extends Record<Key, unknown>>(props: TableProps<Key, TData>) => {
  const { title, subtitle, helperText, pagination = false, columns, data, ...restTableProps } = props

  const { accessors, sortingColumns } = getHeaderAccessors(columns)

  const cols = TableUtils.getColumns(data[0], {
    // @ts-expect-error test
    headerAccessor: accessors,
    enableSorting: sortingColumns
  })

  return (
    <section className='w-full'>
      <ResponsiveContainer className={cn('flex flex-col gap-12 mobile:max-w-[360px]')}>
        <div className='flex flex-col gap-[16px]'>
          <div className='mob-headline-bold-s desktop:desk-headline-bold-m' dangerouslySetInnerHTML={{ __html: title }} />
          <div className='desktop:desk-body-regular-l' dangerouslySetInnerHTML={{ __html: subtitle }} />
        </div>

        <div className='flex flex-col gap-4'>
          <DataTable {...restTableProps} data={data} columns={cols} mode='odd' pagination={pagination} />
          {helperText && (
            <div className='desk-body-regular-m text-color-tetriary' dangerouslySetInnerHTML={{ __html: helperText }} />
          )}
        </div>
      </ResponsiveContainer>
    </section>
  )
}
