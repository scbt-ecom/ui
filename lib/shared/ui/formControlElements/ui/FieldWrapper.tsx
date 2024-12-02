'use client'

import * as React from 'react'
import type { TFieldWrapperClasses } from '../model'
import { Label } from './Label'
import { cn } from '$/shared/utils'

interface IFieldWrapperProps<V> {
  children: React.ReactElement
  label: string | React.ReactElement
  fieldId: string
  value: V
  error?: boolean
  classes?: Partial<TFieldWrapperClasses>
  disabled?: boolean
  isTextarea?: boolean
}

export const FieldWrapper = <V,>({ children, error, disabled, classes, ...props }: IFieldWrapperProps<V>) => {
  return (
    <div
      className={cn(
        'relative flex items-center justify-between rounded-sm border border-solid border-transparent bg-color-blue-grey-100 transition-colors hover:bg-color-blue-grey-200 focus:outline-blue-grey-800 active:bg-color-blue-grey-100 group-focus-within:border-blue-grey-800',
        { '!border-negative': error },
        { '!bg-color-blue-grey-100': disabled },
        classes?.field
      )}
    >
      <Label classes={classes} {...props} />
      {children}
    </div>
  )
}
