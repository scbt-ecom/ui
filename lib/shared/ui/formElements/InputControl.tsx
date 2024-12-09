import { useId } from 'react'
import { Controller, type FieldValues } from 'react-hook-form'
import { type TCommonFieldProps } from './model/types'
import {
  FieldAttachment,
  FieldContainer,
  FieldWrapper,
  type IFieldAttachmentProps,
  MessageView,
  type TFieldAttachmentClasses,
  type TFieldContainerConfig,
  type TFieldWrapperClasses
} from './ui'
import { cn } from '$/shared/utils'

type TInputControlClasses = TFieldAttachmentClasses &
  TFieldWrapperClasses & {
    root?: string
    input?: string
    message?: string
  }

export interface IInputControlProps<T extends FieldValues>
  extends TCommonFieldProps<T>,
    Omit<IFieldAttachmentProps, 'invalid' | 'isTouched'> {
  size?: TFieldContainerConfig['size']
  disabled?: boolean
  classes?: TInputControlClasses
}

export const InputControl = <T extends FieldValues>({
  label,
  helperText,
  control,
  disabled,
  size = 'full',
  classes,
  badge,
  withValidateIcons = true,
  icon,
  onClickIcon,
  onKeyDownIcon,
  ...props
}: IInputControlProps<T>) => {
  const inputId = useId()

  return (
    <Controller
      control={control}
      name={props.name}
      render={({ field: { value, onChange, ...field }, fieldState: { error, invalid, isTouched } }) => {
        return (
          <FieldContainer size={size} className={classes?.root}>
            <FieldWrapper
              label={label}
              value={value}
              error={Boolean(error?.message)}
              fieldId={inputId}
              disabled={disabled}
              classes={classes}
            >
              <input
                id={inputId}
                type='text'
                aria-invalid={error?.message ? 'true' : 'false'}
                disabled={disabled}
                value={value ?? ''}
                onChange={(e) => {
                  onChange(e)
                }}
                className={cn(
                  'desk-body-regular-l h-[56px] w-full rounded-md bg-color-transparent px-4 pt-5 text-color-dark outline-none transition-all',
                  classes?.input
                )}
                {...field}
                {...props}
              />
              <FieldAttachment
                badge={badge}
                withValidateIcons={withValidateIcons}
                icon={icon}
                onClickIcon={onClickIcon}
                onKeyDownIcon={onKeyDownIcon}
                classes={classes}
                invalid={invalid}
                isTouched={isTouched}
              />
            </FieldWrapper>
            <MessageView
              className={classes?.message}
              intent={error?.message ? 'error' : 'simple'}
              text={error?.message || helperText}
              disabled={disabled}
            />
          </FieldContainer>
        )
      }}
    />
  )
}
