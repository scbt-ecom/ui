import { useId } from 'react'
import { type Control, Controller, type FieldValues, type Path } from 'react-hook-form'
import Select from 'react-select'
import { FieldContainer, MessageView } from '../ui'
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

interface ComboboxControlReactSelectProps<T extends FieldValues, ValueType> {
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
  classes?: TComboboxControlReactSelectPropsClasses
  disabled?: boolean
  isMulti?: boolean
  placeholder?: string
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
  isMulti = true,
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
            <FieldContainer size={size}>
              <>
                {!isMulti && <Label fieldId={selectId} label={label} value={value} />}
                <Select
                  inputId={selectId}
                  placeholder={placeholder}
                  classNamePrefix={variant}
                  instanceId={name}
                  hideSelectedOptions={false}
                  closeMenuOnSelect={false}
                  components={{ Option, MultiValueRemove }}
                  classNames={selectClassNames<ValueType>(isMulti)}
                  ref={ref}
                  styles={{
                    option: (baseStyles, state) => ({
                      ...baseStyles,
                      backgroundColor: state.isSelected ? 'bg-color-negative' : 'bg-color-white',
                      color: state.isSelected ? 'text-color-dark' : 'text-color-dark'
                    })
                  }}
                  isMulti={isMulti}
                  // @ts-expect-error need read docs
                  options={options}
                  defaultValue={defaultValue}
                  isClearable={isClearable}
                  noOptionsMessage={() => noOptionsMessage}
                  onChange={(selectedOption) => {
                    // if (isMulti) {
                    onChange(selectedOption)
                    // } else {
                    //   onChange((selectedOption as SelectOption<ValueType>).value ?? '')
                    // }
                  }}
                  value={value}
                  {...props}
                />
              </>
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
