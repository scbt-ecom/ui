import type { ReactElement } from 'react'
import { cn } from '$/shared/utils'

export interface IBadgeProps {
  children: ReactElement | string
  className?: string
}

export const Badge = ({ children, className }: IBadgeProps) => {
  return (
    <span
      className={cn(
        'desk-body-regular-s flex min-h-6 min-w-6 items-center justify-center text-nowrap rounded-full bg-color-primary-default px-2 py-1 text-color-white',
        className
      )}
    >
      {children}
    </span>
  )
}
