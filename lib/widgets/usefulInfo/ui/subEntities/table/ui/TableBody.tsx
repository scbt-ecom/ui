import type { EntityTable } from '../../../../model'
import { transformMobileRows } from '../model/utils'
import { DesktopHeadings } from './DesktopHeadings'
import { DesktopRow } from './DesktopRow'
import { MobileRow } from './MobileRow'
import { useDevice } from '$/shared/hooks'

interface TableBodyProps {
  tableVariant: EntityTable['tableVariant']
  rows: EntityTable['rows']
  headings?: EntityTable['headings']
  columnsVariant: EntityTable['columnsVariant']
}

export const TableBody = ({ tableVariant, rows, headings, columnsVariant }: TableBodyProps) => {
  const { isDesktop } = useDevice()
  const formattedRows = transformMobileRows(rows, headings)?.rows ?? []
  const headingsExist = Boolean(headings && headings.length > 0)

  return (
    <div className='flex flex-col'>
      {isDesktop && headingsExist && <DesktopHeadings headings={headings} columnsVariant={columnsVariant} />}
      {isDesktop ? (
        <>
          {rows?.map((row, rowIndex) => (
            <DesktopRow key={rowIndex} rowIndex={rowIndex} tableVariant={tableVariant} columnsVariant={columnsVariant} {...row} />
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
              {...row}
            />
          ))}
        </>
      )}
    </div>
  )
}
