import { type FieldValues } from 'react-hook-form'
import { useAdditionalSlider } from './hooks'
import {
  AdditionalSlider,
  type AdditionalSliderGroupConfig,
  CalculatorModal,
  type CalculatorModalClasses,
  type CalculatorModalProps,
  type CheckboxGroupProps,
  type RadioGroupProps,
  type SelectGroupProps,
  type SlidersGroupProps,
  type SwitchGroupProps
} from './ui'
import { FieldsGroup } from './ui'
import { cn, TypeGuards } from '$/shared/utils'

export type CalculatorFieldsClasses = {
  rootFieldsWrapper?: string
  selectFieldsWrapper?: string
  checkboxFieldsWrapper?: string
  switchFieldsWrapper?: string
  modalClasses?: CalculatorModalClasses
}

export interface CalculatorFieldsProps<T extends FieldValues> {
  classes?: CalculatorFieldsClasses
  modalConfig?: CalculatorModalProps
  fieldsGroup: {
    selectGroupConfig?: SelectGroupProps<T>
    slidersGroupConfig?: SlidersGroupProps<T>
    radioGroupTabConfig?: RadioGroupProps<T>
    checkboxGroupConfig?: CheckboxGroupProps<T>
    radioGroupConfig?: RadioGroupProps<T>
    radioGroupCardConfig?: RadioGroupProps<T>
    switchGroupConfig?: SwitchGroupProps<T>
    additionalSliderGroupConfig?: AdditionalSliderGroupConfig<T> & { fields: any[] }
  }
}

//TODO: Переписать лаконично убрать дубляж
// type BaseFieldsGroup<Fields> = {
//   fields: Fields
// }
// const hasFields = <T extends BaseFieldsGroup<T>>(groupConfig: T) => groupConfig && !TypeGuards.isArrayEmpty(groupConfig?.fields)

export const CalculatorFields = <T extends FieldValues>({ modalConfig, fieldsGroup, classes }: CalculatorFieldsProps<T>) => {
  const { sliderSumExist, sliderSumCorrectType } = useAdditionalSlider({
    slidersGroupConfig: fieldsGroup.slidersGroupConfig,
    additionalSliderGroupConfig: fieldsGroup.additionalSliderGroupConfig
  })

  return (
    <div className={cn('flex flex-1 flex-col gap-6 mobile:w-full desktop:gap-8', classes?.rootFieldsWrapper)}>
      {modalConfig?.triggerText && modalConfig?.contentVariant && (
        <CalculatorModal classes={classes?.modalClasses} {...modalConfig} />
      )}
      {fieldsGroup?.selectGroupConfig && !TypeGuards.isArrayEmpty(fieldsGroup?.selectGroupConfig?.fields) && (
        <div className={cn('flex flex-col gap-4', classes?.selectFieldsWrapper)}>
          <FieldsGroup {...fieldsGroup?.selectGroupConfig} />
        </div>
      )}
      {fieldsGroup?.slidersGroupConfig && !TypeGuards.isArrayEmpty(fieldsGroup?.slidersGroupConfig?.fields) && (
        <FieldsGroup {...fieldsGroup?.slidersGroupConfig} />
      )}
      {fieldsGroup?.radioGroupTabConfig && !TypeGuards.isArrayEmpty(fieldsGroup?.radioGroupTabConfig?.fields) && (
        <FieldsGroup {...fieldsGroup?.radioGroupTabConfig} />
      )}
      {fieldsGroup?.checkboxGroupConfig && !TypeGuards.isArrayEmpty(fieldsGroup?.checkboxGroupConfig?.fields) && (
        <div className={cn('flex flex-col gap-4', classes?.checkboxFieldsWrapper)}>
          <FieldsGroup {...fieldsGroup?.checkboxGroupConfig} />
        </div>
      )}
      {fieldsGroup?.radioGroupConfig && !TypeGuards.isArrayEmpty(fieldsGroup?.radioGroupConfig?.fields) && (
        <FieldsGroup {...fieldsGroup?.radioGroupConfig} />
      )}
      {fieldsGroup?.radioGroupCardConfig && !TypeGuards.isArrayEmpty(fieldsGroup?.radioGroupCardConfig?.fields) && (
        <FieldsGroup {...fieldsGroup?.radioGroupCardConfig} />
      )}
      {fieldsGroup?.switchGroupConfig && !TypeGuards.isArrayEmpty(fieldsGroup?.switchGroupConfig?.fields) && (
        <div className={cn('flex flex-col gap-4', classes?.switchFieldsWrapper)}>
          <FieldsGroup {...fieldsGroup?.switchGroupConfig} />
        </div>
      )}
      {fieldsGroup.additionalSliderGroupConfig?.args.enabled &&
        fieldsGroup.slidersGroupConfig &&
        fieldsGroup.additionalSliderGroupConfig &&
        sliderSumExist &&
        sliderSumCorrectType && (
          <AdditionalSlider
            slidersGroupConfig={fieldsGroup.slidersGroupConfig}
            additionalSliderGroupConfig={fieldsGroup.additionalSliderGroupConfig}
          />
        )}
    </div>
  )
}
