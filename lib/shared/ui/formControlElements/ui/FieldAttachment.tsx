'use client'

import * as React from 'react'
import { Badge } from '../../Badge'
import { Icon } from '../../icon/Icon'
import type { TFieldAttachmentClasses } from '../model/classes-types'
import type { TFieldAttachment } from '../model/props-types'
import { cn } from '$/shared/utils'

interface IFieldAttachmentProps extends TFieldAttachment {
  classes?: Partial<TFieldAttachmentClasses>
  error?: boolean
  isTextarea?: boolean
  swapPosition?: boolean
  onClickIcon?: (...args: unknown[]) => unknown
  onKeyDownIcon?: (event: React.KeyboardEvent) => unknown
  isSlider?: boolean
}

export const FieldAttachment = ({
  badge,
  isSlider,
  icon,
  error,
  isTextarea = false,
  classes,
  swapPosition,
  onClickIcon,
  onKeyDownIcon
}: IFieldAttachmentProps) => {
  const interactiveIconAttr = (onClickIcon || onKeyDownIcon) && {
    role: 'button',
    tabIndex: 0,
    onClick: onClickIcon,
    onKeyDown: onKeyDownIcon
  }

  return (
    <>
      {error ? (
        <Icon name='info/warningCircle' className={cn('mr-4 size-6 text-icon-secondary-default', { 'm-0 size-5': isTextarea })} />
      ) : (
        <>
          {(badge || icon) && (
            <div
              className={cn(
                'mr-4 flex items-center gap-4',
                { 'm-0': isTextarea },
                { 'flex-row-reverse': swapPosition },
                classes?.attachmentWrapper
              )}
            >
              {icon && (
                <span
                  {...interactiveIconAttr}
                  className={cn(
                    'flex size-6 items-center justify-center',
                    { 'size-5': isTextarea },
                    { 'group-focus-within:[&_svg]:text-icon-blue-grey-800': isSlider },
                    classes?.icon
                  )}
                >
                  {icon}
                </span>
              )}
              {badge && <Badge className={cn('bg-color-positive', classes?.badge)}>{badge}</Badge>}
            </div>
          )}
        </>
      )}
    </>
  )
}
