import { AutocompleteControl } from './autocomplete'
export { AutocompleteControl } from './autocomplete'
export type { AutocompleteControlProps } from './autocomplete'
import { CheckboxControl } from './checkbox'
export type { CheckboxControlProps } from './checkbox'
import { DadataAddress, DadataAuto, DadataCountry, DadataFio, DadataOrganization } from './dadata'
export { DadataAddress, DadataAuto, DadataCountry, DadataFio, DadataOrganization } from './dadata'
export type { DadataFioProps, DadataCountryProps, DadataOrganizationProps, DadataAutoProps, DadataAddressProps } from './dadata'
import { DayPickerControl } from './dayPickerControl'
export { DayPickerControl } from './dayPickerControl'
export type { DayPickerControlProps } from './dayPickerControl'
import { EditorControl } from './editor'
export { EditorControl } from './editor'
export type { EditorControlProps, EditorControlClasses } from './editor'
import { InputControl, MaskInputControl } from './input'
export { InputControl, MaskInputControl } from './input'
export type { InputControlProps, MaskInputControlProps } from './input'
import { InputCurrencyControl } from './inputCurrency'
export { InputCurrencyControl } from './inputCurrency'
export type { InputCurrencyControlProps, ICurrencyOption, TCurrencyVariant } from './inputCurrency'
import { InputOtpControl } from './inputOtp'
export { InputOtpControl } from './inputOtp'
export type { InputOtpControlProps } from './inputOtp'
import { RadioGroupCardControl, RadioGroupControl, RadioGroupTabControl } from './radio'
export { RadioGroupCardControl, RadioGroupControl, RadioGroupTabControl } from './radio'
export type { RadioGroupControlProps } from './radio'
import { SelectControl } from './select'
export { SelectControl } from './select'
export type { SelectControlProps } from './select'
import { SliderControl } from './slider'
export { SliderControl } from './slider'
export type { SliderControlProps } from './slider'
import { SwitchControl } from './switch'
export { SwitchControl } from './switch'
export type { SwitchControlProps } from './switch'
import { TextareaControl } from './textarea'
export { TextareaControl } from './textarea'
export type { TextareaControlProps } from './textarea'
import { UploaderControl } from './uploader'
export { UploaderControl } from './uploader'
export type { UploaderControlProps } from './uploader'

/**
 * @example
 * ```ts
 * It's ok
 * import { UploaderControl } from '@scbt-ecom/ui'
 *
 * Not ok (tree shaking doesn't work)
 * import { Controlled } from '@scbt-ecom/ui'
 * ```
 * @deprecated use ComponentControl instead
 */
export const Controlled = {
  InputControl,
  MaskInputControl,
  DayPickerControl,
  CheckboxControl,
  SelectControl,
  SwitchControl,
  RadioGroupControl,
  RadioGroupTabControl,
  RadioGroupCardControl,
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
