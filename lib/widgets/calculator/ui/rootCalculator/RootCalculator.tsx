import type { FieldValues } from 'react-hook-form'
import {
  CalculatorModal,
  type CalculatorModalProps,
  type CheckboxGroupProps,
  type RadioGroupProps,
  type SelectGroupProps,
  type SlidersGroupProps,
  type SwitchGroupProps
} from './ui'
import { FieldsGroup } from './ui'

export interface RootCalculatorProps<T extends FieldValues> {
  modalConfig?: CalculatorModalProps
  fieldsGroup: {
    selectGroupConfig?: SelectGroupProps<T>
    slidersGroupConfig?: SlidersGroupProps<T>
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
      {fieldsGroup?.selectGroupConfig && <FieldsGroup {...fieldsGroup?.selectGroupConfig} />}
      {fieldsGroup?.slidersGroupConfig && <FieldsGroup {...fieldsGroup?.slidersGroupConfig} />}
      {fieldsGroup?.radioGroupTabConfig && <FieldsGroup {...fieldsGroup?.radioGroupTabConfig} />}
      {fieldsGroup?.checkboxGroupConfig && (
        <div className='flex flex-col gap-4'>
          <FieldsGroup {...fieldsGroup?.checkboxGroupConfig} />
        </div>
      )}
      {fieldsGroup?.radioGroupConfig && <FieldsGroup {...fieldsGroup?.radioGroupConfig} />}
      {fieldsGroup?.radioGroupCardConfig && <FieldsGroup {...fieldsGroup?.radioGroupCardConfig} />}
      {fieldsGroup?.switchGroupConfig && (
        <div className='flex flex-col gap-4'>
          <FieldsGroup {...fieldsGroup?.switchGroupConfig} />
        </div>
      )}
    </div>
  )
}
