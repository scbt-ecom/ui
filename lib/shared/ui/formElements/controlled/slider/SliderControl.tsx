import { type Control, type FieldValues, type Path, useController, type UseControllerProps } from 'react-hook-form'
import type { SliderBaseClasses, SliderGatewayProps } from '../../uncontrolled/slider/model/types'
import { Uncontrolled } from '$/shared/ui'
import { cn } from '$/shared/utils'

type SliderControlClasses = SliderBaseClasses & {
  container?: string
}

export type SliderControlProps<
  TFieldValues extends FieldValues,
  TName extends Path<TFieldValues> = Path<TFieldValues>
> = UseControllerProps<TFieldValues, TName> &
  SliderGatewayProps & {
    control: Control<TFieldValues>
    classes?: SliderControlClasses
  }

export const SliderControl = <TFieldValues extends FieldValues, TName extends Path<TFieldValues>>(
  props: SliderControlProps<TFieldValues, TName>
) => {
  const { control, name, defaultValue, disabled, rules, shouldUnregister, classes, ...restProps } = props

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
      <Uncontrolled.SliderBase {...restProps} {...field} classes={restClasses} invalid={invalid} />
    </div>
  )
}
