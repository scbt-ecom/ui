import { type AllowedIcons, Icon, Popover, type PopoverProps } from '$/shared/ui'
import { cn } from '$/shared/utils'

export type AssistHintClasses = {
  wrapper?: string
  block?: string
  icon?: string
  description?: string
}

export interface AssistHintProps {
  iconName: AllowedIcons
  text: string
  hint?: string
  classes?: AssistHintClasses
  popoverProps?: PopoverProps
}

export const AssistHint = ({ iconName, text, hint, classes, popoverProps }: AssistHintProps) => {
  return (
    <div className={cn('mb-6 flex items-center gap-2', classes?.wrapper)}>
      <div className={cn('flex items-center gap-1', classes?.block)}>
        <Icon name={iconName} className={cn('size-6 text-icon-blue-grey-800', classes?.icon)} />
        <p className={cn('desk-body-regular-l text-color-tetriary', classes?.description)}>{text}</p>
      </div>

      {hint && (
        <Popover
          withCloseBtn={false}
          triggerElement={<Icon name='info/helpCircle' className='size-5 text-icon-blue-grey-600' />}
          {...popoverProps}
        >
          {hint}
        </Popover>
      )}
    </div>
  )
}
