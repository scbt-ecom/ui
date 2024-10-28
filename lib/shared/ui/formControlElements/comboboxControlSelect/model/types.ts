import { type TFieldAttachmentClasses, type TFieldContainerClasses, type TFieldWrapperClasses } from '../../model'

export interface TComboboxControlReactSelectClasses
  extends TComboboxControlReactSelectCustomClasses,
    Partial<TFieldAttachmentClasses>,
    Partial<TFieldContainerClasses>,
    Partial<TFieldWrapperClasses> {}

export type TComboboxControlReactSelectCustomClasses = TComboboxControlReactSelectClassesGeneral &
  TComboboxOptionCustomClasses &
  TComboboxOptionCustomClasses &
  TComboboxDropdownIndicatorClasses &
  TComboboxMultiValueRemoveClasses

export type TComboboxControlReactSelectClassesGeneral = {
  message?: string
  selectWrapper?: string
  dropdownIndicator?: string
  indicatorsContainer?: string
  input?: string
  valueContainer?: string
  control?: string
  container?: string
  menuList?: string
  menu?: string
  group?: string
  menuPortal?: string
  option?: string
  noOptionsMessage?: string
  singleValue?: string
  multiValue?: string
  multiValueLabel?: string
  multiValueRemove?: string
  placeholder?: string
}

export type TComboboxOptionCustomClasses = {
  optionWrapper?: string
  optionSpanWrapper?: string
  optionIcon?: string
}

export type TComboboxMultiValueRemoveClasses = {
  removeIcon?: string
}

export type TComboboxDropdownIndicatorClasses = {
  icon?: string
}
