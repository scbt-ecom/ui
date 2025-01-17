import * as React from 'react'
import { forwardRef } from 'react'
import { NumericFormat } from 'react-number-format'
import type { TSliderVariants } from './model/types'
import { useSlider } from './model/useSlider'
import { Slider } from './ui'
import { Icon, type InputBaseProps, Uncontrolled } from '$/shared/ui'
import { type InputBaseClasses } from '$/shared/ui/formElements/uncontrolled/input/Input'
import { cn, mergeRefs } from '$/shared/utils'

const defaultIcon = (
  <Icon
    name='general/edit'
    className='size-[19px] text-icon-blue-grey-600 transition-[color] group-focus-within/icon:text-icon-blue-grey-800'
  />
)

export type SliderBaseClasses = {
  root?: string
  textContainer?: string
  input?: string
  labelClasses?: string
  textRight?: string
  textLeft?: string
  slider?: SliderBaseClasses
  inputRoot?: InputBaseClasses
}

export type ExternalHandlers = {
  onClick?: (event: React.MouseEvent<HTMLElement>) => void
  onBlur?: (event: React.FocusEvent<HTMLElement>) => void
  onFocus?: (event: React.FocusEvent<HTMLElement>) => void
  onInputChange?: (value?: number) => void
}

export interface SliderBaseProps
  extends Omit<InputBaseProps, 'externalHandlers' | 'onChange' | 'value' | 'defaultValue' | 'type'> {
  /**
   * Объект classes с помощью которого можно поменять стили у компонента
   */
  classes?: SliderBaseClasses
  /**
   * Левый текст под слайдером
   */
  leftText: string | React.ReactElement
  /**
   * Правый текст под слайдером
   */
  rightText: string | React.ReactElement
  /**
   * Значение
   */
  value?: number
  /**
   * Значение
   */
  defaultValue?: number
  /**
   * Сеттер инпута
   * @param value значение инпута
   */
  onChange: (value: number | undefined) => void
  /**
   * Минимальное значение инпута
   */
  min: number
  /**
   * Максимальное значение инпута
   */
  max: number
  /**
   * Вариант инпута по дефолту credit (если использовать years то префикс поменяется на (лет, год, года в зависимости от склонения value)
   */
  variant: TSliderVariants
  /**
   * Label инпута
   */
  label: string
  /**
   * Шаг слайдера (если использовать вариант credit, то step будет проигнорирован)
   */
  step?: number
  /**
   * Дополнительные хендлеры
   */
  externalHandlers?: ExternalHandlers
  type?: 'text' | 'tel' | 'password'
}

export const SliderBase = forwardRef<HTMLInputElement, SliderBaseProps>(
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
      step,
      attachmentProps,
      ...props
    },
    ref
  ) => {
    const inputId = React.useId()

    const inputRef = React.useRef<HTMLInputElement>(null)

    const handleIconClick = () => {
      inputRef?.current?.focus()
    }

    const { handleBlur, getSuffixText, fromSlider, toSlider, sliderValue } = useSlider({
      min,
      max,
      defaultValue: 0,
      value,
      variant
    })

    const { root, slider, textLeft, textRight, inputRoot, textContainer, input } = classes || {}

    return (
      <>
        <div className={cn('relative w-full', root)}>
          <Uncontrolled.InputBase
            label={label}
            value={value}
            attachmentProps={{
              onClickIcon: attachmentProps?.onClickIcon || handleIconClick,
              icon: attachmentProps?.icon || defaultIcon,
              ...attachmentProps
            }}
            classes={{
              container: 'border-[1px] bg-color-white border-blue-grey-500 focus-within:border-blue-grey-800',
              ...inputRoot
            }}
            onBlur={(e) => {
              handleBlur(value, onChange)
              if (props?.onBlur) props?.onBlur(e)
              if (externalHandlers?.onBlur) externalHandlers.onBlur(e)
            }}
            onClick={externalHandlers?.onClick}
            onFocus={externalHandlers?.onBlur}
            renderValues={() => (
              <NumericFormat
                id={inputId}
                aria-invalid={invalid ? 'true' : 'false'}
                value={value}
                disabled={disabled}
                suffix={` ${getSuffixText(value, variant)}`}
                thousandsGroupStyle='thousand'
                thousandSeparator={' '}
                allowNegative={false}
                getInputRef={mergeRefs(inputRef, ref)}
                onValueChange={({ floatValue }) => {
                  if (floatValue) {
                    onChange(floatValue)
                    if (externalHandlers?.onInputChange) {
                      externalHandlers.onInputChange(floatValue)
                    }
                  }
                }}
                className={cn(
                  'group/slider desk-title-bold-s w-full bg-color-transparent text-color-dark outline-none transition-all',
                  input
                )}
                {...props}
              />
            )}
          />
          <Slider
            onValueChange={(inputValue) => {
              const newValue = variant === 'credit' ? fromSlider(inputValue[0]) : inputValue[0]
              onChange(newValue)
            }}
            value={[sliderValue]}
            classes={{
              ...slider,
              root: 'absolute'
            }}
            disabled={disabled}
            min={variant === 'credit' ? toSlider(min) : min}
            max={variant === 'credit' ? toSlider(max) : max}
            step={variant === 'credit' ? 0.01 : step || 1}
            variant={variant}
          />
        </div>
        <div className={cn('flex justify-between', textContainer)}>
          <span className={cn('desk-body-regular-m text-color-tetriary', textLeft)}>{leftText}</span>
          <span className={cn('desk-body-regular-m text-color-tetriary', textRight)}>{rightText}</span>
        </div>
      </>
    )
  }
)
