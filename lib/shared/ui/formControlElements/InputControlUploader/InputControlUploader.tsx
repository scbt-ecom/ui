'use client'

import { type DropzoneOptions } from 'react-dropzone'
import { Controller, type FieldValues } from 'react-hook-form'
import { type TControlledInputProps } from '../model'
import { defaultDropzoneOptions } from './model'
import { type TClassesUploader } from './model/types'
import { Uploader } from './ui'

export interface IInputControlUploaderProps<T extends FieldValues> extends TControlledInputProps<T> {
  dropzoneOptions?: DropzoneOptions
  disabled?: boolean
  classes?: Partial<TClassesUploader>
}

export const InputControlUploader = <T extends FieldValues>({
  control,
  disabled,
  helperText,
  classes,
  dropzoneOptions = defaultDropzoneOptions,
  ...props
}: IInputControlUploaderProps<T>) => {
  return (
    <Controller
      control={control}
      name={props.name}
      render={({ field: { onChange, ref, value: controlledFiles }, fieldState: { error } }) => {
        return (
          <Uploader
            error={error}
            helperText={helperText}
            disabled={disabled}
            classes={classes}
            ref={ref}
            controlledFiles={controlledFiles}
            onValueChange={(file) => {
              onChange(file)
            }}
            dropzoneOptions={dropzoneOptions}
            {...props}
          />
        )
      }}
    />
  )
}
