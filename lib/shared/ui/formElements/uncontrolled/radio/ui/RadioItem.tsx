import { memo, useId } from 'react'
import { Indicator, Item, type RadioGroupItemProps } from '@radix-ui/react-radio-group'
import { cn } from '$/shared/utils'

export type RadioOption = {
  id: number | string
  value: string
  label: string
  disabled?: boolean
}

export type RadioItemClasses = {
  root?: string
  item?: string
  indicator?: string
  label?: string
}

export type RadioItemProps = Omit<RadioGroupItemProps, 'value'> & {
  /**
   * Опция списка
   */
  item: RadioOption
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
  classes?: RadioItemClasses
  /**
   * Свойство для отображения не валидного поля
   */
  invalid?: boolean
}

export const RadioItem = memo(
  ({ item, disabled, displayValue, returnValue, classes, className, invalid, ...props }: RadioItemProps) => {
    const label = displayValue ? displayValue(item) : item.label
    const value = returnValue ? returnValue(item) : item.value

    const id = useId()

    return (
      <Item {...props} asChild disabled={disabled} value={value} id={id}>
        <li
          className={cn(
            'group flex items-center gap-x-3',
            'w-full min-w-[200px] [&:not(:last-child)]:mb-4',
            '[&:not(:disabled)]:cursor-pointer',
            {
              'pointer-events-none text-color-disabled': disabled
            },
            className,
            classes?.root
          )}
        >
          <div
            className={cn(
              'after:left-1/2 after:top-1/2 after:h-10 after:w-10',
              'after:-translate-x-1/2 after:-translate-y-1/2 after:content-[""]',
              'after:absolute after:rounded-full [&:not(:disabled)]:hover:after:bg-color-primary-tr-hover',
              'after:duration-100 [&:not(:disabled)]:active:after:bg-color-primary-tr-pressed',
              'after:-z-10 [&:not(:disabled)]:focus:after:bg-color-primary-tr-focus',
              'relative h-6 w-6 rounded-full border-2 border-blue-grey-700',
              'group-data-[state=checked]:border-primary-default',
              {
                'border-negative': invalid,
                'group-data-[state=unchecked]:border-0 group-data-[state=checked]:border-primary-disabled group-data-[state=unchecked]:bg-color-blue-grey-300':
                  disabled
              },
              classes?.item
            )}
          >
            <Indicator
              className={cn(
                'absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-color-primary-default',
                'group-disabled:group-data-[state=checked]:bg-color-negative',
                {
                  'group-data-[state=checked]:bg-color-primary-disabled': disabled
                },
                classes?.indicator
              )}
            />
          </div>
          <label
            htmlFor={id}
            className={cn(
              'desk-body-regular-l capitalize text-color-dark',
              {
                'text-color-disabled': disabled
              },
              classes?.label
            )}
          >
            {label}
          </label>
        </li>
      </Item>
    )
  }
)
