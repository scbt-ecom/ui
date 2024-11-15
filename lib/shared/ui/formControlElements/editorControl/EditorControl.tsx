import { type ReactElement } from 'react'
import { Controller, type FieldValues } from 'react-hook-form'
import { type TFieldControlledProps } from '../model'
import { Editor } from './ui/Editor'

export type TEditorControlClasses = {
  root: string
  editor: string
  wrapper: string
  message: string
}

export interface ICommonEditorProps {
  editable?: boolean
  helperText?: string | ReactElement
  label?: string | ReactElement
}

export type IEditorControlProps<T extends FieldValues> = TFieldControlledProps<T> &
  ICommonEditorProps & {
    classes?: Partial<TEditorControlClasses>
  }

export const EditorControl = <T extends FieldValues>({
  control,
  name,
  label,
  helperText,
  editable = true,
  classes
}: IEditorControlProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <Editor
          onChange={onChange}
          value={value}
          editable={editable}
          error={error}
          helperText={helperText}
          label={label}
          classes={classes}
        />
      )}
    />
  )
}
