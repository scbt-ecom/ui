'use client'

import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import type { TFieldContainerClasses } from '../model/classes-types'
import { cn } from '$/shared/utils'

const fieldContainerConfig = cva('relative flex flex-col group', {
  variants: {
    intent: {
      clear: '!w-full min-w-[140px]',
      filled: ''
    },
    size: {
      sm: 'w-[360px]',
      md: 'w-[520px]',
      lg: 'w-[720px]',
      full: 'w-full'
    }
  },
  defaultVariants: {
    size: 'full',
    intent: 'filled'
  }
})

export type TFieldContainerConfig = VariantProps<typeof fieldContainerConfig>

interface IFieldContainerProps extends TFieldContainerConfig {
  classes?: Partial<TFieldContainerClasses>
  children: React.ReactNode
  intent?: 'clear' | 'filled' | null
}

export const FieldContainer = ({ size, intent = 'filled', classes, children }: IFieldContainerProps) => {
  return <div className={cn(fieldContainerConfig({ size, intent }), classes?.container)}>{children}</div>
}
