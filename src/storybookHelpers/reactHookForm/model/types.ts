import type { FieldValues } from 'react-hook-form'
import { type IInputControlUploaderProps } from '$/shared/ui'
import type {
  ICalendarControlProps,
  ICheckboxControlProps,
  IDadataInputControlProps,
  InputControlMaskProps,
  InputControlProps,
  InputSliderControlProps,
  IRadioControlProps,
  ISelectControlProps,
  ISwitchControlProps,
  ITextareaControlProps
} from '$/shared/ui/formControlElements'

export enum EnumFieldType {
  INPUT = 'input',
  MASK = 'mask',
  DADATA = 'dadata',
  CHECKBOX = 'checkbox',
  RADIO = 'radio',
  SWITCH = 'switch',
  SELECT = 'select',
  TEXTAREA = 'textarea',
  CALENDAR = 'calendar',
  SLIDER = 'slider',
  UPLOADER = 'uploader'
}

type TControlledInput<T extends FieldValues> = Omit<InputControlProps<T>, 'control'> & { fieldType: EnumFieldType.INPUT }
type TControlledInputMask<T extends FieldValues> = Omit<InputControlMaskProps<T>, 'control'> & { fieldType: EnumFieldType.MASK }
type TControlledInputDadata<T extends FieldValues> = Omit<IDadataInputControlProps<T>, 'control'> & {
  fieldType: EnumFieldType.DADATA
}
type TControlledInputCheckbox<T extends FieldValues> = Omit<ICheckboxControlProps<T>, 'control'> & {
  fieldType: EnumFieldType.CHECKBOX
}
type TControlledInputRadio<T extends FieldValues> = Omit<IRadioControlProps<T>, 'control'> & {
  fieldType: EnumFieldType.RADIO
}

type TControlledInputSwitch<T extends FieldValues> = Omit<ISwitchControlProps<T>, 'control'> & {
  fieldType: EnumFieldType.SWITCH
}

type TControlledInputSelect<T extends FieldValues> = Omit<ISelectControlProps<T>, 'control'> & {
  fieldType: EnumFieldType.SELECT
}

type TControlledInputSlider<T extends FieldValues> = Omit<InputSliderControlProps<T>, 'control'> & {
  fieldType: EnumFieldType.SLIDER
}

type TControlledInputTextarea<T extends FieldValues> = Omit<ITextareaControlProps<T>, 'control'> & {
  fieldType: EnumFieldType.TEXTAREA
}

type TControlledInputCalendar<T extends FieldValues> = Omit<ICalendarControlProps<T>, 'control'> & {
  fieldType: EnumFieldType.CALENDAR
}

type TControlledInputUploader<T extends FieldValues> = Omit<IInputControlUploaderProps<T>, 'control'> & {
  fieldType: EnumFieldType.UPLOADER
}

export type TStorybookFieldConfig<T extends FieldValues> =
  | TControlledInputMask<T>
  | TControlledInput<T>
  | TControlledInputDadata<T>
  | TControlledInputCheckbox<T>
  | TControlledInputRadio<T>
  | TControlledInputSwitch<T>
  | TControlledInputSelect<T>
  | TControlledInputSlider<T>
  | TControlledInputTextarea<T>
  | TControlledInputCalendar<T>
  | TControlledInputUploader<T>
