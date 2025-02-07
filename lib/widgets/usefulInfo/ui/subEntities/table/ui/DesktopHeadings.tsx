import { cn } from '@scbt-ecom/ui/utils'
import { cva } from 'class-variance-authority'
import type { EntityTable } from '../../../../model'

const headingsConfig = cva('grid px-4 mb-4', {
  variants: {
    columnsVariant: {
      twoCols: 'grid-cols-2 gap-16',
      threeCols: 'grid-cols-3 gap-12'
    }
  }
})

interface DesktopHeadingsProps {
  headings: EntityTable['headings']
  columnsVariant: EntityTable['columnsVariant']
}

export const DesktopHeadings = ({ headings, columnsVariant }: DesktopHeadingsProps) => {
  return (
    <div className={cn(headingsConfig({ columnsVariant }))}>
      {headings?.map((ceil) => (
        <div key={ceil?.heading} className='text-color-secondary'>
          {ceil?.heading}
        </div>
      ))}
    </div>
  )
}
