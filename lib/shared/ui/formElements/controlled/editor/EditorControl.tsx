import { type ReactElement } from 'react'
import { type FieldValues, type Path, useController, type UseControllerProps } from 'react-hook-form'
import { Editor } from './ui/Editor'
import { EditorModal } from './ui/EditorModal'

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
  label: string
  limit?: number
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
  small,
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

  if (small) {
    return (
      <EditorModal
        error={error}
        field={field}
        editable={editable}
        helperText={helperText}
        label={label}
        classes={classes}
        {...props}
      />
    )
  }
  return (
    <Editor {...field} editable={editable} error={error} helperText={helperText} label={label} classes={classes} {...props} />
  )
}
