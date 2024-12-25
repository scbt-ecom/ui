import { forwardRef, useId } from 'react'
import { FieldAttachment } from '../../ui'
import { type DeepPartial } from '$/shared/types'
import { cn } from '$/shared/utils'

type InputBaseClasses = {
  container?: string
  input?: string
  label?: string
}

type FieldAttachmentProps = React.ComponentPropsWithoutRef<typeof FieldAttachment>

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
}

export const InputBase = forwardRef<HTMLInputElement, InputBaseProps>(
  ({ label, value, invalid, disabled, classes, renderValues, attachmentProps, ...props }, ref) => {
    const id = useId()

    return (
      <div
        ref={renderValues ? ref : undefined}
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
          classes?.container
        )}
      >
        {renderValues ? (
          <div
            onClick={props.onClick}
            onBlur={props.onBlur}
            className={cn(
              'peer desk-body-regular-l min-h-[54px] w-full bg-color-transparent px-4 pb-[6px] pt-[28px]',
              'text-color-dark outline-none placeholder:text-color-transparent',
              'flex flex-row flex-wrap gap-2'
            )}
          >
            {renderValues()}
          </div>
        ) : (
          <input
            {...props}
            disabled={disabled}
            value={value}
            placeholder={label}
            aria-placeholder={label}
            ref={ref}
            id={id}
            className={cn(
              'peer desk-body-regular-l w-full bg-color-transparent px-4 pb-[9px] pt-[25px]',
              'text-color-dark outline-none placeholder:text-color-transparent',
              classes?.input
            )}
          />
        )}
        <label
          htmlFor={id}
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
        {attachmentProps && <FieldAttachment {...attachmentProps} />}
      </div>
    )
  }
)
InputBase.displayName = 'InputBase'
