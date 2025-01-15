import * as React from 'react'
import { forwardRef } from 'react'
import { NumericFormat } from 'react-number-format'
import type { DeepPartial } from '$/shared/types'
import type { TSliderVariants } from '$/shared/ui/formElements/sliderControl/model/types'
import { useSlider } from '$/shared/ui/formElements/sliderControl/model/useSlider'
import { Slider, type TSliderClasses } from '$/shared/ui/formElements/sliderControl/ui'
import { type FieldAttachment, type TFieldAttachmentClasses } from '$/shared/ui/formElements/ui'
import { cn } from '$/shared/utils'

type SliderClasses = TFieldAttachmentClasses &
  TSliderClasses & {
    spanLeft?: string
    spanRight?: string
    sliderContainer?: string
    sliderRoot?: string
    input?: string
    message?: string
    label?: string
    textWrapper?: string
  }

export type ExternalHandlers = {
  onClick?: (event: React.MouseEvent<HTMLElement>) => void
  onBlur?: (event: React.FocusEvent<HTMLElement>) => void
  onFocus?: (event: React.FocusEvent<HTMLElement>) => void
  onInputChange?: (value?: number) => void
}

type FieldAttachmentProps = React.ComponentPropsWithoutRef<typeof FieldAttachment>

interface SliderProps {
  classes?: SliderClasses
  invalid?: boolean
  attachmentProps?: DeepPartial<FieldAttachmentProps>
  disabled?: boolean
  leftText: string | React.ReactElement
  rightText: string | React.ReactElement
  externalHandlers?: ExternalHandlers
  value: number
  onChange: (value: number | undefined) => void
  min: number
  max: number
  variant: TSliderVariants
  step?: number
  label?: string
}

export const SliderBase = forwardRef<HTMLInputElement, SliderProps>(
  (
    {
      classes,
      invalid,
      externalHandlers,
      leftText,
      rightText,
      disabled,
      value,
      onChange,
      min,
      max,
      variant,
      label,
      ...props
    }: SliderProps,
    ref
  ) => {
    const inputId = React.useId()

    const { getSuffixText, fromSlider, toSlider } = useSlider(min, max, 0)
    const sliderValue = toSlider(value)

    return (
      <>
        <div
          className={cn(
            'relative flex w-full gap-x-4 rounded-sm bg-color-blue-grey-100',
            '[&_label]:focus-within:top-[9px] [&_label]:focus-within:translate-y-0',
            '[&_label]:focus-within:desk-body-regular-s',
            '[&_label]:focus-within:text-color-tetriary',
            'hover:bg-color-blue-grey-200',
            'border-[1px] border-transparent focus-within:border-blue-grey-800',
            {
              'border-secondary-default': invalid
            },
            classes?.sliderContainer
          )}
        >
          <>
            <NumericFormat
              id={inputId}
              aria-invalid={invalid ? 'true' : 'false'}
              onBlur={externalHandlers?.onBlur}
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
                  if (externalHandlers?.onInputChange) {
                    externalHandlers.onInputChange(floatValue)
                  }
                }
              }}
              className={cn(
                'group/slider desk-title-bold-s h-[56px] w-full rounded-md bg-color-transparent px-4 pt-5 text-color-dark outline-none transition-all',
                classes?.input
              )}
              {...props}
            />
            <label
              htmlFor={inputId}
              className={cn(
                'desk-body-regular-l pointer-events-none absolute left-4',
                'top-1/2 -translate-y-1/2 text-color-blue-grey-600 duration-100',
                {
                  'desk-body-regular-s top-[9px] translate-y-0 text-color-tetriary': Boolean(value),
                  'text-color-disabled': disabled
                },
                classes?.label
              )}
            >
              {label}
            </label>
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
          </>
        </div>
        <div className={cn('flex justify-between', classes?.textWrapper)}>
          <span className={cn('desk-body-regular-m text-color-tetriary', classes?.spanLeft)}>{leftText}</span>
          <span className={cn('desk-body-regular-m text-color-tetriary', classes?.spanRight)}>{rightText}</span>
        </div>
      </>
    )
  }
)
