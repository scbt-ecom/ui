'use client'

import * as React from 'react'
import { forwardRef } from 'react'
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { AccordionHeader } from './ui/AccordionHeader'
import { cn } from '$/shared/utils'

export type TAccordionClasses = {
  root?: string
  wrapper?: string
  content?: string
  contentInner?: string
  header?: string
  trigger?: string
  label?: string
  icon?: string
}

export interface IAccordionProps {
  children: React.ReactNode
  label: string | React.ReactElement
  classes?: TAccordionClasses
  defaultOpen?: boolean
  icon?: React.ReactElement
}

export const Accordion = forwardRef<HTMLDivElement, IAccordionProps>(
  ({ children, label, classes, defaultOpen = false, icon }, ref) => {
    return (
      <AccordionPrimitive.Root
        className={cn('flex flex-col gap-5', classes?.root)}
        type='multiple'
        defaultValue={defaultOpen ? [label.toString()] : undefined}
      >
        <AccordionPrimitive.Item className={cn('w-full disabled:text-color-dark', classes?.wrapper)} value={label.toString()}>
          <AccordionHeader icon={icon} classes={classes}>
            {label}
          </AccordionHeader>
          <AccordionPrimitive.Content
            id='text'
            ref={ref}
            className={cn(
              'desk-body-regular-l max-w-[680px] overflow-hidden bg-color-transparent text-color-dark transition-all data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown',
              classes?.content
            )}
          >
            <div className={cn('p-4 desktop:p-6', classes?.contentInner)}>{children}</div>
          </AccordionPrimitive.Content>
        </AccordionPrimitive.Item>
      </AccordionPrimitive.Root>
    )
  }
)
