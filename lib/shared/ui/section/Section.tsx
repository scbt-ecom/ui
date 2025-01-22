import type { HTMLAttributes, ReactNode } from 'react'
import { cn } from '$/shared/utils'

export interface SectionProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  className?: string
}

export const Section = ({ children, className, ...props }: SectionProps) => {
  return (
    <section className={cn('pb-16 desktop:pb-20', className)} {...props}>
      {children}
    </section>
  )
}
