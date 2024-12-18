import { components, type DropdownIndicatorProps } from 'react-select'
import { type TDropdownIndicatorClasses } from '../model/types'
import { Icon } from '$/shared/ui'
import { cn } from '$/shared/utils'

interface IDropdownIndicatorProps<Option> extends DropdownIndicatorProps<Option> {
  classes?: TDropdownIndicatorClasses
}

export const DropdownIndicator = <Option,>({ classes, ...props }: IDropdownIndicatorProps<Option>) => {
  return (
    <components.DropdownIndicator {...props}>
      <Icon
        name='arrows/arrowRight'
        className={cn(
          'size-6 rotate-90 text-icon-blue-grey-600 transition-all',
          { '-rotate-90': props.selectProps.menuIsOpen },
          classes?.indicatorIcon
        )}
      />
    </components.DropdownIndicator>
  )
}
