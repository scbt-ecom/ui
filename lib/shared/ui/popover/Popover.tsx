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
  withCloseBtn?: boolean
  withArrow?: boolean
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
  withCloseBtn = true,
  withArrow = true,
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
            'desk-body-regular-m flex w-fit max-w-64 items-start gap-2 rounded-sm bg-color-white p-4 shadow-sm outline-none',
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

          {withCloseBtn && (
            <PopoverPrimitive.Close
              aria-label='Close'
              className={cn('flex size-5 items-center justify-center outline-0 outline-transparent', classes?.closeTrigger)}
            >
              <Icon
                name='general/close'
                className={cn(
                  'size-5 cursor-pointer text-icon-blue-grey-600 transition-colors hover:text-icon-blue-grey-800',
                  classes?.closeIcon
                )}
              />
            </PopoverPrimitive.Close>
          )}
          {withArrow && <PopoverPrimitive.Arrow width={12} height={6} className={cn('fill-white', classes?.arrowIcon)} />}
        </PopoverPrimitive.Content>
      </PopoverPrimitive.Portal>
    </PopoverPrimitive.Root>
  )
}
