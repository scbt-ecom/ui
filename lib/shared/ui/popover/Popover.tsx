'use client'

import type { ReactElement, ReactNode } from 'react'
import type { PopoverContentProps as PopoverContentPropsBase } from '@radix-ui/react-popover'
import * as PopoverPrimitive from '@radix-ui/react-popover'
import { Icon } from '$/shared/ui'
import { cn } from '$/shared/utils'

type PopoverClasses = {
  root?: string
  content?: string
  trigger?: string
  arrowIcon?: string
  closeIcon?: string
  closeTrigger?: string
}

interface PopoverContentProps extends PopoverContentPropsBase {
  sideOffset?: number
  alignOffset?: number
  align?: 'end' | 'center' | 'start'
  side?: 'top' | 'right' | 'bottom' | 'left'
  defaultOpen?: boolean
  avoidCollisions?: boolean
}

export interface PopoverProps extends PopoverContentProps {
  triggerElement: ReactElement
  children: ReactNode
  classes?: PopoverClasses
  portalContainer?: PopoverPrimitive.PopoverPortalProps['container']
}

export const Popover = ({
  triggerElement,
  classes,
  sideOffset = 4,
  alignOffset,
  align,
  side,
  defaultOpen = false,
  avoidCollisions = true,
  children,
  arrowPadding,
  portalContainer,
  ...contentProps
}: PopoverProps) => {
  return (
    <PopoverPrimitive.Root defaultOpen={defaultOpen}>
      <div className={cn('flex w-max items-center gap-2', classes?.root)}>
        <PopoverPrimitive.Trigger
          aria-label='tooltip'
          className={cn('flex cursor-pointer items-center justify-center', classes?.trigger)}
        >
          {triggerElement}
        </PopoverPrimitive.Trigger>
      </div>
      <PopoverPrimitive.Portal container={portalContainer}>
        <PopoverPrimitive.Content
          className={cn(
            'desk-body-regular-m bg-color-white flex w-fit max-w-64 items-start gap-2 rounded-sm p-4 shadow-sm outline-hidden',
            classes?.content
          )}
          sideOffset={sideOffset}
          alignOffset={alignOffset}
          avoidCollisions={avoidCollisions}
          arrowPadding={arrowPadding}
          align={align}
          side={side}
          {...contentProps}
        >
          {children}
          <PopoverPrimitive.Close
            aria-label='Close'
            className={cn('flex size-5 items-center justify-center outline-0 outline-transparent', classes?.closeTrigger)}
          >
            <Icon
              name='general/close'
              className={cn(
                'text-icon-blue-grey-600 hover:text-icon-blue-grey-800 size-5 cursor-pointer transition-colors',
                classes?.closeIcon
              )}
            />
          </PopoverPrimitive.Close>
          <PopoverPrimitive.Arrow width={12} height={6} className={cn('fill-white', classes?.arrowIcon)} />
        </PopoverPrimitive.Content>
      </PopoverPrimitive.Portal>
    </PopoverPrimitive.Root>
  )
}
