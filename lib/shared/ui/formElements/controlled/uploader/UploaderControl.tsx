import { type Control, type FieldValues, type Path, useController, type UseControllerProps } from 'react-hook-form'
import { type UploaderBaseProps } from '../../uncontrolled/uploader'
import { Uncontrolled } from '$/shared/ui'
import { MessageView } from '$/shared/ui/formElements/ui'
import { cn } from '$/shared/utils'

type UploaderControlClasses = UploaderBaseProps & {
  message?: string
  container?: string
}

export type UploaderControlProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends Path<TFieldValues> = Path<TFieldValues>
> = UseControllerProps<TFieldValues, TName> &
  UploaderBaseProps & {
    control: Control<TFieldValues>
    classes?: UploaderControlClasses
  }

export const UploaderControl = ({
  control,
  name,
  defaultValue,
  rules,
  shouldUnregister,
  classes,
  helperText,
  disabled,
  ...props
}: UploaderControlProps) => {
  const { field, fieldState } = useController({
    control,
    name,
    defaultValue,
    rules,
    shouldUnregister
  })

  const { error, invalid } = fieldState

  const { message, container, ...restClasses } = classes || {}

  return (
    <div className={cn('w-full', container)}>
      <Uncontrolled.UploaderBase {...props} {...field} invalid={invalid} disabled={disabled} classes={restClasses} />
      <MessageView
        text={error?.message || helperText}
        className={message}
        intent={error ? 'error' : 'simple'}
        disabled={disabled}
      />
    </div>
  )
}
