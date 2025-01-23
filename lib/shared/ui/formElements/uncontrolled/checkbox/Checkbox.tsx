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

type ExternalHandlers = {
  onChange?: (value: CheckedState) => void
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  onBlur?: (event: React.FocusEvent<HTMLButtonElement>) => void
  onFocus?: (event: React.FocusEvent<HTMLButtonElement>) => void
}

export type CheckboxBaseProps = CheckboxPrimitiveProps & {
  /**
   * Дополнительные стили внутренних компонентов
   */
  classes?: CheckboxBaseClasses
  /**
   * Свойство для отображения не валидного поля
   */
  invalid?: boolean
  /**
   * Дополнительные хендлеры
   */
  externalHandlers?: ExternalHandlers
}

export const CheckboxBase = forwardRef<HTMLButtonElement, CheckboxBaseProps>(
  ({ classes, className, invalid, disabled, externalHandlers, ...props }, ref) => {
    const { onChange, ...restHandlers } = externalHandlers || {}

    const onCheckedChange = (value: CheckedState) => {
      if (props.onCheckedChange) props.onCheckedChange(value)
      if (onChange) onChange(value)
    }

    return (
      <Root
        {...props}
        {...restHandlers}
        onCheckedChange={onCheckedChange}
        disabled={disabled}
        ref={ref}
        className={cn(
          'flex h-6 max-h-6 min-h-6 w-6 max-w-6 min-w-6 items-center justify-center rounded-full',
          'border-blue-grey-700 relative rounded-sm border-2 outline-hidden',
          'after:top-1/2 after:left-1/2 after:h-10 after:w-10 after:-translate-x-1/2 after:-translate-y-1/2 after:content-[""]',
          'not-disabled:hover:after:bg-color-primary-tr-hover after:absolute after:rounded-full',
          'not-disabled:active:after:bg-color-primary-tr-pressed after:duration-100',
          'not-disabled:focus:after:bg-color-primary-tr-focus after:-z-10',
          {
            'border-negative': invalid,
            'disabled:bg-color-blue-grey-300 disabled:border-0': disabled
          },
          classes?.root,
          className
        )}
      >
        <Indicator
          className={cn(
            'bg-color-primary-default group-disabled:bg-color-primary-disabled h-6 w-6 rounded-sm',
            classes?.indicator
          )}
        >
          <Icon name='general/check' className={cn('text-icon-white size-6', classes?.icon)} />
        </Indicator>
      </Root>
    )
  }
)
CheckboxBase.displayName = 'CheckboxBase'
