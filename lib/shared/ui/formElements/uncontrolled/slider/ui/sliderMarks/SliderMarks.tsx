import * as React from 'react'
import { forwardRef } from 'react'
import { NumericFormat } from 'react-number-format'
import { getInputSliderSuffix } from '../../model/helpers'
import { type SliderMarksProps } from '../../model/types'
import { SliderInner } from '../../ui/Slider'
import { useSliderMarks } from './hooks/useSliderMarks'
import { Uncontrolled } from '$/shared/ui'
import { cn, mergeRefs } from '$/shared/utils'

export const SliderMarks = forwardRef<HTMLInputElement, SliderMarksProps>(
  (
    {
      classes,
      invalid,
      externalHandlers,
      disabled,
      value,
      readOnly = true,
      onChange,
      suffix,
      label,
      marks,
      attachmentProps,
      additionalSuffix,
      componentType,
      ...props
    },
    ref
  ) => {
    const inputId = React.useId()

    const inputRef = React.useRef<HTMLInputElement>(null)

    const { sliderMin, sliderMax, handleChangeSlider } = useSliderMarks({
      marks,
      onChange
    })

    const { root, slider, textLeft, textRight, inputRoot, textContainer, input, field } = classes || {}
    return (
      <div aria-label={componentType} className={cn('flex w-full flex-col gap-1', root)}>
        <div className={cn('relative w-full select-none', field)}>
          <Uncontrolled.InputBase
            label={label}
            value={value}
            attachmentProps={{
              ...attachmentProps
            }}
            classes={{
              container: 'border-[1px] bg-color-white border-blue-grey-500 focus-within:border-blue-grey-800',
              ...inputRoot
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
                  if (floatValue) {
                    if (onChange) onChange(floatValue)
                    if (externalHandlers?.onInputChange) {
                      externalHandlers.onInputChange(floatValue)
                    }
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
            marks={marks}
            step={null}
            value={value ?? 0}
            disabled={disabled}
            min={Number(sliderMin)}
            max={Number(sliderMax)}
            onChange={handleChangeSlider}
          />
        </div>
        <div className={cn('flex justify-between', textContainer)}>
          {sliderMin && (
            <span className={cn('desk-body-regular-m text-color-tetriary', textLeft)}>
              {getInputSliderSuffix(suffix, sliderMin, false)}
            </span>
          )}
          {sliderMax && (
            <span className={cn('desk-body-regular-m text-color-tetriary', textRight)}>
              {getInputSliderSuffix(suffix, sliderMax, false)}
            </span>
          )}
        </div>
      </div>
    )
  }
)
