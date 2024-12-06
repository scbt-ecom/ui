import type { DefaultValues, FieldValues } from 'react-hook-form'
import type { Schema, TypeOf } from 'zod'
import type {
  ICheckboxControlProps,
  IEditorControlProps,
  IInputControlProps,
  IInputOtpControlProps,
  InputControlMaskProps,
  IRadioControlProps,
  ISliderControlProps,
  ISwitchControlProps,
  ITextareaControlProps,
  IUploaderControlProps
} from '$/shared/ui/formElements'

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
  SLIDER = 'slider',
  UPLOADER = 'uploader',
  EDITOR = 'editor',
  OTP = 'otp'
}

export type TControlledInput<T extends FieldValues> = Omit<IInputControlProps<T>, 'control'> & { fieldType: EnumFieldType.INPUT }
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

export type TControlledInputSlider<T extends FieldValues> = Omit<ISliderControlProps<T>, 'control'> & {
  fieldType: EnumFieldType.SLIDER
}

export type TControlledInputTextarea<T extends FieldValues> = Omit<ITextareaControlProps<T>, 'control'> & {
  fieldType: EnumFieldType.TEXTAREA
}

export type TControlledInputUploader<T extends FieldValues> = Omit<IUploaderControlProps<T>, 'control'> & {
  fieldType: EnumFieldType.UPLOADER
}

export type TControlledInputEditor<T extends FieldValues> = Omit<IEditorControlProps<T>, 'control'> & {
  fieldType: EnumFieldType.EDITOR
}

export type TControlledOtpInput<T extends FieldValues> = Omit<IInputOtpControlProps<T>, 'control'> & {
  fieldType: EnumFieldType.OTP
}

export type TStorybookFieldConfig<T extends FieldValues> =
  | TControlledInputMask<T>
  | TControlledInput<T>
  | TControlledInputCheckbox<T>
  | TControlledInputRadio<T>
  | TControlledInputSwitch<T>
  | TControlledInputSlider<T>
  | TControlledInputTextarea<T>
  | TControlledInputUploader<T>
  | TControlledInputEditor<T>
  | TControlledOtpInput<T>
