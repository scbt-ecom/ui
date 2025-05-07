import { type Control, type FieldValues, type Path, useController, type UseControllerProps } from 'react-hook-form'
import type { ComponentType, SliderBaseClasses, SliderGatewayProps } from '../../uncontrolled/slider/model/types'
import { Uncontrolled } from '$/shared/ui'
import { cn } from '$/shared/utils'

type SliderControlClasses = SliderBaseClasses & {
  container?: string
}

export type SliderControlProps<
  TFieldValues extends FieldValues,
  TName extends Path<TFieldValues>,
  Type extends ComponentType
> = UseControllerProps<TFieldValues, TName> & {
  control: Control<TFieldValues>
  classes?: SliderControlClasses
  sliderProps: SliderGatewayProps<Type>
}

export const SliderControl = <TFieldValues extends FieldValues, TName extends Path<TFieldValues>, Type extends ComponentType>(
  props: SliderControlProps<TFieldValues, TName, Type>
) => {
  const { control, name, defaultValue, disabled, rules, shouldUnregister, classes, sliderProps } = props

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
      <Uncontrolled.SliderBase {...sliderProps} {...field} classes={restClasses} invalid={invalid} />
    </div>
  )
}
