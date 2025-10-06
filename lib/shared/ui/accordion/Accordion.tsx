'use client'

import type * as React from 'react'
import { forwardRef, type ReactElement, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { contentAnimation } from './model/helpers'
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
  label: string | ReactElement
  defaultOpen?: boolean
  icon?: React.ReactElement
  classes?: AccordionClasses
}

export const Accordion = forwardRef<HTMLDivElement, AccordionProps>(
  ({ children, label, classes, defaultOpen = false, icon }, ref) => {
    const [isOpen, setIsOpen] = useState(defaultOpen)
    const toggleOpen = () => setIsOpen((prev) => !prev)

    return (
      <div className={cn('flex flex-col gap-5', classes?.root)}>
        <div className={cn('w-full disabled:text-color-dark', classes?.wrapper)}>
          <AccordionHeader icon={icon} classes={classes?.header} isOpen={isOpen} onClick={toggleOpen}>
            {label}
          </AccordionHeader>
          <AnimatePresence mode='sync' initial={false}>
            {isOpen && (
              <motion.div
                ref={ref}
                {...contentAnimation}
                className={cn(
                  'desk-body-regular-l w-full overflow-hidden bg-color-transparent text-color-dark',
                  classes?.content
                )}
              >
                <div className={cn('p-4 desktop:p-6', classes?.contentInner)}>{children}</div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    )
  }
)

Accordion.displayName = 'Accordion'
