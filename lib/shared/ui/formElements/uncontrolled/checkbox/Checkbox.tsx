import { forwardRef } from 'react'
import { type CheckboxProps as CheckboxPrimitiveProps, type CheckedState, Indicator, Root } from '@radix-ui/react-checkbox'
import { Icon } from '$/shared/ui'
import { cn } from '$/shared/utils'

export type CheckboxBaseClasses = {
  root?: string
  indicator?: string
  icon?: string
}

export type { CheckedState }

export type CheckboxBaseProps = CheckboxPrimitiveProps & {
  /**
   * Дополнительные стили внутренних компонентов
   */
  classes?: CheckboxBaseClasses
  /**
   * Свойство для отображения не валидного поля
   */
  invalid?: boolean
}

export const CheckboxBase = forwardRef<HTMLButtonElement, CheckboxBaseProps>(
  ({ classes, className, invalid, disabled, ...props }, ref) => {
    return (
      <Root
        {...props}
        disabled={disabled}
        ref={ref}
        className={cn(
          'flex h-6 max-h-6 min-h-6 w-6 min-w-6 max-w-6 items-center justify-center rounded-full',
          'relative rounded-sm border-2 border-blue-grey-700 outline-none',
          'after:left-1/2 after:top-1/2 after:h-10 after:w-10 after:-translate-x-1/2 after:-translate-y-1/2 after:content-[""]',
          'after:absolute after:rounded-full [&:not(:disabled)]:hover:after:bg-color-primary-tr-hover',
          'after:duration-100 [&:not(:disabled)]:active:after:bg-color-primary-tr-pressed',
          'after:-z-10 [&:not(:disabled)]:focus:after:bg-color-primary-tr-focus',
          {
            'border-negative': invalid,
            'disabled:border-0 disabled:bg-color-blue-grey-300': disabled
          },
          classes?.root,
          className
        )}
      >
        <Indicator
          className={cn(
            'h-6 w-6 rounded-sm bg-color-primary-default group-disabled:bg-color-primary-disabled',
            classes?.indicator
          )}
        >
          <Icon name='general/check' className={cn('size-6 text-icon-white', classes?.icon)} />
        </Indicator>
      </Root>
    )
  }
)
CheckboxBase.displayName = 'CheckboxBase'
