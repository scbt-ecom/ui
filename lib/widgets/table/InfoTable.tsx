import { TableUtils } from '../../shared/ui/table/model'
import { cn } from '../../shared/utils'
import { getHeaderAccessors, isHorizontalTable, type TableProps } from './model'
import { DataTable, ResponsiveContainer } from '$/shared/ui'

export const InfoTable = <Key extends string, TData extends Record<Key, unknown>>(props: TableProps<Key, TData>) => {
  const { title, subtitle, helperText, pagination = false, columns, data, horizontal, classes, ...restTableProps } = props

  const { accessors, sortingColumns, sortingFn } = getHeaderAccessors(columns)

  const cols = TableUtils.getColumns(data[0], {
    headerAccessor: accessors,
    enableSorting: sortingColumns,
    sortingFn
  })

  const isHorizontal = isHorizontalTable(horizontal)

  return (
    <section className={cn('w-full', classes?.root)}>
      <ResponsiveContainer className={cn('flex flex-col gap-12 mobile:max-w-[360px]', classes?.container)}>
        <div className={cn('flex flex-col gap-[16px]', classes?.textContainer)}>
          <div
            className={cn('mob-headline-bold-s desktop:desk-headline-bold-m', classes?.title)}
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <div className={cn('desktop:desk-body-regular-l', classes?.subtitle)} dangerouslySetInnerHTML={{ __html: subtitle }} />
        </div>

        <div className={cn('flex flex-col gap-4', classes?.tableContainer)}>
          <DataTable
            {...restTableProps}
            horizontal={isHorizontal}
            data={data}
            columns={cols}
            classes={classes?.baseTableClasses}
            mode='odd'
            pagination={pagination}
          />
          {helperText && (
            <div
              className={cn('desk-body-regular-m text-color-tetriary', classes?.helperText)}
              dangerouslySetInnerHTML={{ __html: helperText }}
            />
          )}
        </div>
      </ResponsiveContainer>
    </section>
  )
}

export default InfoTable
