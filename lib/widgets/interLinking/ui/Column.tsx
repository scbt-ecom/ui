import type { ColumnGroupSchema } from '../model/types'
import { ColumnGroup, type ColumnGroupClasses } from './ColumnGroup'
import type { AccordionProps } from '$/shared/ui'
import { cn } from '$/shared/utils'

export type ColumnClasses = {
  column?: string
  columnGroup?: ColumnGroupClasses
}

export interface ColumnProps {
  column: ColumnGroupSchema[]
  mobileAccordionProps?: AccordionProps
  classes?: ColumnClasses
}

export const Column = ({ column, mobileAccordionProps, classes }: ColumnProps) => {
  return (
    <div className={cn('flex flex-col gap-4 desktop:gap-6', classes?.column)}>
      {column?.map((group) => (
        <ColumnGroup key={group.groupLabel} {...mobileAccordionProps} {...group} classes={classes?.columnGroup} />
      ))}
    </div>
  )
}
