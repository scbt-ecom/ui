import { useId } from 'react'
import { type Control, Controller, type FieldValues, type Path } from 'react-hook-form'
import Select from 'react-select'
import { type TControlledInputProps } from '../model'
import { FieldAttachment, FieldContainer, MessageView } from '../ui'
import { Label } from '../ui/Label'
import { selectClassNames } from './model/selectClassnames'
import { type TComboboxControlReactSelectPropsClasses } from './model/types'
import { Option } from './ui/CustomOption'
import { MultiValueRemove } from './ui/MultiValueRemove'
import { cn } from '$/shared/utils'

type TSelectVariant = 'primary' | 'secondary'

export interface SelectOption<ValueType> {
  value: ValueType
  label: string
}

interface ComboboxControlReactSelectProps<T extends FieldValues, ValueType> extends TControlledInputProps<T> {
  name: Path<T>
  control: Control<T>
  options: SelectOption<ValueType>[]
  label: string
  size?: 'sm' | 'md' | 'lg' | 'full'
  helperText?: string
  marker?: boolean
  variant?: TSelectVariant
  isClearable?: boolean
  defaultValue?: ValueType
  noOptionsMessage?: string
  classes?: Partial<TComboboxControlReactSelectPropsClasses>
  disabled?: boolean
  isMulti?: boolean
  placeholder?: string
  onClickIcon?: (...args: unknown[]) => unknown
  onKeyDownIcon?: (event: React.KeyboardEvent) => unknown
  isSearchable?: boolean
}

export const ComboboxControlReactSelect = <T extends FieldValues, ValueType>({
  options,
  control,
  defaultValue,
  variant = 'primary',
  isClearable = false,
  label,
  disabled,
  placeholder = 'Выберите несколько значений',
  helperText,
  noOptionsMessage = 'Нет результатов поиска',
  size = 'full',
  classes,
  badge,
  icon,
  isMulti = false,
  onClickIcon,
  onKeyDownIcon,
  swapPosition,
  isSearchable,
  ...props
}: ComboboxControlReactSelectProps<T, ValueType>) => {
  const selectId = useId()
  return (
    <div>
      <Controller
        control={control}
        name={props.name}
        render={({ field: { onChange, ref, name, value }, fieldState: { error } }) => {
          return (
            <FieldContainer classes={classes} size={size}>
              <div
                className={cn(
                  'relative flex rounded-sm border border-solid border-transparent bg-color-blue-grey-100 transition-colors hover:bg-color-blue-grey-200 focus:outline-blue-grey-800 active:bg-color-blue-grey-100 group-focus-within:border-blue-grey-800',
                  { '!border-negative': error },
                  { '!bg-color-blue-grey-100': disabled }
                )}
              >
                {!isMulti && <Label classes={classes} fieldId={selectId} label={label} value={value} />}
                <Select
                  inputId={selectId}
                  placeholder={isMulti ? placeholder : ''}
                  classNamePrefix={variant}
                  instanceId={name}
                  hideSelectedOptions={false}
                  closeMenuOnSelect={!isMulti}
                  components={{ Option, MultiValueRemove }}
                  classNames={selectClassNames<ValueType>(isMulti, classes)}
                  isSearchable={isSearchable}
                  ref={ref}
                  styles={{
                    option: (baseStyles, state) => ({
                      ...baseStyles,
                      backgroundColor: state.isSelected ? 'bg-color-transparent' : 'bg-color-transparent',
                      color: state.isSelected ? 'text-color-dark' : 'text-color-dark'
                    })
                  }}
                  isMulti={isMulti}
                  defaultValue={defaultValue}
                  isClearable={isClearable}
                  noOptionsMessage={() => noOptionsMessage}
                  // @ts-expect-error options
                  options={options}
                  // @ts-expect-error value
                  value={options.find((option) => option.value === value)}
                  onChange={(option) => {
                    if (isMulti) {
                      // @ts-expect-error value
                      onChange(option?.map((c) => c.value))
                    } else {
                      // @ts-expect-error value
                      onChange(option?.value)
                    }
                  }}
                  {...props}
                />
                <FieldAttachment
                  onClickIcon={onClickIcon}
                  onKeyDownIcon={onKeyDownIcon}
                  badge={badge}
                  icon={icon}
                  error={!!error?.message}
                  classes={classes}
                  swapPosition={swapPosition}
                />
              </div>
              <MessageView
                className={cn(classes?.message)}
                intent={error?.message ? 'error' : 'simple'}
                text={error?.message || helperText}
                disabled={disabled}
              />
            </FieldContainer>
          )
        }}
      />
    </div>
  )
}
