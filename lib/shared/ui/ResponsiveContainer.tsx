import type { HTMLAttributes, ReactNode } from 'react'
import { cn } from '$/shared/utils'

export interface IResponsiveContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  className?: string
}

export const ResponsiveContainer = ({ children, className, ...props }: IResponsiveContainerProps) => {
  return (
    <div className={cn('w-full px-4 m-auto desktop:max-w-[1188px]', className)} {...props}>
      {children}
    </div>
  )
}
