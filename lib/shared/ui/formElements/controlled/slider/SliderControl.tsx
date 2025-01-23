import { type Control, type FieldValues, type Path, useController, type UseControllerProps } from 'react-hook-form'
import { type SliderBaseClasses, type SliderBaseProps } from '../../uncontrolled/slider/SliderBase'
import { Uncontrolled } from '$/shared/ui'
import { cn } from '$/shared/utils'

type SliderControlClasses = SliderBaseClasses & {
  container?: string
}

type SliderControlProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends Path<TFieldValues> = Path<TFieldValues>
> = Omit<SliderBaseProps, 'value' | 'onChange' | 'classes'> &
  UseControllerProps<TFieldValues, TName> & {
    control: Control<TFieldValues>
    classes?: SliderControlClasses
  }

export const SliderControl = ({
  control,
  name,
  defaultValue,
  disabled,
  rules,
  shouldUnregister,
  classes,
  ...props
}: SliderControlProps) => {
  const { field, fieldState } = useController({
    control,
    name,
    defaultValue,
    disabled,
    rules,
    shouldUnregister
  })

  const { invalid } = fieldState

  const { container, ...restClasses } = classes || {}
  return (
    <div className={cn('w-full', container)}>
      <Uncontrolled.SliderBase {...props} {...field} classes={restClasses} invalid={invalid} />
    </div>
  )
}
