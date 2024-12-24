'use client'

import type { ReactElement } from 'react'
import { IconSlot, ValidateSlot } from './ui'
import { cn } from '$/shared/utils'

export type TFieldAttachmentClasses = {
  successIcon?: string
  errorIcon?: string
  badge?: string
  icon?: string
  fieldAttachmentRoot?: string
}

export interface IFieldAttachmentProps {
  badge?: ReactElement | string
  invalid?: boolean
  isTouched?: boolean
  withValidateIcons?: boolean
  icon?: ReactElement
  onClickIcon?: (...args: unknown[]) => unknown
  onKeyDownIcon?: (event: React.KeyboardEvent) => unknown
  classes?: TFieldAttachmentClasses
  disabled?: boolean
}

export const FieldAttachment = ({
  badge,
  invalid,
  isTouched,
  withValidateIcons,
  icon,
  onClickIcon,
  onKeyDownIcon,
  classes,
  disabled
}: IFieldAttachmentProps) => {
  const isValid = !invalid && isTouched
  const isInvalid = invalid && isTouched

  return (
    <div className={cn('mr-4 flex items-center gap-4', classes?.fieldAttachmentRoot)}>
      {icon && (
        <IconSlot disabled={disabled} icon={icon} onClickIcon={onClickIcon} onKeyDownIcon={onKeyDownIcon} classes={classes} />
      )}
      <ValidateSlot
        badge={badge}
        isInvalid={isInvalid}
        isValid={isValid}
        withValidateIcons={withValidateIcons}
        classes={classes}
      />
    </div>
  )
}
