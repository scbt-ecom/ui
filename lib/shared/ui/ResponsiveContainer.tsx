import type { HTMLAttributes, ReactNode } from 'react'
import { cn } from '$/shared/utils'

export interface IResponsiveContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  className?: string
}

export const ResponsiveContainer = ({ children, className, ...props }: IResponsiveContainerProps) => {
  return (
    <div className={cn('m-auto w-full max-w-[636px] mobile:px-4 desktop:max-w-[1140px]', className)} {...props}>
      {children}
    </div>
  )
}
