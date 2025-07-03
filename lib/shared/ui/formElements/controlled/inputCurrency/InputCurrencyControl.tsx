import * as React from 'react'
import { type ReactElement } from 'react'
import { type FieldValues, type Path, useController, type UseControllerProps } from 'react-hook-form'
import { NumericFormat } from 'react-number-format'
import { currencyOptionsList, getDelimiterForCurrency } from './model/helpers'
import { useInputCurrency } from './model/useInputCurrency'
import { MenuTrigger, OptionList } from './ui'
import { useClickOutside } from '$/shared/hooks'
import { InputBase, type InputBaseProps } from '$/shared/ui'
import { MessageView } from '$/shared/ui/formElements/ui'
import { cn } from '$/shared/utils'

export type TCurrencyVariant = 'euro' | 'dollars' | 'rubles' | 'yuan' | 'dirhams'
export interface ICurrencyOption {
  ruName: string
  engName: string
  currency: TCurrencyVariant
}

type ExternalHandlers = {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void
  onFocus?: (event: React.FocusEvent<HTMLDivElement>) => void
  onBlur?: (event: React.FocusEvent<HTMLDivElement>) => void
}

export type InputCurrencyControlProps<
  TFieldValues extends FieldValues,
  TName extends Path<TFieldValues> = Path<TFieldValues>
> = Omit<InputBaseProps, 'externalHandlers' | 'onChange' | 'value' | 'defaultValue' | 'type'> &
  UseControllerProps<TFieldValues, TName> & {
    classes?: any // TODO ADD CLASSES AND CONNECT WITH BACKEND API TO GET CURRENCY
    defaultCurrency?: TCurrencyVariant
    disabled?: boolean
    label: string
    helperText?: string | ReactElement
    externalHandlers?: ExternalHandlers
  }

export const InputCurrencyControl = <T extends FieldValues>({
  defaultCurrency = 'rubles',
  label,
  helperText,
  control,
  classes,
  disabled,
  name,
  defaultValue,
  rules,
  attachmentProps,
  shouldUnregister,
  externalHandlers,
  ...props
}: InputCurrencyControlProps<T>) => {
  const inputId = React.useId()
  const containerRef = React.useRef<HTMLDivElement | null>(null)
  const { menuIsOpen, currentCurrencyOption, onSelectOption, onToggleMenu, onCloseMenu } = useInputCurrency(defaultCurrency)
  useClickOutside(containerRef, onCloseMenu)

  const { field, fieldState } = useController({ control, name, defaultValue, disabled, rules, shouldUnregister })

  const { error, invalid } = fieldState

  return (
    <div ref={containerRef} className={cn('relative flex w-full flex-col', classes?.container)}>
      <InputBase
        label={label}
        value={field.value}
        invalid={invalid}
        attachmentProps={attachmentProps}
        onBlur={(e) => {
          if (props?.onBlur) props?.onBlur(e)
          if (externalHandlers?.onBlur) externalHandlers.onBlur(e)
        }}
        onClick={externalHandlers?.onClick}
        onFocus={externalHandlers?.onBlur}
        renderValues={() => (
          <div className='flex w-full justify-between'>
            <NumericFormat
              {...field}
              {...props}
              id={inputId}
              aria-invalid={error?.message ? 'true' : 'false'}
              thousandsGroupStyle='wan'
              thousandSeparator=' '
              prefix={getDelimiterForCurrency(currentCurrencyOption.currency)}
              getInputRef={field.ref}
              allowNegative={false}
              disabled={disabled}
              className={cn(
                'desk-body-regular-l w-full bg-color-transparent text-color-dark outline-none transition-all',
                classes?.input
              )}
            />
            <MenuTrigger onToggleMenu={onToggleMenu} currentCurrencyOption={currentCurrencyOption} />
            <OptionList menuIsOpen={menuIsOpen} optionsList={currencyOptionsList} onSelectOption={onSelectOption} />
          </div>
        )}
      />

      <MessageView
        className={classes?.message}
        intent={error?.message ? 'error' : 'simple'}
        text={error?.message || helperText}
        disabled={disabled}
      />
    </div>
  )
}
