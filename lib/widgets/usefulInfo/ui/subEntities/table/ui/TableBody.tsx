import { transformMobileRows } from '../model/utils'
import type { EntityTableProps } from '../Table'
import { type DesktopHeadingClasses, DesktopHeadings } from './DesktopHeadings'
import { DesktopRow, type DesktopRowClasses } from './DesktopRow'
import { MobileRow, type MobileRowClasses } from './MobileRow'
import { useDevice } from '$/shared/hooks'
import { cn } from '$/shared/utils'

export type TableBodyClasses = {
  wrapper?: string
  desktopHeading: DesktopHeadingClasses
  desktopRow?: DesktopRowClasses
  mobileRow?: MobileRowClasses
}

interface TableBodyProps {
  tableVariant: EntityTableProps['tableVariant']
  rows: EntityTableProps['rows']
  headings?: EntityTableProps['headings']
  columnsVariant: EntityTableProps['columnsVariant']
  classes?: TableBodyClasses
}

export const TableBody = ({ tableVariant, rows, headings, columnsVariant, classes }: TableBodyProps) => {
  const { isDesktop } = useDevice()
  const formattedRows = transformMobileRows(rows, headings)?.rows ?? []
  const headingsExist = Boolean(headings && headings.length > 0)

  return (
    <div className={cn('flex flex-col', classes?.wrapper)}>
      {isDesktop && headingsExist && (
        <DesktopHeadings headings={headings} columnsVariant={columnsVariant} classes={classes?.desktopHeading} />
      )}
      {isDesktop ? (
        <>
          {rows?.map((row, rowIndex) => (
            <DesktopRow
              key={rowIndex}
              rowIndex={rowIndex}
              tableVariant={tableVariant}
              columnsVariant={columnsVariant}
              classes={classes?.desktopRow}
              {...row}
            />
          ))}
        </>
      ) : (
        <>
          {formattedRows?.map((row, rowIndex) => (
            <MobileRow
              key={rowIndex}
              headingsExist={headingsExist}
              tableVariant={tableVariant}
              columnsVariant={columnsVariant}
              classes={classes?.desktopRow}
              {...row}
            />
          ))}
        </>
      )}
    </div>
  )
}
