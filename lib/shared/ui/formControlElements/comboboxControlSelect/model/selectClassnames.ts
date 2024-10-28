import { type MenuProps, type OptionProps } from 'react-select'
import { type TComboboxControlReactSelectClasses } from './types'
import { cn } from '$/shared/utils'

export const selectClassNames = <State>(
  isMulti: boolean,
  disabled?: boolean,
  classes?: Partial<TComboboxControlReactSelectClasses>
) => ({
  dropdownIndicator: () => cn('absolute top-1/2 right-4 !p-0 -translate-y-1/2', classes?.dropdownIndicator),
  indicatorsContainer: () => cn('', classes?.indicatorsContainer),
  input: () =>
    cn(
      'desk-body-regular-l !p-0 !m-0 z-10 rounded-md bg-color-transparent text-color-dark outline-none transition-all',
      classes?.input
    ),
  valueContainer: () => cn('desk-body-regular-l gap-2 !p-0', classes?.valueContainer),
  control: () =>
    cn(
      'p-4 !min-h-[56px] !bg-color-transparent !border-transparent transition-colors !shadow-[0px_0px_0px_0px_rgba(0,0,0,0)]',
      {
        'p-0 pt-5 pl-4': !isMulti
      },
      classes?.control
    ),
  container: () => cn('w-full !static', classes?.container),
  menuList: () => {
    return cn('scrollHidden !customScrollbar-y !max-h-[246px] flex flex-col gap-[2px] overflow-x-hidden p-2', classes?.menuList)
  },
  menu: (state: MenuProps<State>) => {
    return cn(
      'absolute !p-0 top-14 transition-all z-10 mt-2 flex w-full flex-col rounded-md border border-solid border-blue-grey-700 bg-color-white p-2 transition-all empty:invisible  !shadow-[0px_0px_0px_0px_rgba(0,0,0,0)]',
      { 'scale-100 visible opacity-100': state.selectProps.menuIsOpen },
      { 'scale-95 invisible opacity-0': !state.selectProps.menuIsOpen },
      classes?.menu
    )
  },
  group: () => cn('bg-color-positive z-100', classes?.group),
  option: (state: OptionProps<State>) =>
    cn(
      'flex !pl-10 cursor-pointer bg-color-initial text-color-initial items-center justify-between gap-2 active:!bg-color-blue-grey-200 rounded-sm px-3 py-3 hover:!bg-color-blue-grey-200 data-[disabled]:pointer-events-none data-[disabled]:!bg-color-blue-grey-100 data-[selected=true]:!bg-color-negative data-[disabled]:!text-color-disabled focus:!bg-color-blue-grey-200  active:!bg-color-blue-grey-200 hover:text-color-primary-hover',
      { '!pl-2': !isMulti },
      { '!bg-color-primary-tr-focus !text-color-primary-hover': state.isSelected },
      { '!bg-color-primary-tr-focus !text-color-primary-hover': state.isFocused },
      classes?.option
    ),
  noOptionsMessage: () => cn('!desk-body-regular-m !text-color-tetriary', classes?.noOptionsMessage),
  singleValue: () => cn('!m-0', classes?.singleValue),
  multiValue: () => cn('!bg-color-blue-grey-300 truncate max-w-[300px] !rounded-sm px-[8px] !m-0 py-[5px]', classes?.multiValue),
  multiValueLabel: () => cn('[&&]:desk-body-regular-l !p-0 pl-[6px] !text-color-secondary', classes?.multiValueLabel),
  multiValueRemove: () => cn('hover:!bg-color-transparent', classes?.multiValueRemove),
  placeholder: () =>
    cn('!text-icon-blue-grey-600 !desk-body-regular-l', { '!text-color-disabled': disabled }, classes?.placeholder),
  indicatorSeparator: () => cn('!hidden')
})
