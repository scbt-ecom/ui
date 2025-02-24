import type { HTMLAttributes, ReactNode } from 'react'
import { cn } from '$/shared/utils'

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode
  className?: string
}

export const Badge = ({ children, className, ...props }: BadgeProps) => {
  return (
    <span
      className={cn(
        'desk-body-regular-m flex min-h-6 min-w-6 items-center justify-center text-nowrap rounded-full bg-color-primary-default px-2 py-[2px] text-color-white',
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}
