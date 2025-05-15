import { useEffect, useState } from 'react'
import { type FieldValues, type Path, type PathValue, useFormContext } from 'react-hook-form'
import { TypeGuards } from '../../../../../shared/utils'
import { type AdditionalSliderGroupConfig, type SlidersGroupProps } from '../ui'

interface UseAdditionalSlider<T extends FieldValues> {
  additionalSliderGroupConfig?: AdditionalSliderGroupConfig<T>
  slidersGroupConfig?: SlidersGroupProps<T>
}

const ADDITIONAL_MONEY_MINIMUM = 20_000

export const useAdditionalSlider = <T extends FieldValues>({
  slidersGroupConfig,
  additionalSliderGroupConfig
}: UseAdditionalSlider<T>) => {
  const [sliderVisible, setSliderVisible] = useState<boolean>(false)

  const { watch, setValue } = useFormContext<T>()

  const sliderSumGroup = slidersGroupConfig?.fields.find(({ args }) => args.name === 'sum')
  const { args } = sliderSumGroup || {}
  const { max: sumMax, name: sumName, defaultValue: sumDefaultValue } = args || {}
  const sumValue = watch(sumName as Path<T>)

  const { min: additionalSliderMin, name: additionalSliderName } = additionalSliderGroupConfig?.args ?? {}
  const additionalSliderValue = watch(additionalSliderName as Path<T>)
  const additionalSliderMax = Number(sumMax ?? 0) - (sumValue ?? sumDefaultValue)

  useEffect(() => {
    if (additionalSliderValue > additionalSliderMax) {
      setValue(additionalSliderName as Path<T>, additionalSliderMax as PathValue<T, Path<T>>)
    }
  }, [additionalSliderMax, additionalSliderValue, setValue, sumValue])

  useEffect(() => {
    if (Number(sumMax) === sumValue) {
      setSliderVisible(false)
    }
  }, [setSliderVisible, sumMax, sumValue])

  const onCheckedChange = () => {
    setSliderVisible((prevValue) => !prevValue)

    if (Number(sumMax) === sumValue) {
      setValue((sumName ?? '') as Path<T>, (sumValue - ADDITIONAL_MONEY_MINIMUM) as PathValue<T, Path<T>>)
      setValue(additionalSliderName as Path<T>, additionalSliderMin as PathValue<T, Path<T>>)
    }
  }

  return {
    sliderVisible,
    setSliderVisible,
    sumMax,
    sumName,
    sumDefaultValue,
    sumValue,
    additionalSliderMax,
    onCheckedChange,
    sliderSumExist: !TypeGuards.isObjectEmpty(sliderSumGroup?.args),
    sliderSumCorrectType: sliderSumGroup?.args.componentType === 'algorithmic' || sliderSumGroup?.args.componentType === 'step'
  }
}
