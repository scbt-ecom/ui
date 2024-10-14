'use client'

import * as React from 'react'
import { Header, Trigger } from '@radix-ui/react-accordion'
import { Icon } from '../../icon/Icon'
import type { TAccordionHeaderClasses } from '../model/types'
import { cn } from '$/shared/utils'

interface IAccordionHeaderProps {
  children?: React.ReactElement | string
  classes?: Partial<TAccordionHeaderClasses>
}

export const AccordionHeader = React.forwardRef<HTMLButtonElement, IAccordionHeaderProps>(
  ({ children, classes, ...props }, forwardedRef) => (
    <Header className={cn('rounded-sm bg-color-primary-light-default', classes?.header)}>
      <Trigger
        ref={forwardedRef}
        className={cn(
          'group flex w-full cursor-pointer items-center justify-between gap-5 rounded-sm border border-solid border-transparent bg-color-transparent px-6 py-5 outline-0 focus:border-primary-default',
          classes?.trigger
        )}
        {...props}
      >
        <div className={cn('desk-body-medium-l text-color-dark', classes?.inner)}>{children}</div>
        <Icon
          name='arrows/arrowCircle'
          className={cn('size-8 text-icon-blue-grey-800 transition-all group-data-[state=open]:rotate-180', classes?.icon)}
        />
      </Trigger>
    </Header>
  )
)

AccordionHeader.displayName = 'AccordionHeader'
