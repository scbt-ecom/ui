'use client'

import type { ReactElement } from 'react'
import * as React from 'react'
import { motion } from 'framer-motion'
import { Icon } from '../../icon'
import { cn } from '$/shared/utils'

export type AccordionHeaderClasses = {
  header?: string
  trigger?: string
  label?: string
  icon?: string
}

interface AccordionHeaderProps {
  isOpen: boolean
  onClick: () => void
  children: string | ReactElement
  icon?: React.ReactElement
  classes?: AccordionHeaderClasses
}

export const AccordionHeader = React.forwardRef<HTMLButtonElement, AccordionHeaderProps>(
  ({ children, classes, icon, isOpen, onClick }, forwardedRef) => (
    <div className={cn('rounded-sm bg-color-primary-light-default', classes?.header)}>
      <button
        ref={forwardedRef}
        type='button'
        onClick={onClick}
        className={cn(
          'group flex w-full cursor-pointer items-center justify-between gap-5 rounded-sm border border-solid border-transparent bg-color-transparent px-4 py-3 outline-0 focus-visible:border-primary-default desktop:px-6 desktop:py-4',
          classes?.trigger
        )}
        data-open={isOpen}
      >
        <div className={cn('desk-body-medium-l flex-1 text-left text-color-dark', classes?.label)}>{children}</div>

        <motion.div animate={{ rotate: isOpen ? 0 : 180 }} transition={{ duration: 0.3 }}>
          {icon || <Icon name='arrows/arrowCircle' className={cn('size-8 text-icon-blue-grey-800', classes?.icon)} />}
        </motion.div>
      </button>
    </div>
  )
)

AccordionHeader.displayName = 'AccordionHeader'
