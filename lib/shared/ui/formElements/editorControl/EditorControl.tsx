import { type ReactElement } from 'react'
import { type FieldValues, type Path, useController, type UseControllerProps } from 'react-hook-form'
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
  ICommonEditorProps &
  UseControllerProps<T, Path<T>> & {
    classes?: TEditorControlClasses
  }

export const EditorControl = <T extends FieldValues>({
  control,
  label,
  helperText,
  editable = true,
  classes,
  name,
  shouldUnregister,
  rules,
  disabled,
  defaultValue,
  ...props
}: IEditorControlProps<T>) => {
  const {
    field: { onChange, value },
    fieldState: { error }
  } = useController({
    control,
    name,
    shouldUnregister,
    rules,
    disabled,
    defaultValue
  })

  return (
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
  )
}
