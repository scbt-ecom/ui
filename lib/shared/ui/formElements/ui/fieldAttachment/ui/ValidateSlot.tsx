import { type IFieldAttachmentProps, type TFieldAttachmentClasses } from '../FieldAttachment'
import { Badge, Icon } from '$/shared/ui'
import { cn } from '$/shared/utils'

export interface IValidateSlotProps extends Pick<IFieldAttachmentProps, 'badge' | 'withValidateIcons'> {
  isValid?: boolean
  isInvalid?: boolean
  classes?: Pick<TFieldAttachmentClasses, 'badge' | 'errorIcon' | 'successIcon'>
}

export const ValidateSlot = ({ badge, withValidateIcons, isValid, isInvalid, classes }: IValidateSlotProps) => {
  return (
    <>
      {isValid && withValidateIcons && (
        <Icon name='general/check' className={cn('text-icon-positive-default size-6', classes?.successIcon)} />
      )}
      {isInvalid && withValidateIcons && (
        <Icon name='info/warningCircle' className={cn('text-icon-secondary-default size-5', classes?.errorIcon)} />
      )}
      {badge && !isValid && <Badge className={cn('bg-color-positive text-color-white', classes?.badge)}>{badge}</Badge>}
    </>
  )
}
