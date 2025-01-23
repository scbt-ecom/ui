import { forwardRef, useId } from 'react'
import { FieldAttachment } from '../../ui'
import { type DeepPartial } from '$/shared/types'
import { cn } from '$/shared/utils'

export type InputBaseClasses = {
  container?: string
  input?: string
  label?: string
  renderWrapper?: string
}

type FieldAttachmentProps = React.ComponentPropsWithoutRef<typeof FieldAttachment>

type ExternalHandlers = {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void
  onFocus?: (event: React.FocusEvent<HTMLDivElement>) => void
  onBlur?: (event: React.FocusEvent<HTMLDivElement>) => void
}

export type InputBaseProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'placeholder' | 'size'> & {
  /**
   * Дополнительные стили внутренних компонентов
   */
  classes?: InputBaseClasses
  /**
   * Отображаемый placeholder
   */
  label: string
  /**
   * Отображение не валидного поля
   */
  invalid?: boolean
  /**
   * Свойства дополнительной иконки
   */
  attachmentProps?: DeepPartial<FieldAttachmentProps>
  /**
   * Рендер дополнительных значений вместо базового ввода
   */
  renderValues?: () => React.JSX.Element | null
  /**
   * Дополнительные хендлеры
   */
  externalHandlers?: ExternalHandlers
}

export const InputBase = forwardRef<HTMLInputElement, InputBaseProps>(
  ({ label, value, invalid, disabled, classes, renderValues, attachmentProps, externalHandlers, onChange, ...props }, ref) => {
    const id = useId()

    const { onChange: externalOnChange, ...restHandlers } = externalHandlers || {}

    const onValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (onChange) onChange(event)
      if (externalOnChange) externalOnChange(event)
    }

    return (
      <div
        ref={renderValues ? ref : undefined}
        className={cn(
          'bg-color-blue-grey-100 relative flex w-full gap-x-4 rounded-sm',
          'focus-within:[&_label]:top-[9px] focus-within:[&_label]:translate-y-0',
          'focus-within:[&_label]:desk-body-regular-s',
          'focus-within:[&_label]:text-color-tetriary',
          'hover:bg-color-blue-grey-200',
          'focus-within:border-blue-grey-800 border-[1px] border-transparent',
          {
            'border-secondary-default': invalid
          },
          classes?.container
        )}
      >
        {renderValues ? (
          <div
            onClick={props.onClick}
            onBlur={props.onBlur}
            className={cn(
              'peer desk-body-regular-l bg-color-transparent min-h-[54px] w-full [&_input]:px-4 [&_input]:pt-[28px] [&_input]:pb-[6px]',
              'text-color-dark placeholder:text-color-transparent outline-hidden',
              'flex flex-row flex-wrap gap-2',
              classes?.renderWrapper
            )}
          >
            {renderValues()}
          </div>
        ) : (
          <input
            {...props}
            {...restHandlers}
            onChange={onValueChange}
            disabled={disabled}
            value={value ?? ''}
            placeholder={label}
            aria-placeholder={label}
            ref={ref}
            id={id}
            className={cn(
              'peer desk-body-regular-l bg-color-transparent w-full px-4 pt-[25px] pb-[9px]',
              'text-color-dark placeholder:text-color-transparent outline-hidden',
              {
                hidden: Boolean(renderValues)
              },
              classes?.input
            )}
          />
        )}
        <label
          htmlFor={id}
          className={cn(
            'desk-body-regular-l pointer-events-none absolute left-4',
            'text-color-blue-grey-600 top-1/2 -translate-y-1/2 duration-100',
            {
              'desk-body-regular-s text-color-tetriary top-[9px] translate-y-0': Boolean(value),
              'text-color-disabled': disabled
            },
            classes?.label
          )}
        >
          {label}
        </label>
        {attachmentProps && <FieldAttachment {...attachmentProps} />}
      </div>
    )
  }
)
InputBase.displayName = 'InputBase'
