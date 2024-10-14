'use client'

import * as React from 'react'
import type { TFieldWrapperClasses } from '../model'
import { cn } from '$/shared/utils'

interface IFieldWrapperProps<V> {
  children: React.ReactElement
  label: string
  fieldId: string
  value: V
  error?: boolean
  classes?: Partial<TFieldWrapperClasses>
  disabled?: boolean
  isTextarea?: boolean
}

export const FieldWrapper = <V,>({
  children,
  error,
  disabled,
  classes,
  fieldId,
  label,
  value,
  isTextarea = false
}: IFieldWrapperProps<V>) => {
  return (
    <div
      className={cn(
        'relative flex items-center justify-between rounded-sm border border-solid border-transparent bg-color-blue-grey-100 transition-colors hover:bg-color-blue-grey-200 focus:outline-blue-grey-800 active:bg-color-blue-grey-100 group-focus-within:border-blue-grey-800',
        { '!border-negative': error },
        { '!bg-color-blue-grey-100': disabled },
        classes?.field
      )}
    >
      <label
        htmlFor={fieldId}
        className={cn(
          'desk-body-regular-l pointer-events-none absolute left-4 top-2/4 -translate-y-1/2 text-color-tetriary transition-all duration-15',
          { 'desk-body-regular-s top-2 translate-y-0 bg-color-transparent': value && !isTextarea },
          {
            'group-focus-within:desk-body-regular-s group-focus-within:top-2 group-focus-within:translate-y-0 group-focus-within:bg-color-transparent':
              !isTextarea
          },
          { 'desk-body-regular-s top-2 translate-y-0': isTextarea },
          classes?.label
        )}
      >
        {label}
      </label>
      {children}
    </div>
  )
}
