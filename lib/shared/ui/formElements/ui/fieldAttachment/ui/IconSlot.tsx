import { type IFieldAttachmentProps, type TFieldAttachmentClasses } from '../FieldAttachment'
import { cn } from '$/shared/utils'

interface IIconSlotProps extends Pick<IFieldAttachmentProps, 'icon' | 'onClickIcon' | 'onKeyDownIcon' | 'disabled'> {
  classes?: Pick<TFieldAttachmentClasses, 'icon'>
}

export const IconSlot = ({ onClickIcon, onKeyDownIcon, icon, classes, disabled }: IIconSlotProps) => {
  const interactiveIconAttr = (onClickIcon || onKeyDownIcon) && {
    role: 'button',
    'aria-label': 'edit',
    tabIndex: 0,
    onClick: onClickIcon,
    onKeyDown: onKeyDownIcon,
    disabled
  }

  return (
    <span
      {...interactiveIconAttr}
      className={cn(
        'outline-none',
        {
          'pointer-events-none': disabled
        },
        classes?.icon
      )}
    >
      {icon}
    </span>
  )
}
