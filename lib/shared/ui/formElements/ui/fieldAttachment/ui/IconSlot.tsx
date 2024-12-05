import { type IFieldAttachmentProps, type TFieldAttachmentClasses } from '../FieldAttachment'
import { cn } from '$/shared/utils'

interface IIconSlotProps extends Pick<IFieldAttachmentProps, 'icon' | 'onClickIcon' | 'onKeyDownIcon'> {
  classes?: Pick<TFieldAttachmentClasses, 'icon'>
}

export const IconSlot = ({ onClickIcon, onKeyDownIcon, icon, classes }: IIconSlotProps) => {
  const interactiveIconAttr = (onClickIcon || onKeyDownIcon) && {
    role: 'button',
    'aria-label': 'edit',
    tabIndex: 0,
    onClick: onClickIcon,
    onKeyDown: onKeyDownIcon
  }

  return (
    <span {...interactiveIconAttr} className={cn('outline-none', classes?.icon)}>
      {icon}
    </span>
  )
}
