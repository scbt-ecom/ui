import { memo } from 'react'
import { type Control, type FieldValues, type Path, useController, type UseControllerProps } from 'react-hook-form'
import { type SliderBaseProps } from '../../uncontrolled/slider/SliderBase'
import { Uncontrolled } from '$/shared/ui'
import { cn } from '$/shared/utils'

type SliderControlProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends Path<TFieldValues> = Path<TFieldValues>
> = Omit<SliderBaseProps, 'value' | 'onChange'> &
  UseControllerProps<TFieldValues, TName> & {
    control: Control<TFieldValues>
  }

export const InnerComponent = ({
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
      <Uncontrolled.SliderBase classes={restClasses} {...props} {...field} invalid={invalid} />
    </div>
  )
}

export const SliderControl = memo(InnerComponent) as typeof InnerComponent
