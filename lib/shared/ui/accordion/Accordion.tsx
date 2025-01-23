'use client'

import * as React from 'react'
import { forwardRef } from 'react'
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { AccordionHeader, type AccordionHeaderClasses } from './ui/AccordionHeader'
import { cn } from '$/shared/utils'

export type AccordionClasses = {
  root?: string
  wrapper?: string
  content?: string
  contentInner?: string
  header?: AccordionHeaderClasses
}

export interface AccordionProps {
  children: React.ReactNode
  label: string | React.ReactElement
  classes?: AccordionClasses
  defaultOpen?: boolean
  icon?: React.ReactElement
}

export const Accordion = forwardRef<HTMLDivElement, AccordionProps>(
  ({ children, label, classes, defaultOpen = false, icon }, ref) => {
    return (
      <AccordionPrimitive.Root
        className={cn('flex flex-col gap-5', classes?.root)}
        type='multiple'
        defaultValue={defaultOpen ? [label.toString()] : undefined}
      >
        <AccordionPrimitive.Item className={cn('disabled:text-color-dark w-full', classes?.wrapper)} value={label.toString()}>
          <AccordionHeader icon={icon} classes={classes?.header}>
            {label}
          </AccordionHeader>
          <AccordionPrimitive.Content
            id='text'
            ref={ref}
            className={cn(
              'desk-body-regular-l bg-color-transparent text-color-dark data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown max-w-[680px] overflow-hidden transition-all',
              classes?.content
            )}
          >
            <div className={cn('desktop:p-6 p-4', classes?.contentInner)}>{children}</div>
          </AccordionPrimitive.Content>
        </AccordionPrimitive.Item>
      </AccordionPrimitive.Root>
    )
  }
)
