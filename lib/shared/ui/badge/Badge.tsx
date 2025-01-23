import type { HTMLAttributes, ReactElement } from 'react'
import { cn } from '$/shared/utils'

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactElement | string
  className?: string
}

export const Badge = ({ children, className, ...props }: BadgeProps) => {
  return (
    <span
      className={cn(
        'desk-body-regular-m bg-color-primary-default text-color-white flex min-h-6 min-w-6 items-center justify-center rounded-full px-2 py-[2px] text-nowrap',
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}
