import { cva } from 'class-variance-authority'
import type { EntityTableProps } from '../Table'
import { cn } from '$/shared/utils'

const headingsConfig = cva('desktop:grid mobile:hidden pr-4 mb-4', {
  variants: {
    columnsVariant: {
      twoCols: 'grid-cols-[248px_1fr] gap-16',
      threeCols: 'grid-cols-[248px_1fr_1fr] gap-12'
    }
  }
})

export type DesktopHeadingClasses = {
  row?: string
  cell?: string
}

interface DesktopHeadingsProps {
  headings: EntityTableProps['headings']
  columnsVariant: EntityTableProps['columnsVariant']
  classes?: DesktopHeadingClasses
}

export const DesktopHeadings = ({ headings, columnsVariant, classes }: DesktopHeadingsProps) => {
  return (
    <div className={cn(headingsConfig({ columnsVariant }), classes?.row)}>
      {headings?.map((cell) => (
        <div key={cell?.heading} className={cn('text-color-secondary', classes?.cell)}>
          {cell?.heading}
        </div>
      ))}
    </div>
  )
}
