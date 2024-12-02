'use client'

import * as React from 'react'
import { type DropzoneOptions } from 'react-dropzone'
import { type FieldError, type FieldValues, type Path } from 'react-hook-form'
import { MessageView } from '../../ui'
import { defaultDropzoneOptions } from '../model'
import { useUploader } from '../model/hooks/useUploader'
import { type TUploaderClasses } from '../model/types'
import { Files } from './Files'
import { Input } from './Input'
import { cn } from '$/shared/utils'

export interface IUploaderProps<T extends FieldValues> {
  controlledFiles: File[]
  dropzoneOptions: DropzoneOptions
  helperText?: string
  onValueChange: (f: File[]) => void
  disabled?: boolean
  error?: FieldError | undefined
  classes?: TUploaderClasses
  name: Path<T>
}

export const Uploader = React.forwardRef(function InputControl<T extends FieldValues>(
  {
    dropzoneOptions = defaultDropzoneOptions,
    controlledFiles,
    onValueChange,
    helperText,
    disabled,
    error,
    classes,
    name
  }: IUploaderProps<T>,
  ref: React.Ref<HTMLDivElement>
) {
  const { filesStatus, removeFile, dropzoneState } = useUploader({
    dropzoneOptions,
    controlledFiles,
    onValueChange
  })

  return (
    <>
      <div className={cn('relative mb-3 w-[476px]', classes?.wrapperMainContent)}>
        <Input ref={ref} name={name} classes={classes} error={error} disabled={disabled} dropzoneState={dropzoneState} />
        <MessageView
          className={classes?.message}
          intent={error?.message ? 'error' : 'simple'}
          text={error?.message || helperText}
          disabled={disabled}
        />
      </div>
      <Files filesStatus={filesStatus} removeFile={removeFile} controlledFiles={controlledFiles} />
    </>
  )
})
