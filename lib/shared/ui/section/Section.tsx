import type { HTMLAttributes, ReactNode } from 'react'
import { cn } from '$/shared/utils'

export interface SectionProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  className?: string
}

export const Section = ({ children, className, ...props }: SectionProps) => {
  return (
    <section className={cn('desktop:pb-20 pb-16', className)} {...props}>
      {children}
    </section>
  )
}
