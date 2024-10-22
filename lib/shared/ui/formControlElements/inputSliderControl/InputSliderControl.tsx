'use client'

import * as React from 'react'
import { Controller, type FieldValues } from 'react-hook-form'
import { NumericFormat } from 'react-number-format'
import type { TAdditionalInputClassesWithAttachment, TControlledInputProps } from '../model'
import { FieldAttachment, FieldContainer, FieldWrapper, MessageView } from '../ui'
import { formatNumber, getMinMaxTextSlider, getStepByVariant } from './model/helpers'
import { type TSliderVariants } from './model/types'
import { useSlider } from './model/useSlider'
import { SliderControl } from './ui/SliderControl'
import { cn } from '$/shared/utils'

export interface IInputSliderCommonProps {
  min: number
  max: number
  variant: TSliderVariants
  step?: number
}

export interface InputSliderControlProps<T extends FieldValues> extends TControlledInputProps<T>, IInputSliderCommonProps {
  classes?: Partial<TAdditionalInputClassesWithAttachment> & {
    spanLeft?: string
    spanRight?: string
  }
  disabled?: boolean
  onInputChange?: (value?: number) => void
  leftText?: string
  rightText?: string
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
        const [start, end] = getMinMaxTextSlider(variant, min, max)
        return (
          <div className='flex flex-col gap-1'>
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
            <div className='flex justify-between'>
              <span
                className={cn('desk-body-regular-m text-color-tetriary', classes?.spanLeft)}
              >{`${formatNumber(min)} ${start}`}</span>
              <span
                className={cn('desk-body-regular-m text-color-tetriary', classes?.spanRight)}
              >{`${formatNumber(max)} ${end}`}</span>
            </div>
          </div>
        )
      }}
    />
  )
}
