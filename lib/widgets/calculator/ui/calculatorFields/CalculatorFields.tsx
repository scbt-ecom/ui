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
import { cn } from '$/shared/utils'

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

export const CalculatorFields = <T extends FieldValues>({ modalConfig, fieldsGroup, classes }: CalculatorFieldsProps<T>) => {
  const { sliderSumExist, sliderSumCorrectType } = useAdditionalSlider({
    slidersGroupConfig: fieldsGroup.slidersGroupConfig,
    additionalSliderGroupConfig: fieldsGroup.additionalSliderGroupConfig
  })

  return (
    <div className={cn('flex flex-1 flex-col gap-8', classes?.rootFieldsWrapper)}>
      {modalConfig?.triggerText && modalConfig?.contentVariant && (
        <CalculatorModal classes={classes?.modalClasses} {...modalConfig} />
      )}
      {fieldsGroup?.selectGroupConfig && (
        <div className={cn('flex flex-col gap-4', classes?.selectFieldsWrapper)}>
          <FieldsGroup {...fieldsGroup?.selectGroupConfig} />
        </div>
      )}
      {fieldsGroup?.slidersGroupConfig && <FieldsGroup {...fieldsGroup?.slidersGroupConfig} />}
      {fieldsGroup?.radioGroupTabConfig && <FieldsGroup {...fieldsGroup?.radioGroupTabConfig} />}
      {fieldsGroup?.checkboxGroupConfig && (
        <div className={cn('flex flex-col gap-4', classes?.checkboxFieldsWrapper)}>
          <FieldsGroup {...fieldsGroup?.checkboxGroupConfig} />
        </div>
      )}
      {fieldsGroup?.radioGroupConfig && <FieldsGroup {...fieldsGroup?.radioGroupConfig} />}
      {fieldsGroup?.radioGroupCardConfig && <FieldsGroup {...fieldsGroup?.radioGroupCardConfig} />}
      {fieldsGroup?.switchGroupConfig && (
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
