export type TComboboxControlClasses = TComboboxControlClassesCommon & TComboboxChildClasses & {}

export type TComboboxControlClassesCommon = {
  messageCombobox?: string
  selectWrapper?: string
  dropdownIndicator?: string
  indicatorsContainer?: string
  inputCombobox?: string
  valueContainer?: string
  controlCombobox?: string
  containerCombobox?: string
  menuList?: string
  menuCombobox?: string
  groupCombobox?: string
  menuPortal?: string
  optionCombobox?: string
  noOptionsMessage?: string
  singleValue?: string
  multiValue?: string
  multiValueLabel?: string
  multiValueRemove?: string
  placeholderCombobox?: string
  indicatorSeparator?: string
  fieldLabel?: string
  message?: string
}

export type TComboboxChildClasses = TMultiValueRemoveClasses | TComboboxOptionClasses | TDropdownIndicatorClasses

export type TMultiValueRemoveClasses = {
  multiRemoveIcon?: string
}

export type TComboboxOptionClasses = {
  optionCustom?: string
  checkboxIsMulti?: string
  checkboxIsMultiIcon?: string
}

export type TDropdownIndicatorClasses = {
  indicatorIcon?: string
}
