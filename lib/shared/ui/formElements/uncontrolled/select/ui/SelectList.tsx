import { components, type MenuListProps } from 'react-select'
import { type SelectItemOption } from '$/shared/ui'
import { cn } from '$/shared/utils'

export type SelectListClasses = {
  container?: string
}

type SelectListProps = MenuListProps<SelectItemOption> & {
  classes?: SelectListClasses
}

export const SelectList = ({ classes, ...props }: SelectListProps) => (
  <components.MenuList {...props} className={cn('customScrollbar-y overflow-y-scroll p-1 pr-1', classes?.container)} />
)
