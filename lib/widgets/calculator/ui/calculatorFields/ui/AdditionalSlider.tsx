import { type FieldValues, useFormContext } from 'react-hook-form'
import { Controlled, Uncontrolled } from '../../../../../shared/ui'
import { TypeGuards } from '../../../../../shared/utils'
import { useAdditionalSlider } from '../hooks'
import type { AdditionalSliderGroupConfig, SlidersGroupProps } from './FieldsGroup'

interface AdditionalSliderProps<T extends FieldValues> {
  additionalSliderGroupConfig: AdditionalSliderGroupConfig<T>
  slidersGroupConfig: SlidersGroupProps<T>
}

export const AdditionalSlider = <T extends FieldValues>({
  slidersGroupConfig,
  additionalSliderGroupConfig
}: AdditionalSliderProps<T>) => {
  const { control } = useFormContext<T>()

  const { sliderVisible, additionalSliderMax, onCheckedChange } = useAdditionalSlider({
    slidersGroupConfig: slidersGroupConfig,
    additionalSliderGroupConfig: additionalSliderGroupConfig
  })

  if (TypeGuards.isNil(additionalSliderGroupConfig?.args) || !additionalSliderGroupConfig?.args) return

  return (
    <div className='flex flex-col gap-4'>
      <div className='inline-flex items-center gap-2'>
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
