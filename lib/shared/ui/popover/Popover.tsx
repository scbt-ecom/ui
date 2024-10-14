import type { ReactElement, ReactNode } from 'react'
import type { PopoverContentProps as TPopoverContentPropsBase } from '@radix-ui/react-popover'
import * as PopoverPrimitive from '@radix-ui/react-popover'
import { Icon } from '../icon/Icon'
import { cn } from '$/shared/utils'

type TAdditionalClasses = {
  content: string
  arrow: string
  trigger: string
}

interface IPopoverContentProps extends TPopoverContentPropsBase {
  sideOffset?: number
  alignOffset?: number
  align?: 'end' | 'center' | 'start'
  side?: 'top' | 'right' | 'bottom' | 'left'
  defaultOpen?: boolean
  avoidCollisions?: boolean
}

export interface IPopoverProps extends IPopoverContentProps {
  triggerElement: ReactElement
  children: ReactNode
  classes?: Partial<TAdditionalClasses>
  headLine?: string
}

export const Popover = ({
  triggerElement,
  classes,
  sideOffset,
  alignOffset,
  align,
  side,
  defaultOpen = false,
  avoidCollisions = false,
  headLine,
  children,
  arrowPadding,
  ...contentProps
}: IPopoverProps) => {
  return (
    <div className=''>
      <PopoverPrimitive.Root defaultOpen={defaultOpen}>
        <div className='flex w-max items-center gap-2'>
          <h3 className='text-[24px] font-bold'>{headLine}</h3>
          <PopoverPrimitive.Trigger className={cn('cursor-pointer', classes?.trigger)} asChild>
            {triggerElement}
          </PopoverPrimitive.Trigger>
        </div>
        <PopoverPrimitive.Anchor />
        <PopoverPrimitive.Portal>
          <PopoverPrimitive.Content
            className={cn(
              'desk-body-regular-m flex w-64 items-start gap-2 rounded-sm bg-color-white p-4 shadow-sm',
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
            <PopoverPrimitive.Close aria-label='Close' className='size-4 outline-0 outline-transparent'>
              <Icon name='general/close' className='size-4 cursor-pointer text-icon-blue-grey-600' />
            </PopoverPrimitive.Close>
            <PopoverPrimitive.Arrow width={12} height={6} className={cn('fill-secondary-default', classes?.arrow)} />
          </PopoverPrimitive.Content>
        </PopoverPrimitive.Portal>
      </PopoverPrimitive.Root>
    </div>
  )
}
