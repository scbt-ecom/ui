import { type FieldValues, type UseFormReturn } from 'react-hook-form'
import {
  EnumFieldType,
  type TControlledDadataFio,
  type TControlledInput,
  type TControlledInputCheckbox,
  type TControlledInputEditor,
  type TControlledInputMask,
  type TControlledInputRadio,
  type TControlledInputSlider,
  type TControlledInputSwitch,
  type TControlledInputTextarea,
  type TStorybookFieldConfig
} from './types'
import {
  CheckboxControl,
  DadataFio,
  EditorControl,
  InputControl,
  InputControlMask,
  InputOtpControl,
  RadioControl,
  SliderControl,
  SwitchControl,
  TextareaControl
} from '$/shared/ui'

export const renderFields = <T extends FieldValues>(fieldConfig: TStorybookFieldConfig<T>, formMethods: UseFormReturn<T>) => {
  const { control } = formMethods
  const { fieldType, ...props } = fieldConfig

  switch (fieldType) {
    case EnumFieldType.INPUT:
      return <InputControl control={control} {...(props as TControlledInput<T>)} />
    case EnumFieldType.MASK:
      return <InputControlMask control={control} {...(props as TControlledInputMask<T>)} />
    case EnumFieldType.CHECKBOX:
      return <CheckboxControl control={control} {...(props as TControlledInputCheckbox<T>)} />
    case EnumFieldType.RADIO:
      return <RadioControl control={control} {...(props as TControlledInputRadio<T>)} />
    case EnumFieldType.SWITCH:
      return <SwitchControl control={control} {...(props as TControlledInputSwitch<T>)} />
    case EnumFieldType.TEXTAREA:
      return <TextareaControl control={control} {...(props as TControlledInputTextarea<T>)} />
    case EnumFieldType.SLIDER:
      return <SliderControl control={control} {...(props as TControlledInputSlider<T>)} />
    case EnumFieldType.EDITOR:
      return <EditorControl control={control} {...(props as TControlledInputEditor<T>)} />
    case EnumFieldType.OTP:
      return <InputOtpControl control={control} {...(props as TControlledInputEditor<T>)} />
    case EnumFieldType.FIO:
      return <DadataFio control={control} {...(props as TControlledDadataFio<T>)} />
    default:
      return null
  }
}
