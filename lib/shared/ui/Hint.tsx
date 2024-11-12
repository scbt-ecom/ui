'use client'

import * as React from 'react'
import type { TooltipContentProps } from '@radix-ui/react-tooltip'
import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import { useClickOutside } from '../hooks'
import { useDevice } from '../hooks/useMediaQuery'
import { cn } from '$/shared/utils'

type TAdditionalClasses = {
  content: string
  arrow: string
  trigger: string
}

export interface IHintContentProps extends TooltipContentProps {
  delayDuration?: number
  sideOffset?: number
  align?: 'end' | 'center' | 'start'
  side?: 'top' | 'right' | 'bottom' | 'left'
  defaultOpen?: boolean
}

export interface IHintProps extends IHintContentProps {
  triggerElement: React.ReactElement
  children: React.ReactElement | string
  classes?: Partial<TAdditionalClasses>
}

export const Hint = ({
  triggerElement,
  children,
  delayDuration = 250,
  sideOffset = 6,
  align = 'center',
  side = 'top',
  defaultOpen = false,
  classes,
  ...contentProps
}: IHintProps) => {
  const [open, setOpen] = React.useState(false)
  const contentRef = React.useRef<HTMLDivElement>(null)
  const { isMobile } = useDevice()

  useClickOutside(contentRef, () => setOpen(false))
  return (
    <TooltipPrimitive.Provider>
      <TooltipPrimitive.Root open={open} onOpenChange={setOpen} defaultOpen={defaultOpen} delayDuration={delayDuration}>
        <div onClick={() => setOpen(isMobile ? true : false)}>
          <TooltipPrimitive.Trigger asChild className={cn('cursor-pointer', classes?.trigger)}>
            {triggerElement}
          </TooltipPrimitive.Trigger>
          <TooltipPrimitive.Content
            onPointerDownOutside={(event) => event.preventDefault()}
            className={cn(
              'desk-body-regular-m w-48 origin-center animate-scale-in rounded-sm bg-color-white p-4 text-color-dark shadow-sm',
              classes?.content
            )}
            sideOffset={sideOffset}
            align={align}
            side={side}
            ref={contentRef}
            {...contentProps}
          >
            {children}
            <TooltipPrimitive.Arrow width={12} height={6} className={cn('fill-white', classes?.arrow)} />
          </TooltipPrimitive.Content>
        </div>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  )
}
