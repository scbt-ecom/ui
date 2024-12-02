'use client'

import * as React from 'react'
import { FieldLabel } from './ui'
import { cn } from '$/shared/utils'

export type TFieldWrapperClasses = {
  fieldWrapperRoot?: string
  fieldLabel?: string
}

export interface IFieldWrapperProps<V> {
  children: React.ReactNode
  label: string
  disabled?: boolean
  fieldId: string
  value: V
  error?: boolean
  classes?: TFieldWrapperClasses
}

export const FieldWrapper = <V,>({ children, error, disabled, classes, label, value, fieldId }: IFieldWrapperProps<V>) => {
  return (
    <div
      className={cn(
        'relative flex items-center justify-between rounded-sm border border-solid border-transparent bg-color-blue-grey-100 transition-colors hover:bg-color-blue-grey-200 focus:outline-blue-grey-800 active:bg-color-blue-grey-100 group-focus-within:border-blue-grey-800',
        { '!border-negative': error },
        { '!bg-color-blue-grey-100': disabled },
        classes?.fieldWrapperRoot
      )}
    >
      <FieldLabel label={label} value={value} fieldId={fieldId} classes={classes} disabled={disabled} />
      {children}
    </div>
  )
}
