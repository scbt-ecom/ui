import { forwardRef, useId } from 'react'
import { FieldAttachment } from '../../ui'
import { type DeepPartial } from '$/shared/types'
import { cn } from '$/shared/utils'

type TextareaBaseClasses = {
  container?: string
  textarea?: string
  label?: string
}

type FieldAttachmentProps = React.ComponentPropsWithoutRef<typeof FieldAttachment>

type ExternalHandlers = {
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
  onClick?: (event: React.MouseEvent<HTMLTextAreaElement>) => void
  onFocus?: (event: React.FocusEvent<HTMLTextAreaElement>) => void
  onBlur?: (event: React.FocusEvent<HTMLTextAreaElement>) => void
}

export type TextareaBaseProps = Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'size' | 'className'> & {
  /**
   * Дополнительные стили внутренних компонентов
   */
  classes?: TextareaBaseClasses
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
   * Дополнительные хендлеры
   */
  externalHandlers?: ExternalHandlers
}

export const TextareaBase = forwardRef<HTMLTextAreaElement, TextareaBaseProps>(
  ({ label, value, invalid, disabled, classes, attachmentProps, rows = 4, externalHandlers, onChange, ...props }, ref) => {
    const id = useId()

    const { onChange: externalOnChange, ...restHandlers } = externalHandlers || {}

    const onValueChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      if (onChange) onChange(event)
      if (externalOnChange) externalOnChange(event)
    }

    return (
      <div
        className={cn(
          'bg-color-blue-grey-100 relative flex w-full items-start gap-x-4 rounded-sm pt-2 pr-1 pb-4 pl-4',
          'focus-within:[&_label]:text-color-tetriary',
          'hover:bg-color-blue-grey-200',
          'focus-within:border-blue-grey-800 border-[1px] border-transparent',
          {
            'border-secondary-default': invalid
          },
          classes?.container
        )}
      >
        <div className='flex w-full flex-col'>
          <label
            htmlFor={id}
            className={cn(
              'desk-body-regular-s pointer-events-none',
              'text-color-blue-grey-600 duration-100',
              {
                'text-color-disabled': disabled
              },
              classes?.label
            )}
          >
            {label}
          </label>
          <textarea
            {...props}
            {...restHandlers}
            rows={rows}
            disabled={disabled}
            value={value ?? ''}
            ref={ref}
            id={id}
            onChange={onValueChange}
            className={cn(
              'customScrollbar-y peer desk-body-regular-l bg-color-transparent w-full overflow-y-auto',
              'text-color-dark placeholder:text-color-blue-grey-600 resize-none outline-hidden',
              {
                'placeholder:text-color-disabled': disabled
              },
              classes?.textarea
            )}
          />
        </div>
        {attachmentProps && <FieldAttachment {...attachmentProps} />}
      </div>
    )
  }
)
TextareaBase.displayName = 'TextareaBase'
