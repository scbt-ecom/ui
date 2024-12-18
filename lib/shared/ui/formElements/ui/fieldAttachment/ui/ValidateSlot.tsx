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
        <Icon name='general/check' className={cn('size-6 text-icon-positive-default', classes?.successIcon)} />
      )}
      {isInvalid && withValidateIcons && (
        <Icon name='info/warningCircle' className={cn('size-5 text-icon-secondary-default', classes?.errorIcon)} />
      )}
      {badge && !isValid && <Badge className={cn('bg-color-positive text-color-white', classes?.badge)}>{badge}</Badge>}
    </>
  )
}
