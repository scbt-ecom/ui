import * as React from 'react'
import { forwardRef } from 'react'
import { NumericFormat } from 'react-number-format'
import type { TSliderVariants } from './model/types'
import { useSlider } from './model/useSlider'
import type { DeepPartial } from '$/shared/types'
import { Icon } from '$/shared/ui'
import { Slider, type TSliderClasses } from '$/shared/ui/formElements/sliderControl/ui'
import { FieldAttachment, type TFieldAttachmentClasses } from '$/shared/ui/formElements/ui'
import { cn, mergeRefs } from '$/shared/utils'

const defaultIcon = (
  <Icon
    name='general/edit'
    className='size-[19px] text-icon-blue-grey-600 transition-[color] group-focus-within/icon:text-icon-blue-grey-800'
  />
)

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
    container?: string
  }

export type ExternalHandlers = {
  onClick?: (event: React.MouseEvent<HTMLElement>) => void
  onBlur?: (event: React.FocusEvent<HTMLElement>) => void
  onFocus?: (event: React.FocusEvent<HTMLElement>) => void
  onInputChange?: (value?: number) => void
}

type FieldAttachmentProps = React.ComponentPropsWithoutRef<typeof FieldAttachment>

export interface SliderBaseProps {
  /**
   * Объект classes с помощью которого можно поменять стили у компонента
   */
  classes?: SliderClasses
  /**
   * Валидно ли поле
   */
  invalid?: boolean
  /**
   * Пропсы иконки
   */
  attachmentProps?: DeepPartial<FieldAttachmentProps>
  /**
   * Включение или выключение слайдера
   */
  disabled?: boolean
  /**
   * Левый текст под слайдером
   */
  leftText: string | React.ReactElement
  /**
   * Правый текст под слайдером
   */
  rightText: string | React.ReactElement
  /**
   * Объект ручек которые можно прокинуть из вне
   */
  externalHandlers?: ExternalHandlers
  /**
   * Значение инпута
   */
  value: number
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
  label?: string
  /**
   * Шаг слайдера (если использовать вариант credit, то step будет проигнорирован)
   */
  step?: number
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
    }: SliderBaseProps,
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

    return (
      <div className='flex flex-col gap-1'>
        <div
          className={cn(
            'relative flex w-full gap-x-4 rounded-sm bg-color-white transition-all duration-200',
            '[&_label]:focus-within:top-[9px] [&_label]:focus-within:translate-y-0',
            '[&_label]:focus-within:desk-body-regular-s',
            '[&_label]:focus-within:text-color-tetriary',
            'focus-within:bg-color-blue-grey-200 hover:bg-color-blue-grey-200 focus:bg-color-blue-grey-200',
            'border-[1px] border-blue-grey-500 focus-within:border-blue-grey-800',
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
              onBlur={(e) => {
                if (externalHandlers?.onBlur) externalHandlers.onBlur(e)
                handleBlur(value, onChange)
              }}
              onClick={externalHandlers?.onClick}
              onFocus={externalHandlers?.onBlur}
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
                const newValue = variant === 'credit' ? fromSlider(inputValue[0]) : inputValue[0]
                onChange(newValue)
              }}
              value={[sliderValue]}
              min={variant === 'credit' ? toSlider(min) : min}
              max={variant === 'credit' ? toSlider(max) : max}
              step={variant === 'credit' ? 0.01 : step || 1}
              variant={variant}
            />
            <FieldAttachment {...attachmentProps} onClickIcon={handleIconClick} icon={attachmentProps?.icon || defaultIcon} />
          </>
        </div>
        <div className={cn('flex justify-between', classes?.textWrapper)}>
          <span className={cn('desk-body-regular-m text-color-tetriary', classes?.spanLeft)}>{leftText}</span>
          <span className={cn('desk-body-regular-m text-color-tetriary', classes?.spanRight)}>{rightText}</span>
        </div>
      </div>
    )
  }
)
