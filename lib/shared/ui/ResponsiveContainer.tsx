import type { HTMLAttributes, ReactNode } from 'react'
import { cn } from '$/shared/utils'

export interface IResponsiveContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  className?: string
}

export const ResponsiveContainer = ({ children, className }: IResponsiveContainerProps) => {
  return <div className={cn('m-auto w-full px-4 desktop:max-w-[1188px]', className)}>{children}</div>
}
