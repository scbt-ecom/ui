import { forwardRef } from 'react'
import { type RadioGroupProps as RadioGroupPrimitiveProps, Root } from '@radix-ui/react-radio-group'
import { RadioItem, type RadioItemProps, type RadioOption } from './ui'
import { cn } from '$/shared/utils'

type RadioGroupClasses = RadioItemProps['classes'] & {
  root?: string
  list?: string
}

type ExternalHandlers = {
  onChange?: (value: string) => void
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  onFocus?: (event: React.FocusEvent<HTMLButtonElement>) => void
  onBlur?: (event: React.FocusEvent<HTMLButtonElement>) => void
}

export type RadioGroupBaseProps = Omit<RadioGroupPrimitiveProps, 'children'> & {
  /**
   * Список отображаемых опций
   */
  options: RadioOption[]
  /**
   * Функция для управления отображаемым значением
   */
  displayValue?: (option: RadioOption) => string
  /**
   * Функция для управления возвращаемым значением
   */
  returnValue?: (option: RadioOption) => string
  /**
   * Дополнительные стили внутренних компонентов
   */
  classes?: RadioGroupClasses
  /**
   * Свойство для отображения не валидного поля
   */
  invalid?: boolean
  /**
   * Дополнительные хендлеры
   */
  externalHandlers?: ExternalHandlers
}

export const RadioGroupBase = forwardRef<HTMLDivElement, RadioGroupBaseProps>(
  (
    { options, displayValue, returnValue, invalid, className, disabled, classes, externalHandlers, onValueChange, ...props },
    ref
  ) => {
    const { root, list, ...restClasses } = classes || {}

    const { onChange: externalOnChange, ...restHandlers } = externalHandlers || {}

    const onChange = (value: string) => {
      if (onValueChange) onValueChange(value)
      if (externalOnChange) externalOnChange(value)
    }

    return (
      <Root {...props} onValueChange={onChange} disabled={disabled} ref={ref} className={cn('w-full', className, root)}>
        <ul className={cn('w-full', list)}>
          {options.map((option) => (
            <RadioItem
              {...restHandlers}
              key={option.id}
              item={option}
              invalid={invalid}
              disabled={disabled || option?.disabled}
              classes={restClasses}
              returnValue={returnValue}
              displayValue={displayValue}
            />
          ))}
        </ul>
      </Root>
    )
  }
)
