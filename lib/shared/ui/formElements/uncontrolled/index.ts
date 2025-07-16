import { InputBase } from './input'
export type { InputBaseProps } from './input'
import { MaskInput } from './maskInput'
export type { MaskInputProps } from './maskInput'
import { CheckboxBase } from './checkbox'
export type { CheckboxBaseProps, CheckedState } from './checkbox'
import { DayPickerBase } from './dayPicker'
export type { DayPickerProps } from './dayPicker'
import { SwitchBase } from './switch'
export type { SwitchBaseProps } from './switch'
import { AutocompleteBase } from './autocomplete'
import { SliderBase } from './slider'
export type { AutocompleteBaseProps, AutocompleteItemOption } from './autocomplete'
import { RadioGroupBase } from './radio'
export type { RadioGroupBaseProps, RadioOption } from './radio'
import { TextareaBase } from './textarea'
import { UploaderBase } from './uploader'
export type { TextareaBaseProps } from './textarea'
import { InputOtpBase } from './inputOtp'
export type { InputOtpBaseProps } from './inputOtp'
import { Combobox } from './combobox'
export type { ComboboxProps, ComboboxItemOption } from './combobox'

/**
 * @example
 * ```ts
 * It's ok
 * import { InputBase } from '@scbt-ecom/ui'
 *
 * Not ok (tree shaking doesn't work)
 * import { Uncontrolled } from '@scbt-ecom/ui'
 * ```
 * @deprecated use Select instead
 */
export const Uncontrolled = {
  InputBase,
  SliderBase,
  AutocompleteBase,
  MaskInput,
  CheckboxBase,
  DayPickerBase,
  SwitchBase,
  RadioGroupBase,
  TextareaBase,
  InputOtpBase,
  UploaderBase,
  Combobox
}
