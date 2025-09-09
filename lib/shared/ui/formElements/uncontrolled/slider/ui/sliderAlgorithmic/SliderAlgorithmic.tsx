import * as React from 'react'
import { forwardRef } from 'react'
import { NumericFormat } from 'react-number-format'
import { type SliderAlgorithmicProps } from '../../model'
import { getInputSliderSuffix } from '../../model/helpers'
import { SliderInner } from '../Slider'
import { useSliderAlgorithmic } from './hooks'
import { Icon, InputBase } from '$/shared/ui'
import { cn, mergeRefs } from '$/shared/utils'

const defaultIcon = (
  <Icon
    name='general/edit'
    className='size-[19px] text-icon-blue-grey-600 transition-[color] group-focus-within/icon:text-icon-blue-grey-800'
  />
)

export const SliderAlgorithmic = forwardRef<HTMLInputElement, SliderAlgorithmicProps>(
  (
    {
      classes,
      invalid,
      externalHandlers,
      disabled,
      value,
      onChange,
      min,
      max,
      suffix,
      label,
      attachmentProps,
      additionalSuffix,
      readOnly,
      componentType,
      ...props
    },
    ref
  ) => {
    const inputId = React.useId()

    const inputRef = React.useRef<HTMLInputElement>(null)

    const handleIconClick = () => {
      inputRef?.current?.focus()
    }

    const { sliderValue, sliderStep, sliderMin, sliderMax, handleChangeSlider } = useSliderAlgorithmic({
      min,
      max,
      defaultValue: 0,
      value,
      onChange
    })

    const { root, slider, textLeft, textRight, inputRoot, textContainer, input, field } = classes || {}

    return (
      <div aria-label={componentType} className={cn('flex w-full flex-col gap-1', root)}>
        <div className={cn('relative w-full select-none', { ['select-none']: readOnly }, field)}>
          <InputBase
            label={label}
            value={value}
            attachmentProps={{
              onClickIcon: readOnly ? undefined : attachmentProps?.onClickIcon || handleIconClick,
              icon: readOnly ? undefined : attachmentProps?.icon || defaultIcon,
              ...attachmentProps
            }}
            classes={{
              container: 'border-[1px] bg-color-white border-blue-grey-500 focus-within:border-blue-grey-800',
              ...inputRoot
            }}
            onBlur={(e) => {
              if (props?.onBlur) props?.onBlur(e)
              if (externalHandlers?.onBlur) externalHandlers.onBlur(e)
            }}
            onClick={externalHandlers?.onClick}
            onFocus={externalHandlers?.onBlur}
            renderValues={() => (
              <NumericFormat
                id={inputId}
                readOnly={readOnly}
                aria-invalid={invalid ? 'true' : 'false'}
                value={value}
                disabled={disabled}
                suffix={` ${getInputSliderSuffix(suffix, value)} ${additionalSuffix ?? ''}`}
                thousandsGroupStyle='thousand'
                thousandSeparator={' '}
                allowNegative={false}
                getInputRef={mergeRefs(inputRef, ref)}
                onValueChange={({ floatValue }) => {
                  if (floatValue !== undefined) {
                    if (onChange) onChange(floatValue)
                    externalHandlers?.onInputChange?.(floatValue)
                  }
                }}
                data-test-id='slider'
                className={cn(
                  'group/slider desk-title-bold-s w-full bg-color-transparent text-color-dark outline-none transition-all',

                  input
                )}
                {...props}
              />
            )}
          />
          <SliderInner
            classes={{ ...slider }}
            step={sliderStep}
            value={sliderValue}
            disabled={disabled}
            min={Number(sliderMin)}
            max={Number(sliderMax)}
            onChange={handleChangeSlider}
            externalHandlers={externalHandlers}
          />
        </div>
        <div className={cn('flex justify-between', textContainer)}>
          {min && (
            <span className={cn('desk-body-regular-m text-color-tetriary', textLeft)}>
              {getInputSliderSuffix(suffix, min, false)}
            </span>
          )}
          {max && (
            <span className={cn('desk-body-regular-m text-color-tetriary', textRight)}>
              {getInputSliderSuffix(suffix, max, false)}
            </span>
          )}
        </div>
      </div>
    )
  }
)
