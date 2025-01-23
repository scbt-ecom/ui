'use client'

import * as React from 'react'
import { Header, Trigger } from '@radix-ui/react-accordion'
import { Icon } from '../../icon'
import { cn } from '$/shared/utils'

export type AccordionHeaderClasses = {
  header?: string
  trigger?: string
  label?: string
  icon?: string
}

interface AccordionHeaderProps {
  children?: React.ReactElement | string
  classes?: AccordionHeaderClasses
  icon?: React.ReactElement
}

export const AccordionHeader = React.forwardRef<HTMLButtonElement, AccordionHeaderProps>(
  ({ children, classes, icon, ...props }, forwardedRef) => (
    <Header className={cn('bg-color-primary-light-default rounded-sm', classes?.header)}>
      <Trigger
        ref={forwardedRef}
        className={cn(
          'group bg-color-transparent focus-visible:border-primary-default desktop:px-6 desktop:py-4 flex w-full cursor-pointer items-center justify-between gap-5 rounded-sm border border-solid border-transparent px-4 py-3 outline-0',
          classes?.trigger
        )}
        {...props}
      >
        <div className={cn('desk-body-medium-l text-color-dark flex-1 text-left', classes?.label)}>{children}</div>

        {icon || (
          <Icon
            name='arrows/arrowCircle'
            className={cn(
              'text-icon-blue-grey-800 size-8 rotate-180 transition-all group-data-[state=open]:rotate-0',
              classes?.icon
            )}
          />
        )}
      </Trigger>
    </Header>
  )
)

AccordionHeader.displayName = 'AccordionHeader'
