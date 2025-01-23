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
            'w-full min-w-[200px] not-last:mb-4',
            'not-disabled:cursor-pointer',
            {
              'text-color-disabled pointer-events-none': disabled
            },
            className,
            classes?.item
          )}
        >
          <div
            className={cn(
              'after:top-1/2 after:left-1/2 after:h-10 after:w-10',
              'after:-translate-x-1/2 after:-translate-y-1/2 after:content-[""]',
              'not-disabled:hover:after:bg-color-primary-tr-hover after:absolute after:rounded-full',
              'not-disabled:active:after:bg-color-primary-tr-pressed after:duration-100',
              'not-disabled:focus:after:bg-color-primary-tr-focus after:-z-10',
              'border-blue-grey-700 relative h-6 w-6 rounded-full border-2',
              'group-data-[state=checked]:border-primary-default',
              {
                'border-negative': invalid,
                'group-data-[state=checked]:border-primary-disabled group-data-[state=unchecked]:bg-color-blue-grey-300 group-data-[state=unchecked]:border-0':
                  disabled
              }
            )}
          >
            <Indicator
              className={cn(
                'bg-color-primary-default absolute top-1/2 left-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full',
                'group-data-[state=checked]:group-disabled:bg-color-negative',
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
              'desk-body-regular-l text-color-dark capitalize',
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
