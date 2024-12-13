'use client'

import * as React from 'react'
import { Controller, type FieldValues } from 'react-hook-form'
import { NumericFormat } from 'react-number-format'
import { type TCommonFieldProps } from '../model/types'
import {
  FieldAttachment,
  FieldContainer,
  FieldWrapper,
  type IFieldAttachmentProps,
  MessageView,
  type TFieldAttachmentClasses,
  type TFieldContainerConfig,
  type TFieldWrapperClasses
} from '../ui'
import { type TSliderVariants } from './model/types'
import { useSlider } from './model/useSlider'
import { Slider, type TSliderClasses } from './ui'
import { Icon } from '$/shared/ui'
import { cn } from '$/shared/utils'

export interface ISliderCommonProps {
  min: number
  max: number
  variant: TSliderVariants
  step?: number
}

type TSliderControlClasses = TFieldAttachmentClasses &
  TFieldWrapperClasses &
  TSliderClasses & {
    spanLeft?: string
    spanRight?: string
    sliderContainer?: string
    sliderRoot?: string
    input?: string
    message?: string
    textWrapper?: string
  }

export interface ISliderControlProps<T extends FieldValues>
  extends TCommonFieldProps<T>,
    ISliderCommonProps,
    Omit<IFieldAttachmentProps, 'invalid' | 'isTouched'> {
  classes?: TSliderControlClasses
  disabled?: boolean
  size?: TFieldContainerConfig['size']
  onInputChange?: (value?: number, ...args: unknown[]) => void
  leftText?: string | React.ReactElement
  rightText?: string | React.ReactElement
}

export const SliderControl = <T extends FieldValues>({
  label,
  size = 'full',
  helperText,
  control,
  classes,
  disabled,
  onInputChange,
  min,
  max,
  variant,
  leftText,
  rightText,
  badge,
  withValidateIcons = true,
  icon,
  onClickIcon,
  onKeyDownIcon,
  ...props
}: ISliderControlProps<T>) => {
  const defaultIcon = (
    <Icon
      name='general/edit'
      className='size-[19px] text-icon-blue-grey-600 transition-[color] group-focus-within/icon:text-icon-blue-grey-800'
    />
  )

  const inputId = React.useId()
  const ref = React.useRef<HTMLInputElement>(null)

  const handleIconClick = () => {
    if (ref.current) {
      ref?.current?.focus()
    }

    if (onClickIcon) {
      onClickIcon()
    }
  }

  const { handleBlur, getSuffixText, fromSlider, toSlider } = useSlider(min, max, 0)
  return (
    <Controller
      control={control}
      name={props.name}
      render={({ field: { onChange, value, onBlur }, fieldState: { error } }) => {
        const sliderValue = toSlider(value)
        return (
          <div className={cn('flex flex-col gap-1', classes?.sliderRoot)}>
            <FieldContainer size={size} className={classes?.sliderContainer}>
              <FieldWrapper
                label={label}
                value={value}
                error={Boolean(error?.message)}
                fieldId={inputId}
                disabled={disabled}
                classes={{
                  fieldWrapperRoot: cn(
                    'bg-color-white hover:bg-color-blue-grey-200 focus-within:bg-color-blue-grey-200 focus:bg-color-blue-grey-200 border-blue-grey-500',
                    classes?.fieldWrapperRoot
                  ),
                  ...classes
                }}
              >
                <>
                  <NumericFormat
                    id={inputId}
                    aria-invalid={error?.message ? 'true' : 'false'}
                    onBlur={() => {
                      handleBlur(value, onChange)
                      onBlur()
                    }}
                    value={value}
                    disabled={disabled}
                    suffix={` ${getSuffixText(value, variant)}`}
                    thousandsGroupStyle='thousand'
                    thousandSeparator={' '}
                    allowNegative={false}
                    getInputRef={ref}
                    onValueChange={({ floatValue }) => {
                      if (floatValue) {
                        onChange(floatValue)
                        if (onInputChange) {
                          onInputChange(floatValue)
                        }
                      }
                    }}
                    className={cn(
                      'group/slider desk-title-bold-s h-[56px] w-full rounded-md bg-color-transparent px-4 pt-5 text-color-dark outline-none transition-all',
                      classes?.input
                    )}
                    {...props}
                  />
                  <Slider
                    onValueChange={(inputValue) => {
                      const newValue = fromSlider(inputValue[0])
                      onChange(newValue)
                    }}
                    value={[sliderValue]}
                    min={toSlider(min)}
                    max={toSlider(max)}
                    step={0.01}
                    variant={variant}
                  />

                  <FieldAttachment
                    badge={badge}
                    withValidateIcons={withValidateIcons}
                    icon={icon || defaultIcon}
                    onClickIcon={handleIconClick}
                    onKeyDownIcon={onKeyDownIcon}
                    classes={{
                      icon: cn('group/icon', classes?.icon),
                      ...classes
                    }}
                  />
                </>
              </FieldWrapper>

              <MessageView
                className={classes?.message}
                intent={error?.message ? 'error' : 'simple'}
                text={error?.message || helperText}
                disabled={disabled}
              />
            </FieldContainer>
            <div className={cn('flex justify-between', classes?.textWrapper)}>
              <span className={cn('desk-body-regular-m text-color-tetriary', classes?.spanLeft)}>{leftText}</span>
              <span className={cn('desk-body-regular-m text-color-tetriary', classes?.spanRight)}>{rightText}</span>
            </div>
          </div>
        )
      }}
    />
  )
}
