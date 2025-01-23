import { useId } from 'react'
import { type Control, type FieldPath, type FieldValues, useController, type UseControllerProps } from 'react-hook-form'
import { Icon, Popover, type SwitchBaseProps, Uncontrolled } from '$/shared/ui'
import { cn } from '$/shared/utils'

type SwitchControlClasses = SwitchBaseProps['classes'] & {
  container?: string
  message?: string
}

type PopoverProps = React.ComponentPropsWithoutRef<typeof Popover>

export type SwitchControlProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = UseControllerProps<TFieldValues, TName> &
  Omit<SwitchBaseProps, 'classes'> & {
    /**
     * Контрол объект для управления полем
     */
    control: Control<TFieldValues>
    /**
     * Отображаемый лейбл
     */
    children: React.ReactElement | string
    /**
     * Дополнительные стили компонента
     */
    classes?: SwitchControlClasses
    /**
     * Дополнительный текст
     */
    helperText?: string
    /**
     * Текст всплывающей подсказки
     */
    tooltip?: React.ReactElement | string
    /**
     * Свойства `Popover` компонента
     */
    popoverProps?: PopoverProps
  }

export const SwitchControl = <TFieldValues extends FieldValues = FieldValues>({
  classes,
  className,
  control,
  name,
  rules,
  defaultValue,
  disabled,
  shouldUnregister,
  children,
  helperText,
  tooltip,
  popoverProps,
  ...props
}: SwitchControlProps<TFieldValues>) => {
  const { field } = useController({
    control,
    name,
    rules,
    defaultValue,
    disabled,
    shouldUnregister
  })

  const { value, onChange, ...restField } = field
  const { container, message, ...restClasses } = classes || {}

  const id = useId()

  return (
    <div
      className={cn(
        'flex items-center gap-x-2',
        {
          'pointer-events-none': disabled
        },
        className,
        container
      )}
    >
      <Uncontrolled.SwitchBase
        {...props}
        {...restField}
        classes={restClasses}
        id={id}
        checked={value}
        onCheckedChange={onChange}
      />
      <label
        htmlFor={id}
        className={cn('mob-body-regular-l text-color-dark', {
          'flex flex-col': Boolean(helperText),
          'text-color-disabled': disabled
        })}
      >
        {children}
        {helperText && (
          <p
            className={cn(
              'mob-body-regular-s text-color-tetriary',
              {
                'text-color-disabled': disabled
              },
              message
            )}
          >
            {helperText}
          </p>
        )}
      </label>
      {tooltip && (
        <Popover
          side='top'
          classes={{ root: 'self-start py-[2px]' }}
          triggerElement={
            <Icon
              name='info/helpCircle'
              className={cn('text-color-blue-grey-600 size-4', {
                'text-icon-blue-grey-100': disabled
              })}
            />
          }
          {...popoverProps}
        >
          {tooltip}
        </Popover>
      )}
    </div>
  )
}
