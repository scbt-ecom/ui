import type { AccordionProps } from '../../../shared/ui'
import { cn } from '../../../shared/utils'
import type { TColumnGroupSchema } from '../model/types'
import { ColumnGroup, type ColumnGroupClasses } from './ColumnGroup'

export type ColumnClasses = {
  column?: string
  columnGroup?: ColumnGroupClasses
}

export interface ColumnProps {
  columnsGroup: TColumnGroupSchema
  mobileAccordionProps?: AccordionProps
  classes?: ColumnClasses
}

export const Column = ({ columnsGroup, mobileAccordionProps, classes }: ColumnProps) => {
  return (
    <div className={cn('desktop:gap-6 flex flex-col gap-4', classes?.column)}>
      {columnsGroup?.map((group) => (
        <ColumnGroup key={group.groupLabel} {...mobileAccordionProps} {...group} classes={classes?.columnGroup} />
      ))}
    </div>
  )
}
