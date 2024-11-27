import type { DefaultValues, FieldValues } from 'react-hook-form'
import type { Schema, TypeOf } from 'zod'
import { type IInputControlUploaderProps } from '$/shared/ui'
import type {
  ICalendarControlProps,
  ICheckboxControlProps,
  IEditorControlProps,
  InputControlMaskProps,
  InputControlProps,
  InputSliderControlProps,
  IRadioControlProps,
  ISwitchControlProps,
  ITextareaControlProps
} from '$/shared/ui/formControlElements'

export type TStorybookFieldsMapperProps<T extends FieldValues> = {
  fields: TStorybookFieldConfig<T>[]
  defaultValues?: DefaultValues<TypeOf<Schema>>
  btnSubmit?: string
  btnReset?: string
}

export const enum EnumFieldType {
  INPUT = 'input',
  MASK = 'mask',
  CHECKBOX = 'checkbox',
  RADIO = 'radio',
  SWITCH = 'switch',
  TEXTAREA = 'textarea',
  CALENDAR = 'calendar',
  SLIDER = 'slider',
  UPLOADER = 'uploader',
  EDITOR = 'editor'
}

export type TControlledInput<T extends FieldValues> = Omit<InputControlProps<T>, 'control'> & { fieldType: EnumFieldType.INPUT }
export type TControlledInputMask<T extends FieldValues> = Omit<InputControlMaskProps<T>, 'control'> & {
  fieldType: EnumFieldType.MASK
}

export type TControlledInputCheckbox<T extends FieldValues> = Omit<ICheckboxControlProps<T>, 'control'> & {
  fieldType: EnumFieldType.CHECKBOX
}
export type TControlledInputRadio<T extends FieldValues> = Omit<IRadioControlProps<T>, 'control'> & {
  fieldType: EnumFieldType.RADIO
}

export type TControlledInputSwitch<T extends FieldValues> = Omit<ISwitchControlProps<T>, 'control'> & {
  fieldType: EnumFieldType.SWITCH
}

export type TControlledInputSlider<T extends FieldValues> = Omit<InputSliderControlProps<T>, 'control'> & {
  fieldType: EnumFieldType.SLIDER
}

export type TControlledInputTextarea<T extends FieldValues> = Omit<ITextareaControlProps<T>, 'control'> & {
  fieldType: EnumFieldType.TEXTAREA
}

export type TControlledInputCalendar<T extends FieldValues> = Omit<ICalendarControlProps<T>, 'control' | 'setValue' | 'watch'> & {
  fieldType: EnumFieldType.CALENDAR
}

export type TControlledInputUploader<T extends FieldValues> = Omit<IInputControlUploaderProps<T>, 'control'> & {
  fieldType: EnumFieldType.UPLOADER
}

export type TControlledInputEditor<T extends FieldValues> = Omit<IEditorControlProps<T>, 'control'> & {
  fieldType: EnumFieldType.EDITOR
}

export type TStorybookFieldConfig<T extends FieldValues> =
  | TControlledInputMask<T>
  | TControlledInput<T>
  | TControlledInputCheckbox<T>
  | TControlledInputRadio<T>
  | TControlledInputSwitch<T>
  | TControlledInputSlider<T>
  | TControlledInputTextarea<T>
  | TControlledInputCalendar<T>
  | TControlledInputUploader<T>
  | TControlledInputEditor<T>
