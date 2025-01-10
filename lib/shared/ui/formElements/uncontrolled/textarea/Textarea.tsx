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

export type TextareaBaseProps = Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'> & {
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
}

export const TextareaBase = forwardRef<HTMLTextAreaElement, TextareaBaseProps>(
  ({ label, value, invalid, disabled, classes, attachmentProps, rows = 4, ...props }, ref) => {
    const id = useId()

    return (
      <div
        className={cn(
          'relative flex w-full items-start gap-x-4 rounded-sm bg-color-blue-grey-100 pb-4 pl-4 pr-1 pt-2',
          '[&_label]:focus-within:text-color-tetriary',
          'hover:bg-color-blue-grey-200',
          'border-[1px] border-transparent focus-within:border-blue-grey-800',
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
            rows={rows}
            disabled={disabled}
            value={value ?? ''}
            ref={ref}
            id={id}
            className={cn(
              'customScrollbar-y peer desk-body-regular-l w-full overflow-y-auto bg-color-transparent',
              'resize-none text-color-dark outline-none placeholder:text-color-blue-grey-600',
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
