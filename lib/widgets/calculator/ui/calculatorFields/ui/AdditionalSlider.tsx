import { type FieldValues, useFormContext } from 'react-hook-form'
import { useAdditionalSlider } from '../hooks'
import type { AdditionalSliderGroupConfig, SlidersGroupProps } from './FieldsGroup'
import { Controlled, Uncontrolled } from '$/shared/ui'
import { cn, TypeGuards } from '$/shared/utils'

export type AdditionalSliderClasses = {
  wrapper?: string
  block?: string
  //TODO: add reexport to classes for form elements (checkbox, switch, input, etc.)
  // slider: SliderBaseClasses
  // switch?: SwitchBaseClasses
}

interface AdditionalSliderProps<T extends FieldValues> {
  additionalSliderGroupConfig: AdditionalSliderGroupConfig<T>
  slidersGroupConfig: SlidersGroupProps<T>
  classes?: AdditionalSliderClasses
}

export const AdditionalSlider = <T extends FieldValues>({
  slidersGroupConfig,
  additionalSliderGroupConfig,
  classes
}: AdditionalSliderProps<T>) => {
  const { control } = useFormContext<T>()

  const { sliderVisible, additionalSliderMax, onCheckedChange } = useAdditionalSlider({
    slidersGroupConfig: slidersGroupConfig,
    additionalSliderGroupConfig: additionalSliderGroupConfig
  })

  if (TypeGuards.isNil(additionalSliderGroupConfig?.args) || !additionalSliderGroupConfig?.args) return null

  return (
    <div className={cn('flex flex-col gap-4', classes?.wrapper)}>
      <div className={cn('inline-flex items-center gap-2', classes?.block)}>
        <Uncontrolled.SwitchBase checked={sliderVisible} onCheckedChange={onCheckedChange} />
        <p className='desk-body-regular-l'>Хочу получить деньги дополнительно</p>
      </div>
      {sliderVisible && (
        <Controlled.SliderControl
          {...additionalSliderGroupConfig.args}
          control={control}
          componentType='algorithmic'
          suffix='currency'
          defaultValue={additionalSliderGroupConfig?.args.min}
          max={additionalSliderMax}
        />
      )}
    </div>
  )
}
