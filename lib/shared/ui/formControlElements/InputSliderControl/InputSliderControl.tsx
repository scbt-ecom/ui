import * as React from 'react'
import { Controller, type FieldValues } from 'react-hook-form'
import { NumericFormat } from 'react-number-format'
import type { TAdditionalInputClassesWithAttachment, TControlledInputProps } from '../model'
import { FieldAttachment, FieldContainer, FieldWrapper, MessageView } from '../ui'
import { getStepByVariant } from './helpers'
import { useSlider } from './hooks/useSlider'
import { SliderControl } from './ui'
import { type ISliderControl } from './ui/SliderControl'
import { cn } from '$/shared/utils'

export interface InputSliderControlProps<T extends FieldValues> extends TControlledInputProps<T>, ISliderControl {
  classes?: Partial<TAdditionalInputClassesWithAttachment>
  disabled?: boolean
  onInputChange?: (value?: number) => void
}

export const InputSliderControl = <T extends FieldValues>({
  label,
  size = 'full',
  helperText,
  control,
  classes,
  badge,
  icon,
  disabled,
  onInputChange,
  min,
  max,
  variant,
  ...props
}: InputSliderControlProps<T>) => {
  const inputId = React.useId()
  const ref = React.useRef<HTMLInputElement>(null)

  const handleIconClick = () => {
    if (ref.current) {
      ref?.current?.focus()
    }
  }

  const { handleBlur, handleChange, getSuffixText } = useSlider()

  return (
    <Controller
      control={control}
      name={props.name}
      render={({ field: { onChange, value }, fieldState: { error } }) => {
        return (
          <FieldContainer size={size} classes={classes}>
            <FieldWrapper
              fieldId={inputId}
              label={label}
              classes={classes}
              disabled={disabled}
              value={value}
              error={!!error?.message}
            >
              <>
                <NumericFormat
                  aria-invalid={error?.message ? 'true' : 'false'}
                  className={cn(
                    'group/slider desk-title-bold-s h-[56px] w-full rounded-md bg-color-transparent px-4 pt-5 text-color-dark outline-none transition-all',
                    classes?.input
                  )}
                  id={inputId}
                  onBlur={() => {
                    handleBlur(value, min, max, onChange)
                  }}
                  value={value}
                  disabled={disabled}
                  suffix={` ${getSuffixText(value, variant)}`}
                  thousandsGroupStyle='thousand'
                  onValueChange={({ floatValue }) => {
                    handleChange(onChange, floatValue)
                    if (onInputChange) {
                      onInputChange(floatValue)
                    }
                  }}
                  thousandSeparator={' '}
                  allowNegative={false}
                  getInputRef={ref}
                  {...props}
                />
                <SliderControl
                  onValueChange={(inputValue) => onChange(inputValue[0])}
                  value={[value]}
                  min={min}
                  max={max}
                  step={getStepByVariant(value, variant)}
                  variant={variant}
                />

                <div aria-label='edit' onKeyDown={handleIconClick} role='button' tabIndex={0} onClick={handleIconClick}>
                  <FieldAttachment
                    onClickIcon={handleIconClick}
                    onKeyDownIcon={handleIconClick}
                    isSlider
                    badge={badge}
                    icon={icon}
                    error={!!error?.message}
                    classes={classes}
                  />
                </div>
              </>
            </FieldWrapper>

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
  )
}
