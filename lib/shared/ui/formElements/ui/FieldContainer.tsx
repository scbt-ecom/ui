'use client'

import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '$/shared/utils'

const fieldContainerConfig = cva('relative flex flex-col group', {
  variants: {
    size: {
      sm: 'w-[360px]',
      md: 'w-[520px]',
      lg: 'w-[720px]',
      full: 'w-full'
    }
  },
  defaultVariants: {
    size: 'full'
  }
})

export type TFieldContainerConfig = VariantProps<typeof fieldContainerConfig>

interface IFieldContainerProps extends TFieldContainerConfig {
  className?: string
  children: React.ReactNode
}

export const FieldContainer = ({ size, className, children }: IFieldContainerProps) => {
  return <div className={cn(fieldContainerConfig({ size }), className)}>{children}</div>
}
