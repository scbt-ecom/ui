import * as React from 'react'
import { Controller, type FieldValues } from 'react-hook-form'
import { NumericFormat } from 'react-number-format'
import { type TControlledInputProps, type TInputCommonProps } from '../model'
import { FieldContainer, FieldWrapper, MessageView } from '../ui'
import { currencyOptionsList, getDelimiterForCurrency } from './model/helpers'
import { useInputCurrency } from './model/useInputCurrency'
import { MenuTrigger, OptionList } from './ui'
import { useClickOutside } from '$/shared/hooks'
import { cn } from '$/shared/utils'

export type TCurrencyVariant = 'euro' | 'dollars' | 'rubles' | 'yuan' | 'dirhams'
export interface ICurrencyOption {
  ruName: string
  engName: string
  currency: TCurrencyVariant
}

export interface InputCurrencyControlProps<T extends FieldValues> extends TControlledInputProps<T>, TInputCommonProps {
  classes?: any // TODO ADD CLASSES AND CONNECT WITH BACKEND API TO GET CURRENCY
  defaultCurrency?: TCurrencyVariant
}

export const InputCurrencyControl = <T extends FieldValues>({
  label,
  size = 'full',
  helperText,
  control,
  classes,
  disabled,
  defaultCurrency = 'rubles',
  ...props
}: InputCurrencyControlProps<T>) => {
  const inputId = React.useId()
  const containerRef = React.useRef<HTMLDivElement | null>(null)
  const { menuIsOpen, currentCurrencyOption, onSelectOption, onToggleMenu, onCloseMenu } = useInputCurrency(defaultCurrency)

  useClickOutside(containerRef, onCloseMenu)

  return (
    <Controller
      control={control}
      name={props.name}
      render={({ field: { onChange, ref, value }, fieldState: { error } }) => (
        <FieldContainer size={size} classes={classes}>
          <FieldWrapper
            fieldId={inputId}
            label={label}
            classes={classes}
            disabled={disabled}
            value={value}
            error={!!error?.message}
          >
            <div ref={containerRef} className='relative flex w-full items-center'>
              <NumericFormat
                thousandsGroupStyle='wan'
                thousandSeparator=' '
                prefix={getDelimiterForCurrency(currentCurrencyOption.currency)}
                getInputRef={ref}
                allowNegative={false}
                id={inputId}
                aria-invalid={error?.message ? 'true' : 'false'}
                className={cn(
                  'desk-body-regular-l h-[56px] w-full rounded-md bg-color-transparent px-4 pt-5 text-color-dark outline-none transition-all',
                  classes?.input
                )}
                disabled={disabled}
                value={value?.toString()}
                onChange={onChange}
                {...props}
              />

              <MenuTrigger onToggleMenu={onToggleMenu} currentCurrencyOption={currentCurrencyOption} />
              <OptionList menuIsOpen={menuIsOpen} optionsList={currencyOptionsList} onSelectOption={onSelectOption} />
            </div>
          </FieldWrapper>

          <MessageView
            className={cn(classes?.message)}
            intent={error?.message ? 'error' : 'simple'}
            text={error?.message || helperText}
            disabled={disabled}
          />
        </FieldContainer>
      )}
    />
  )
}
