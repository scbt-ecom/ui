'use client'

import * as React from 'react'
import { Header, Trigger } from '@radix-ui/react-accordion'
import { Icon } from '../../icon'
import type { TAccordionClasses } from '../Accordion'
import { cn } from '$/shared/utils'

interface IAccordionHeaderProps {
  children?: React.ReactElement | string
  classes?: Pick<TAccordionClasses, 'header' | 'trigger' | 'label' | 'icon'>
  icon?: React.ReactElement
}

export const AccordionHeader = React.forwardRef<HTMLButtonElement, IAccordionHeaderProps>(
  ({ children, classes, icon, ...props }, forwardedRef) => (
    <Header className={cn('rounded-sm bg-color-primary-light-default', classes?.header)}>
      <Trigger
        ref={forwardedRef}
        className={cn(
          'group flex w-full cursor-pointer items-center justify-between gap-5 rounded-sm border border-solid border-transparent bg-color-transparent px-4 py-3 outline-0 focus-visible:border-primary-default desktop:px-6 desktop:py-4',
          classes?.trigger
        )}
        {...props}
      >
        <div className={cn('desk-body-medium-l flex-1 text-left text-color-dark', classes?.label)}>{children}</div>

        {icon || (
          <Icon
            name='arrows/arrowCircle'
            className={cn(
              'size-8 rotate-180 text-icon-blue-grey-800 transition-all group-data-[state=open]:rotate-0',
              classes?.icon
            )}
          />
        )}
      </Trigger>
    </Header>
  )
)

AccordionHeader.displayName = 'AccordionHeader'
