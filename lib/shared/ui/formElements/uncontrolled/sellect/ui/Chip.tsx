import type { SelectItemOption } from '../model'
import { Icon } from '$/shared/ui'
import { cn } from '$/shared/utils'

type ControlChipClasses = {
  chip?: string
}

export interface ControlChipProps extends React.HTMLAttributes<HTMLDivElement> {
  displayValue?: (option: SelectItemOption) => string
  data: SelectItemOption
  classes?: ControlChipClasses
  onDeleteItem: (option: SelectItemOption) => void
}

export const ControlChip = ({ data, displayValue, classes, onDeleteItem, ...props }: ControlChipProps) => (
  <div
    {...props}
    className={cn(
      'mob-body-regular-l flex w-fit items-center gap-x-1 whitespace-nowrap',
      'rounded-sm bg-color-primary-tr-hover px-1 text-color-primary-default',
      classes?.chip
    )}
  >
    {displayValue ? displayValue(data) : data.label}
    <Icon
      name='general/close'
      className='size-3.5 cursor-pointer'
      onClick={(event) => {
        event.stopPropagation()
        event.nativeEvent.stopPropagation()

        onDeleteItem(data)
      }}
    />
  </div>
)
