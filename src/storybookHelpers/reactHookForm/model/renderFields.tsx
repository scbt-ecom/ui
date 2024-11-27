import { type FieldValues, type UseFormReturn } from 'react-hook-form'
import {
  EnumFieldType,
  type TControlledInput,
  type TControlledInputCalendar,
  type TControlledInputCheckbox,
  type TControlledInputEditor,
  type TControlledInputMask,
  type TControlledInputRadio,
  type TControlledInputSlider,
  type TControlledInputSwitch,
  type TControlledInputTextarea,
  type TControlledInputUploader,
  type TStorybookFieldConfig
} from './types'
import {
  CalendarControl,
  CheckboxControl,
  EditorControl,
  InputControl,
  InputControlMask,
  InputControlUploader,
  InputSliderControl,
  RadioControl,
  SwitchControl,
  TextareaControl
} from '$/shared/ui'

export const renderFields = <T extends FieldValues>(fieldConfig: TStorybookFieldConfig<T>, formMethods: UseFormReturn<T>) => {
  const { control, setValue, watch } = formMethods

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
    case EnumFieldType.CALENDAR:
      return <CalendarControl control={control} setValue={setValue} watch={watch} {...(props as TControlledInputCalendar<T>)} />
    case EnumFieldType.SLIDER:
      return <InputSliderControl control={control} {...(props as TControlledInputSlider<T>)} />
    case EnumFieldType.UPLOADER:
      return <InputControlUploader control={control} {...(props as TControlledInputUploader<T>)} />
    case EnumFieldType.EDITOR:
      return <EditorControl control={control} {...(props as TControlledInputEditor<T>)} />
    default:
      return null
  }
}
