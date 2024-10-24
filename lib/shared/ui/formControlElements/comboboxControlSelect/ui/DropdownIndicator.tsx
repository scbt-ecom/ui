import { components, type DropdownIndicatorProps } from 'react-select'
import { Icon } from '$/shared/ui/icon'
import { cn } from '$/shared/utils'

export const DropdownIndicator = <Option,>(props: DropdownIndicatorProps<Option>) => {
  return (
    <components.DropdownIndicator {...props}>
      <Icon
        name='arrows/arrowRight'
        className={cn('size-6 rotate-90 text-icon-blue-grey-600 transition-all', { '-rotate-90': props.selectProps.menuIsOpen })}
      />
    </components.DropdownIndicator>
  )
}
