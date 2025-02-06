import { AutocompleteControl } from './autocomplete'
export type { AutocompleteControlProps } from './autocomplete'
import { CheckboxControl } from './checkbox'
export type { CheckboxControlProps } from './checkbox'
import { DadataAddress, DadataAuto, DadataCountry, DadataFio, DadataOrganization } from './dadata'
export type { DadataFioProps, DadataCountryProps, DadataOrganizationProps, DadataAutoProps, DadataAddressProps } from './dadata'
import { DayPickerControl } from './dayPickerControl'
export type { DayPickerControlProps } from './dayPickerControl'
import { EditorControl } from './editor'
export type { EditorControlProps, EditorControlClasses } from './editor'
import { InputControl, MaskInputControl } from './input'
export type { InputControlProps, MaskInputControlProps } from './input'
import { InputCurrencyControl } from './inputCurrency'
export type { InputCurrencyControlProps, ICurrencyOption, TCurrencyVariant } from './inputCurrency'
import { InputOtpControl } from './inputOtp'
export type { InputOtpControlProps } from './inputOtp'
import { RadioGroupControl } from './radio'
export type { RadioGroupControlProps } from './radio'
import { SelectControl } from './select'
export type { SelectControlProps } from './select'
import { SliderControl } from './slider'
export type { SliderControlProps } from './slider'
import { SwitchControl } from './switch'
export type { SwitchControlProps } from './switch'
import { TextareaControl } from './textarea'
export type { TextareaControlProps } from './textarea'
import { UploaderControl } from './uploader'
export type { UploaderControlProps } from './uploader'

export const Controlled = {
  InputControl,
  MaskInputControl,
  DayPickerControl,
  CheckboxControl,
  SelectControl,
  SwitchControl,
  RadioGroupControl,
  AutocompleteControl,
  DadataFio,
  DadataAddress,
  DadataCountry,
  DadataAuto,
  DadataOrganization,
  SliderControl,
  TextareaControl,
  UploaderControl,
  InputOtpControl,
  EditorControl,
  InputCurrencyControl
}
