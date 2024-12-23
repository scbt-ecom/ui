import { forwardRef } from 'react'
import { type RadioGroupProps as RadioGroupPrimitiveProps, Root } from '@radix-ui/react-radio-group'
import { RadioItem, type RadioItemProps, type RadioOption } from './ui'
import { cn } from '$/shared/utils'

type RadioGroupClasses = RadioItemProps['classes'] & {
  root?: string
  list?: string
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
}

export const RadioGroupBase = forwardRef<HTMLDivElement, RadioGroupBaseProps>(
  ({ options, displayValue, returnValue, invalid, className, disabled, classes, ...props }, ref) => {
    const { root, list, ...restClasses } = classes || {}

    return (
      <Root {...props} disabled={disabled} ref={ref} className={cn('w-full', className, root)}>
        <ul className={cn('w-full', list)}>
          {options.map((option) => (
            <RadioItem
              key={option.id}
              item={option}
              invalid={invalid}
              disabled={disabled}
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
