import { type ReactElement } from 'react'
import { type FieldValues, type Path, useController, type UseControllerProps } from 'react-hook-form'
import { Editor } from './ui/Editor'

export type EditorControlClasses = {
  root?: string
  editor?: string
  wrapper?: string
  message?: string
  label?: string
}

export type EditorControlProps<
  TFieldValues extends FieldValues,
  TName extends Path<TFieldValues> = Path<TFieldValues>
> = UseControllerProps<TFieldValues, TName> & {
  editable?: boolean
  classes?: EditorControlClasses
  helperText?: string | ReactElement
  label?: string
  limit?: number
  /**
   * Сделать текстовый редактор маленьким
   */
  small?: boolean
}

export const EditorControl = <T extends FieldValues>({
  control,
  label,
  helperText,
  editable = true,
  classes,
  defaultValue,
  disabled,
  rules,
  shouldUnregister,
  name,
  ...props
}: EditorControlProps<T>) => {
  const {
    field,
    fieldState: { error }
  } = useController({
    control,
    defaultValue,
    disabled,
    rules,
    shouldUnregister,
    name
  })

  return (
    <Editor {...field} editable={editable} error={error} helperText={helperText} label={label} classes={classes} {...props} />
  )
}
