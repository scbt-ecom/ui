import * as React from 'react'
import { Controller, type FieldValues } from 'react-hook-form'
import { NumericFormat } from 'react-number-format'
import { type TCommonFieldProps } from '../model/types'
import { FieldContainer, FieldWrapper, type IFieldAttachmentProps, MessageView, type TFieldContainerConfig } from '../ui'
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

export interface InputCurrencyControlProps<T extends FieldValues>
  extends TCommonFieldProps<T>,
    Omit<IFieldAttachmentProps, 'invalid' | 'isTouched'> {
  classes?: any // TODO ADD CLASSES AND CONNECT WITH BACKEND API TO GET CURRENCY
  defaultCurrency?: TCurrencyVariant
  disabled?: boolean
  size?: TFieldContainerConfig['size']
}

// TODO: переписать как бог велел
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
      render={({ field: { ref, value, ...field }, fieldState: { error } }) => (
        <FieldContainer size={size} className={classes?.container}>
          <FieldWrapper
            label={label}
            value={value}
            error={Boolean(error?.message)}
            fieldId={inputId}
            disabled={disabled}
            classes={classes}
          >
            <div ref={containerRef} className='relative flex w-full items-center'>
              <NumericFormat
                id={inputId}
                aria-invalid={error?.message ? 'true' : 'false'}
                thousandsGroupStyle='wan'
                thousandSeparator=' '
                prefix={getDelimiterForCurrency(currentCurrencyOption.currency)}
                getInputRef={ref}
                allowNegative={false}
                disabled={disabled}
                value={value}
                className={cn(
                  'desk-body-regular-l h-[56px] w-full rounded-md bg-color-transparent px-4 pt-5 text-color-dark outline-none transition-all',
                  classes?.input
                )}
                {...field}
                {...props}
              />

              <MenuTrigger onToggleMenu={onToggleMenu} currentCurrencyOption={currentCurrencyOption} />
              <OptionList menuIsOpen={menuIsOpen} optionsList={currencyOptionsList} onSelectOption={onSelectOption} />
            </div>
          </FieldWrapper>

          <MessageView
            className={classes?.message}
            intent={error?.message ? 'error' : 'simple'}
            text={error?.message || helperText}
            disabled={disabled}
          />
        </FieldContainer>
      )}
    />
  )
}
