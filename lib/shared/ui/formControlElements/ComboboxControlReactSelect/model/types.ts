import { type TFieldAttachmentClasses, type TFieldContainerClasses, type TFieldWrapperClasses } from '../../model'

export interface TComboboxControlReactSelectPropsClasses
  extends Partial<TFieldAttachmentClasses>,
    Partial<TFieldContainerClasses>,
    Partial<TFieldWrapperClasses> {
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
}
