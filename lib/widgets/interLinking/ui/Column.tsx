import type { IAccordionProps } from '../../../shared/ui'
import { cn } from '../../../shared/utils'
import type { TColumnGroupSchema } from '../model/types'
import { ColumnGroup, type TColumnGroupClasses } from './ColumnGroup'

export type TColumnClasses = {
  column?: string
  columnGroup?: TColumnGroupClasses
}

export interface IColumnProps {
  columnsGroup: TColumnGroupSchema
  mobileAccordionProps?: IAccordionProps
  classes?: TColumnClasses
}

export const Column = ({ columnsGroup, mobileAccordionProps, classes }: IColumnProps) => {
  return (
    <div className={cn('flex flex-col gap-4 desktop:gap-6', classes?.column)}>
      {columnsGroup?.map((group) => (
        <ColumnGroup key={group.groupLabel} {...mobileAccordionProps} {...group} classes={classes?.columnGroup} />
      ))}
    </div>
  )
}
