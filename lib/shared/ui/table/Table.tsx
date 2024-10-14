import type { ReactElement } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { Heading } from '../Heading'
import { ResponsiveContainer } from '../ResponsiveContainer'
import type { TableRows, TTableClasses, TTableColumnCount } from './type'
import { cn } from '$/shared/utils'

const tableConfig = cva('grid', {
  variants: {
    columnCount: {
      twoColumns: 'grid-cols-[repeat(2,minmax(172px,_1fr))] desktop:grid-cols-[repeat(2,minmax(172px,_1fr))]',
      threeColumns: 'grid-cols-[repeat(3,minmax(172px,_1fr))] desktop:grid-cols-[repeat(3,minmax(312px,_1fr))]'
    }
  }
})

const itemTableConfig = cva('grid', {
  variants: {
    columnCount: {
      twoColumns: '',
      threeColumns: ''
    },
    titlesExist: {
      exist: '',
      notExist: ''
    }
  },
  compoundVariants: [
    {
      titlesExist: 'notExist',
      columnCount: 'twoColumns',
      class: 'grid-rows-[repeat(2,_auto)] border-b border-warm-grey-200 py-4'
    },
    {
      titlesExist: 'notExist',
      columnCount: 'threeColumns',
      class: 'grid-cols-[repeat(3,_auto)]'
    },
    {
      titlesExist: 'exist',
      columnCount: 'twoColumns',
      class: 'grid-cols-[repeat(2,_auto)]'
    },
    {
      titlesExist: 'exist',
      columnCount: 'threeColumns',
      class: 'grid-cols-[repeat(3,_auto)]'
    }
  ]
})

const tableOverflowConfig = cva('grid', {
  variants: {
    columnCount: {
      twoColumns: '',
      threeColumns: ''
    }
  },
  compoundVariants: [
    {
      columnCount: 'threeColumns',
      class: 'mobile:overflow-x-scroll mobile:max-w-[368px] mb-1'
    }
  ]
})

const textTableConfig = cva('border-b border-warm-grey-200 py-4 desktop:desk-body-regular-l mob-body-regular-l', {
  variants: {
    columnCount: {
      twoColumns: '',
      threeColumns: ''
    },
    titlesExist: {
      exist: '',
      notExist: ''
    }
  },
  compoundVariants: [
    {
      titlesExist: 'notExist',
      columnCount: 'twoColumns',
      class: 'border-transparent border-0 p-0'
    }
  ]
})

type TTableProps = VariantProps<typeof tableConfig>

export interface ITable<C extends TTableColumnCount> extends TTableProps {
  headTitle: string | ReactElement
  columnCount: TTableColumnCount
  tableHead?: string[]
  tableRows: TableRows<C>
  additionalText?: string
  classes?: Partial<TTableClasses>
}

export const Table = <C extends TTableColumnCount>({
  headTitle,
  tableRows,
  tableHead,
  additionalText,
  columnCount,
  classes
}: ITable<C>) => {
  const titlesExist = tableHead && tableHead.length > 0 ? 'exist' : 'notExist'

  return (
    <ResponsiveContainer>
      <div className={cn('flex flex-col', classes?.tableRootWrapper)}>
        <Heading as='h3' className={cn('mob-title-bold-m pb-6 desktop:desk-title-bold-s', classes?.tableHeading)}>
          {headTitle}
        </Heading>
        <div className={cn(tableOverflowConfig({ columnCount }), classes?.tableBody)}>
          <ul className={cn(tableConfig({ columnCount }), classes?.tableTitlesContainer)}>
            {tableHead?.map((title) => (
              <li
                key={title}
                className={cn(
                  'mob-body-regular-l border-b border-warm-grey-200 py-4 desktop:desk-body-regular-l',
                  classes?.tableTitleRow
                )}
              >
                {title}
              </li>
            ))}
          </ul>

          <ul className={cn('mb-4 flex flex-col', classes?.tableBodyContainer)}>
            {tableRows.map((row) => (
              <li className={cn(itemTableConfig({ columnCount, titlesExist }), classes?.tableBodyRow)}>
                {row.map((ceil) => (
                  <p className={cn(textTableConfig({ titlesExist, columnCount }), classes?.tableBodyCeil)}>{ceil.text}</p>
                ))}
              </li>
            ))}
          </ul>
        </div>
        <p className={cn('mob-body-regular-m desktop:desk-body-regular-l', classes?.tableAdditionalText)}>{additionalText}</p>
      </div>
    </ResponsiveContainer>
  )
}
