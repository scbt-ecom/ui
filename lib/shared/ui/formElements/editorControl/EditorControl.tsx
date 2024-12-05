import { type ReactElement } from 'react'
import { Controller, type FieldValues } from 'react-hook-form'
import { type TCommonFieldProps } from '../model/types'
import { Editor } from './ui/Editor'

export type TEditorControlClasses = {
  root?: string
  editor?: string
  wrapper?: string
  message?: string
  label?: string
}

export interface ICommonEditorProps {
  editable?: boolean
  helperText?: string | ReactElement
  label?: string
}

export type IEditorControlProps<T extends FieldValues> = TCommonFieldProps<T> &
  ICommonEditorProps & {
    classes?: TEditorControlClasses
  }

export const EditorControl = <T extends FieldValues>({
  control,
  label,
  helperText,
  editable = true,
  classes,
  ...props
}: IEditorControlProps<T>) => {
  return (
    <Controller
      name={props.name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <Editor
          onChange={onChange}
          value={value ?? ''}
          editable={editable}
          error={error}
          helperText={helperText}
          label={label}
          classes={classes}
          {...props}
        />
      )}
    />
  )
}
