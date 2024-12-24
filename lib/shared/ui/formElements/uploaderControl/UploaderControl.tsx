'use client'

import { type DropzoneOptions } from 'react-dropzone'
import { Controller, type FieldValues } from 'react-hook-form'
import { type TCommonFieldProps } from '../model/types'
import { defaultDropzoneOptions } from './model'
import { type TUploaderClasses } from './model/types'
import { Uploader } from './ui'

export interface IUploaderControlProps<T extends FieldValues> extends TCommonFieldProps<T> {
  dropzoneOptions?: DropzoneOptions
  disabled?: boolean
  classes?: TUploaderClasses
}

// TODO: переписать как бог велел
export const UploaderControl = <T extends FieldValues>({
  control,
  disabled,
  helperText,
  classes,
  dropzoneOptions = defaultDropzoneOptions,
  ...props
}: IUploaderControlProps<T>) => {
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
