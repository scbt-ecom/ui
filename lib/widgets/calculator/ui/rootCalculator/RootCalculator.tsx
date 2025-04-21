import type { FieldValues } from 'react-hook-form'
import {
  CalculatorModal,
  type CalculatorModalProps,
  CheckboxGroup,
  type CheckboxGroupProps,
  RadioGroup,
  type RadioGroupProps,
  SlidersGroup,
  type SlidersGroupProps,
  SwitchGroup,
  type SwitchGroupProps
} from './ui'

export interface RootCalculatorProps<T extends FieldValues> {
  modalConfig?: CalculatorModalProps
  fieldsGroup: {
    slidersGroupConfig: SlidersGroupProps<T>
    radioGroupTabConfig?: RadioGroupProps<T>
    checkboxGroupConfig?: CheckboxGroupProps<T>
    radioGroupConfig?: RadioGroupProps<T>
    radioGroupCardConfig?: RadioGroupProps<T>
    switchGroupConfig?: SwitchGroupProps<T>
  }
}

export const RootCalculator = <T extends FieldValues>({ modalConfig, fieldsGroup }: RootCalculatorProps<T>) => {
  return (
    <div className='flex flex-1 flex-col gap-8'>
      {modalConfig && <CalculatorModal {...modalConfig} />}
      <SlidersGroup {...fieldsGroup?.slidersGroupConfig} />
      {fieldsGroup?.radioGroupTabConfig && <RadioGroup {...fieldsGroup?.radioGroupTabConfig} />}
      {fieldsGroup?.checkboxGroupConfig && <CheckboxGroup {...fieldsGroup?.checkboxGroupConfig} />}
      {fieldsGroup?.radioGroupConfig && <RadioGroup {...fieldsGroup?.radioGroupConfig} />}
      {fieldsGroup?.radioGroupCardConfig && <RadioGroup {...fieldsGroup?.radioGroupCardConfig} />}
      {fieldsGroup?.switchGroupConfig && <SwitchGroup {...fieldsGroup?.switchGroupConfig} />}
    </div>
  )
}
