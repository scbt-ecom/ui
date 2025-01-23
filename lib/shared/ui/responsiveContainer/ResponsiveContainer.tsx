import type { HTMLAttributes, ReactNode } from 'react'
import { cn } from '$/shared/utils'

export interface ResponsiveContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  className?: string
  offset?: boolean
}

export const ResponsiveContainer = ({ children, offset = true, className, ...props }: ResponsiveContainerProps) => {
  return (
    <div className={cn('desktop:max-w-[1140px] m-auto w-full max-w-[636px]', { 'mobile:px-4': offset }, className)} {...props}>
      {children}
    </div>
  )
}
