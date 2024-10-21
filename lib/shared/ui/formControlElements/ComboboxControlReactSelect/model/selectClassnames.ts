import { type MenuProps } from 'react-select'
import { cn } from '$/hybrid'

export const selectClassNames = <State>(isMulti: boolean) => ({
  dropdownIndicator: () => '!hidden',
  indicatorsContainer: () => '!hidden',
  input: () => 'desk-body-regular-l !m-0 z-10 rounded-md bg-color-transparent text-color-dark outline-none transition-all',
  valueContainer: () => 'desk-body-regular-l !p-0',
  control: () =>
    cn(
      'pl-4 !min-h-[56px] !border-0 !bg-color-blue-grey-100 transition-colors hover:bg-color-blue-grey-200 focus:outline-blue-grey-800 active:bg-color-blue-grey-100 group-focus-within:border-blue-grey-800 !shadow-[0px_0px_0px_0px_rgba(0,0,0,0)]',
      { 'pt-5': !isMulti }
    ),
  container: () => 'w-full',
  menuList: () => {
    return 'scrollHidden !customScrollbar-y !max-h-[246px] overflow-x-hidden p-2'
  },
  menu: (state: MenuProps<State>) => {
    return cn(
      'absolute top-14 z-10 mt-2 flex w-full flex-col rounded-md border border-solid border-blue-grey-700 bg-color-white p-2 transition-all empty:invisible  !shadow-[0px_0px_0px_0px_rgba(0,0,0,0)]',
      { 'scale-100 opacity-100': state.selectProps.menuIsOpen },
      { 'scale-95 opacity-0': !state.selectProps.menuIsOpen }
    )
  },
  group: () => 'bg-color-positive z-100',
  menuPortal: () => '',
  option: () =>
    'flex !pl-9 cursor-pointer bg-color-initial text-color-initial items-center justify-between gap-2 active:!bg-color-blue-grey-200 rounded-sm px-3 py-3 hover:!bg-color-blue-grey-200 data-[disabled]:pointer-events-none data-[disabled]:!bg-color-blue-grey-100 data-[selected=true]:!bg-color-negative data-[disabled]:!text-color-disabled focus:!bg-color-blue-grey-200  active:!bg-color-blue-grey-200 hover:text-color-primary-hover',
  noOptionsMessage: () => 'desk-body-regular-m text-color-tetriary',
  singleValue: () => '!m-0',
  multiValue: () => '!bg-color-blue-grey-300 px-[8px] py-[5px]',
  multiValueLabel: () => '[&&]:desk-body-regular-l !p-0 pl-[6px] !text-color-secondary',
  multiValueRemove: () => 'hover:!bg-color-transparent'
})
