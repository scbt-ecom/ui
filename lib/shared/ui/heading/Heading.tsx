import type { ReactNode } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '$/shared/utils'

// # add h5 and h6 могут использоваться там, где нужно по смыслу и могут быть разного размера на мобилке и декстопе

const headingConfig = cva('', {
  variants: {
    as: {
      h1: 'mob-headline-bold-m desktop:desk-headline-bold-l',
      h2: 'mob-headline-bold-s desktop:desk-headline-bold-m',
      h3: 'mob-title-bold-l desktop:desk-title-bold-l',
      h4: 'mob-title-bold-m desktop:desk-title-bold-s'
    }
  },
  defaultVariants: {
    as: 'h2'
  }
})

export interface IHeadingProps extends VariantProps<typeof headingConfig> {
  children: ReactNode
  className?: string
  as?: 'h1' | 'h2' | 'h3' | 'h4'
}

export const Heading = ({ as = 'h2', children, className, ...props }: IHeadingProps) => {
  const Element = as
  return (
    <Element className={cn(headingConfig({ as }), className)} {...props}>
      {children}
    </Element>
  )
}
