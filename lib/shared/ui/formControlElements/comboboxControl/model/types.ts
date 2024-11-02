import type { TFieldWrapperClasses } from '../../model'

export type TComboboxControlClasses = Partial<TComboboxControlClassesCommon> &
  Partial<TFieldWrapperClasses> &
  Partial<TComboboxChildClasses> & {}

export type TComboboxControlClassesCommon = {
  message: string
  selectWrapper: string
  dropdownIndicator: string
  indicatorsContainer: string
  input: string
  valueContainer: string
  control: string
  container: string
  menuList: string
  menu: string
  group: string
  menuPortal: string
  option: string
  noOptionsMessage: string
  singleValue: string
  multiValue: string
  multiValueLabel: string
  multiValueRemove: string
  placeholder: string
}

export type TComboboxChildClasses = TMultiValueRemoveClasses | TComboboxOptionClasses | TDropdownIndicatorClasses

export type TMultiValueRemoveClasses = {
  multiRemoveIcon: string
}
export type TComboboxOptionClasses = {
  optionCustom: string
  checkboxIsMulti: string
  checkboxIsMultiIcon: string
}
export type TDropdownIndicatorClasses = {
  indicatorIcon: string
}
